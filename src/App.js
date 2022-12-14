import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component";
import Shop from './routes/shop/shop.component';
import CheckOut from "./routes/checkout/checkout.component.jsx";




const App = () => {

  return (
    //Routes needs to be a highest level and then Route which take the path and the element to be render.
    // '/' it is the home, index. it can render 
    //index is a kex word to tell the BrowserRouter that the element is main page.
    //no need to type / for every path since it will be concatenate due to the nesting Route
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}  />
        <Route path='shop/*' element={<Shop />}  /> {/** slash and  * (/* means that i does not matter what the uri is, it will render the shop component. however the shop component has his own routes) */}
        <Route path='auth' element={<Authentication />}  />
        <Route path='checkout' element={<CheckOut />}  />
      </Route>
    </Routes>
    
  );
}

export default App;
