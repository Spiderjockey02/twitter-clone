import React from 'react';
import  {SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      {/* Search input */}
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <input type="text" placeholder="Search Twitter" className="flex-1 outline-none bg-transparent"/>
      </div>

      {/* Twitter timeline embed */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        autoHeight={true}
      />
    </div>
  )
}

export default Widgets
