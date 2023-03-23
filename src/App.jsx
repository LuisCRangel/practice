import './App.css'
import Carrusel from './components/Carrusel'
import Carrusel2 from './components/Carrusel2'
function App() {


  return (
    <div className="App border-2 h-screen text-center">
      <div className='bg-[#262B3A] h-2/5 flex items-center text-left'>
      <section className='w-1/4 h-56 mx-40 xl:mx-20 lg:mx-16' >
        <h2 className='text-white text-4xl mb-8 font-bold'>Big Comeback</h2>
          <p className='text-white mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusantium architecto repudiandae! Consequuntur porro rerum distinctio excepturi</p>
            <button className='btn bg-[#24BAEF] mr-6'>WATCH NOW</button>
            <button className='btn border border-slate-100'>+ PLAYLIST</button> 
      </section>
      <section className='w-1/4 h-56 flex'>
        <button className='w-32 h-32 border-2 rounded-full'>
        <i className='bx bx-play text-8xl ml-2 inset-1 py-1 text-cyan-600'></i>
        </button>
      </section>     
      </div>
      <div className='h-3/10'>
        <Carrusel/>
      </div>
      <div className='h-3/10'>
        <Carrusel2/>
      </div>
    </div>
  )
}

export default App
