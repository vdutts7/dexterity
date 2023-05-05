import Head from 'next/head' 
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-cover bg-center text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return(
    <div
      className={style.wrapper}
      style={{ backgroundImage: "url('/dexterity-bg.png')" }}
    >
      <Head>
        {/* Add page title and meta tags here */}
      </Head>
      <Header/>
      <Main/>
      <TransactionHistory/>
    </div>
  ) 
}