import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Main/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <section className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </section>
  );
}

export default App;
