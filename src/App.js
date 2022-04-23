
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import AllProjects from './components/AllProjects/AllProjects';
import MbProjects from './components/Projects/MbProjects';
import { useEffect, useState } from 'react';
import { CircleLoader } from "react-awesome-loaders";
import './App.css'
function App() {
   const [loading , setLoading]= useState(false) ;

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div>
    {
        loading ?
       <div className="container">
         <div className="row">
           <div className="col-3 mx-auto">
           <div >
            
      <CircleLoader
       className='loading' 
        meshColor={"#21E6C1"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
       <h1 className='text-light'>Loading . . .</h1>
      </div>
           </div>
         </div>
       </div>
        : 
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
         <Route path ='/mb-projects'>
          <MbProjects/>
         </Route>
         <Route path ='/blog'>
          <Blog/>
         </Route>
         <Route path ='/contact'>
          <Contact/>
         </Route>
       </Switch>
     </Router>
}
    </div>
  );
}

export default App;
