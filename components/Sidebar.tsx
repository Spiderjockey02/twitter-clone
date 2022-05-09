import React from 'react';
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon } from '@heroicons/react/outline';
import SidebarRow from './SidebarRow'
import {useSession, signOut, signIn} from 'next-auth/react'

function Sidebar() {
  const {data: session} = useSession()

  return (
    <div className="flex flex-col col-span-2 items-center ps-4 md:items-start">
      <img className="m-3 h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/292px-Twitter-logo.svg.png" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign out' : 'Sign In'} />

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar
