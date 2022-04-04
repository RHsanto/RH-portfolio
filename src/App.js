
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
    
       <Navbar/>
       <Switch>
         <Route exact path ='/'>
          <Home/>
         </Route>
         <Route path ='/home'>
          <Home/>
         </Route>
         <Route path ='/about'>
          <About/>
         </Route>
         <Route path ='/projects'>
          <Projects/>
         </Route>
         <Route path ='/blog'>
          <Blog/>
         </Route>
         <Route path ='/contact'>
          <Contact/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
