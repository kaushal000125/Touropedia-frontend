import { useEffect } from 'react';
import './App.css';

import {ToastContainer} from "react-toastify";                                                                               //“Toast” refers to a UI feature where an event causes a small text box to appear at the bottom of the screen. The behavior seems like a piece of bread emerging from a toaster.
import {BrowserRouter,Routes,Route} from "react-router-dom";                                                //BrowserRouter is a router implementation that uses the HTML5 history API (pushstate, replacestate, and popstate events) to keep your UI in sync with the URL. It is the parent component used to store all other components.
import "react-toastify/dist/ReactToastify.css"; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from "./components/Header";
import Footer from './components/Footer';
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddEditTour from './pages/AddEditTour';
import SingleTour from './pages/SingleTour';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';
import TagTours from './pages/TagTours';
function App() {


const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem("profile"));
useEffect(() => {   
  dispatch(setUser(user)); 
}, []);

  return (
   <BrowserRouter>
     <div className="App">
     <Header />
       <ToastContainer />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/tours/search" element={<Home />} />
         <Route path="/tours/tag/:tag" element={<TagTours />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route 
            path="/addTour" 
            element={
              <PrivateRoute> 
                <AddEditTour />
              </PrivateRoute>
            }
          />
          <Route
            path="/editTour/:id"
            element={
              <PrivateRoute>
                <AddEditTour />
              </PrivateRoute>
            }
          />
         <Route path="/tour/:id" element={<SingleTour />} />
         <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        <Route path="*" element={<NotFound />}/>
       </Routes>
       <Footer />
     </div>
   </BrowserRouter>
  );
}

export default App;
