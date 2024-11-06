import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage_xx from './pages/HomePage_xx'
import BlogStaticPage_xx from './pages/BlogStaticPage_xx'
import BlogNodePage_xx from './pages/BlogNodePage_xx'
import BlogSupaPage_xx from './pages/BlogSupaPage_xx'
import BlogSupaPage2_xx from './pages/BlogSupaPage2_xx'

import MidP1Page_61 from './pages/mid_61/P1Page_61'
import MidP2Page_61 from './pages/mid_61/P2Page_61'
import MidP3Page_xx from './pages/mid_61/P3Page_xx'

const App_61 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_xx />} />
        <Route path='/static_xx' element={<BlogStaticPage_xx />} />
        <Route path='/node_xx' element={<BlogNodePage_xx />} />
        <Route path='/supa_xx' element={<BlogSupaPage_xx />} />
        <Route path='/supa2_xx' element={<BlogSupaPage2_xx />} />
      </Routes>
      <Routes>
        <Route path='/mid_xx/p1_61' element={<MidP1Page_61 />} />
        <Route path='/mid_xx/p2_61' element={<MidP2Page_61 />} />
        <Route path='/mid_xx/p3_xx' element={<MidP3Page_xx />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_61
