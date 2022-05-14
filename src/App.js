// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import ProfileContainer from "./Components/Profile/ProfileContainer";
// import Friends from "./Components/SideBar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <HeaderContainer />
        <Navigation />

        <div className="site-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer store = {props.store}/>} />
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>} />
            <Route path="/users" element={<UsersContainer store={props.store}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
