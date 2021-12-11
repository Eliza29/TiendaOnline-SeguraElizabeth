import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenida a mi tienda online"/>
      <ItemDetailContainer/>
    </>
    
  )
}

export default App

