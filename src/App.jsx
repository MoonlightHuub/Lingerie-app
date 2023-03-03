import {Header, Slide, Benefits, Content, Footer, AboutUs} from './components/index'

function App() {
  return (
    <>
      <header className='mt-[110px]'>
        <Header />
      </header>
      <Slide />
      <AboutUs />
      <Benefits />
      <Content />
      <Footer />
    </>
  )
}

export default App