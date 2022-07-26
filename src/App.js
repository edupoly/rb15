import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='betterview'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
