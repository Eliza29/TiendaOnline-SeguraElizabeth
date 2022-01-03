import Navbar from './components/NavBar'
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import CartContext from './context/CartContext'

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <Navbar/>
        <Main/>
      </CartContext>
    </BrowserRouter>
      
  )
}

export default App

