import Head from 'next/head'
import * as React from 'react'
import Sidebar from '../components/sidebar/sidebar.module'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Coinprivy App</title>
        <meta name="description" content="Coinprivy App Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      {children}
    </main>
  )
}

export default Layout
