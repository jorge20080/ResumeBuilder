import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children:[
        {
          index:true,
          element: <Home/>
        },
        {
          path:'login',
          element: <Login/>
        },
        {
          path:'register',
          element: <Register/>
        },
        {
          path:'buildresume',
          element: <Register/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
