import Navbar from './components/NavBar'
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Main/>
    </BrowserRouter>
      
  )
}

export default App

