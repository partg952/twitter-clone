import './App.css';
import RightSidebar from './components/right-sidebar';
import Center from './components/Center';
import Login from './components/Login';
import Left_sidebar from './components/Left_sidebar';
import {BrowserRouter as Router,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact>
          <Login/>
        </Route>
        <Route path='/home' exact>
      <RightSidebar/> 
      <Center/>
      <Left_sidebar/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
