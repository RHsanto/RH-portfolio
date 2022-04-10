
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import AllProjects from './components/AllProjects/AllProjects';

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
         <Route path ='/all-projects'>
          <AllProjects/>
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
