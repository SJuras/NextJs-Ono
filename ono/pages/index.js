import Head from 'next/head'
import Login from '../components/Login';

export default function Home() {

  const isAuthenticated = false;

  if(!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Ono | Decentralized Team Chat App</title>
        <meta name="description" content="Web3.0 team chat app" />
        <meta name="keywords" content="web3.0, decentralized, chat, app, team, slack clone" />
        <meta name="author" content="Sarif Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Ono Sendai</h1>

    </div>
  )
}
