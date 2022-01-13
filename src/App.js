import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/home'
import Landing from './views/landing/landing';
import Data from './views/data';
import Profile from './views/Profile/profile';

const App = () => {
  return  <Router>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/data" element={<Data/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </Router>
}

export default App;