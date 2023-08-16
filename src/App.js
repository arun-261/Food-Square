import './App.css';
import Header from './Component/Header';
import RestaurantLIst from './Component/RestaurantLIst'
import RestDetail from './Component/RestDetail'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        
      </header>

      <Routes>
      {/* path fr restaurantList */}
      
      <Route path='/' element={<RestaurantLIst/>}/>

      {/* path for RestDetail */}

      <Route path='/restaurant/:id' element={<RestDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;
