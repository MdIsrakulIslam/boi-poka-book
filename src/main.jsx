import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{
    createBrowserRouter, 
    RouterProvider,

} from "react-router-dom";
import './index.css'
import Roots from './Components/Roots/Roots';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Roots></Roots>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path:'listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:() =>fetch('/booksData.json')
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>,
)
