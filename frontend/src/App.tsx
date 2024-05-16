import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'
import Home from './pages/Home/Home'

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
          element: <p>Login Page</p>
        },
        {
          path:'register',
          element: <p>Register Page</p>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
