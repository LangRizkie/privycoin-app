import type { NextComponentType } from 'next'
import Image from 'next/image'
import Styles from './sidebar.module.scss'
import Logo from '../../public/logo.svg'

const description: String = [
  'is a secure platform that makes it easy to buy,',
  'sell, and store cryptocurrency like Bitcoin,',
  'Ethereum, and more. Based in the USA'
].join(' ')

const Sidebar: NextComponentType = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <Image
          src={Logo}
          alt="Picture of the author"
          width={44}
          height={44}
        />
        Coinprivy
      </div>
      <div className={Styles.content}>
        <h1 className={Styles.title}>
          Welcome to<br />Coinprivy
        </h1>
        <p className={Styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Sidebar
