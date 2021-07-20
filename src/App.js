
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddBill from './components/AddBill';
import EditBill from './components/EditBill';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App=()=> {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={()=><Home />} />
        <Route exact path="/add">
        <AddBill />
        </Route>
        <Route exact path="/edit/:id">
          <EditBill />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
