import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfileMainBody from './components/profile/ProfileMainBody';
import DefaultCart from './components/cart/DefaultCart';
import Search from './components/search/Search';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={MainBody} />
        <Route exact path='/search' component={Search}/>
        <Route exact path='/cart' component={DefaultCart}/>
        <Route exact path='/profile' component={ProfileMainBody} />
      </Switch>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
