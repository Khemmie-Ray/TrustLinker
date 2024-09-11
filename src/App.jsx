import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import { configWeb3Modal } from "./connection";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import CreateAgreement from "./pages/CreateAgreement";

configWeb3Modal();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<Dashboard/>} />
      <Route path="create-event" element={<CreateAgreement/>}/>
      </Route>      
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