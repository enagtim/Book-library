import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from '../widgets/Navigation/Navigation';
import SearchBook from '../pages/SeacrhBook/SearchBook';
import Favorites from '../pages/Favorites/Favorites';
import BookDetails from '../pages/BookDetails/BookDetails';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation/>,
      children: [
          {
            path: '/',
            element: <SearchBook/>
          },
          {
             path: '/favorites',
             element: <Favorites/>
          }, 
          {
              path: '/book/:id',
              element: <BookDetails/>
          }
      ]
    }, 
    {
      path: '*', 
      element: <Error/>
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
