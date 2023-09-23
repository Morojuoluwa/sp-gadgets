
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Shopp from "./pages/Shop"
import Cart from "./pages/Cart"

import ShopContextProvider from "./pages/shop-context"

export default function App(){
  return <div className=" w-full h-auto">
    <ShopContextProvider>
    <Router>
      <Navbar/>
     
      <Routes>
          <Route path="/" element={<Shopp/>}/>
          <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
}
