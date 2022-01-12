import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/home'
import Landing from './views/landing/landing';
import Data from './views/data';

const App = () => {
  return  <Router>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/data" element={<Data/>}/>
            </Routes>
          </Router>
}

export default App;
