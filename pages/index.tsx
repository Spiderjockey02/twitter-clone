import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets}/>
        <Widgets />
      </main>
    </div>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets
    }
  }
}
