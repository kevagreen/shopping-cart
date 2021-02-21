
import './App.css';
import ItemInCart from './components/ItemInCart';
import Navbar from './components/Navbar'
import ShoppingCart from './components/ShoppingCart'

//temp location for items for shopping cart
const items = [
  {id: 1, name: 'organic corn', price: 3.25, qty: 2},
  {id: 2, name: 'organic rice', price: 4.00, qty: 1},
  {id: 3,name: 'organic potato', price: 2.50, qty: 6}, 
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShoppingCart initialCartItems={items}/>
    </div>
  );
}

export default App;
