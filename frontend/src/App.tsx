import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'
import { AuthContextProvider } from './context/auth-context'
import CreateResume from './pages/CreateResume/CreateResume'
import Home from './pages/Home/Home'
import Login, { action as loginAction } from './pages/Login/Login'
import Register, { action } from './pages/Register/Register'

import { checkAuthLoader } from './utils/auth'

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
          element: <Login/>,
          action: loginAction
        },
        {
          path:'signup',
          element: <Register/>,
          action: action
        },
        {
          path:'buildresume',
          element: <CreateResume/>,
          loader: checkAuthLoader
        }
      ]
    }
  ])
  return <AuthContextProvider><RouterProvider router={router}/></AuthContextProvider>
}

export default App
