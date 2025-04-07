import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Error from './ui/Error';
import Cart from './features/cart/Cart';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import { action as updateOrderAction } from './features/order/UpdataOrder';

// new way for using Router, if you want to use new APIs as data loaders/data actions/ data fetchers
// an array of objects, each object a path with a corresponding element

const router = createBrowserRouter([
  {
    // AppLayout will be the parent of all other components; which will be the children of this Route
    element: <AppLayout />,
    errorElement: <Error />,
    // object without "path" is called layout Route
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'Menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: '*',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
