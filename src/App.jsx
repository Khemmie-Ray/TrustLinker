import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import { configWeb3Modal } from "./connection";

configWeb3Modal();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
        
    </Route>
  )
);

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[100vh] font-poppins w-[100%]">
    <RouterProvider router={router} />
  </div>
  )
}

export default App