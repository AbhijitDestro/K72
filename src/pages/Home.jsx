import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-2 overflow-hidden flex flex-col justify-between'>
        <HomeTop />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home