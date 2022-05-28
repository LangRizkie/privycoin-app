import type { NextPage } from 'next'
import Authentication from './authentication'

const Home: NextPage = () => {
  return (
    <div className='w-full'>
      <Authentication />
    </div>
  )
}

export default Home
