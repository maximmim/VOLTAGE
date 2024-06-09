import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './screans/Home';

function App() {
  return (

    <BrowserRouter>
      <div className='contaniner'>
        <Routes> 
          <Route path='/' element={<Home />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
