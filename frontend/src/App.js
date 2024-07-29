import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Model from './screens/Models/Model';
import Purchase from './screens/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            <Route path="/porsche_remake" element={<Home/>} />
            <Route path='/Models' element={<Model/>}/>
            <Route path="/Purchase" element={<Purchase/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
