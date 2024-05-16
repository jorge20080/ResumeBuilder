import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <p>Common</p>,
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
