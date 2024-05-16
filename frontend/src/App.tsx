import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children:[
        {
          index:true,
          element: <p>Home Page</p>
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
