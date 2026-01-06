
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AboutUs from './Pages/About'
import CategoryDetail from './Pages/CategoryDetail'
import ServiceDetail from './Pages/ServiceDetail'


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>

          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/category-detail' element={<CategoryDetail/>}/>
          <Route path='/service-detail' element={<ServiceDetail/>}/>


        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
