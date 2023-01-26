import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import './App.css';

export default function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } exact />
          <Route path='/posts/:userID' element={ <Posts /> } />
        </Routes>
      </Router>
    </main>
  );
}