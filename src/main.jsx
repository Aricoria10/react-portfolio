import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Blog',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Contact',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

