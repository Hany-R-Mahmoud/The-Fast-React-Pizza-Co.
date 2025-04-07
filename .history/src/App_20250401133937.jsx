import { createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home"
import Menu from "./features/menu/Menu"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path:"Menu", element: <Menu />}
  {path:"", element:}
  {path:"", element:}
  {path:"", element:}
])

function App() { }

export default App;
