
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AboutUs from './Pages/About'
import CategoryDetail from './Pages/CategoryDetail'
import ServiceDetail from './Pages/ServiceDetail'
import Shop from './Pages/Shop'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>

          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/category-detail' element={<CategoryDetail />} />
          <Route path='/service-detail' element={<ServiceDetail />} />
          <Route path='/shop' element={<Shop />} />


        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App
