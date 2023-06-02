import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './components/ItemDetail';
import './App.css';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/item' element={<ItemPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
