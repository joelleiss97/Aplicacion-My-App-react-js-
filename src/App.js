
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';


//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer titulo='Productos Destacados'></ItemListContainer>
      <Body/>
      
    </div>
  );
}

export default App;
