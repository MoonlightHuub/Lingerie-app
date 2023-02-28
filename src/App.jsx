import {Header, Slide, Benefits, Content, Footer} from './components/index'

function App() {
  return (
    <>
      <header className='mt-[110px]'>
        <Header />
      </header>
      <Slide />
      <div
        className='sm:hidden w-full flex justify-center items-center mt-[5em]'
      >
        <h1
          className='text-4xl text-[#db2777] font-bold font-serif mr-5'
        >
          Lingerie
        </h1>
        <h1
          className='text-4xl text-[#f1f1f1] font-bold font-serif'
        >
          Shop
        </h1>
      </div>
      <Benefits />
      <Content />
      <Footer />
    </>
  )
}

export default App