import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import {mdOutlineRestaurantMenu} from 'react-icons/md';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { images } from "../../constants";
import "./Navber.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navber = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const { user, logOut } = useContext(AuthContext); 
    const handleLogOut =() =>{
      logOut()
        .then()
        .catch(err => console.log(err))
    }
    // setUserName(user?.displayName);
  return (
    <nav className="app_navber w-full">
      <div className="app__navber-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app__navber-links">
        <li className="p__opensans">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-400" : "text-white"
            }
          >
            Home
          </NavLink>
          {/* <a href="#home">Home</a> */}
        </li>
        <li className="p__opensans">
          <a>About</a>
        </li>
        <li className="p__opensans">
          <a >Menu</a>
        </li>
        <li className="p__opensans">
          <NavLink
            to="/question"
            className={({ isActive }) =>
              isActive ? "text-gray-400" : "text-white"
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="p__opensans">
          <a>Contract</a>
        </li>
      </ul>
      {user && (
        <img
          title=""
          className="w-10 rounded-full"
          src="https://i.ibb.co/bH3d3QL/chef3.jpg"
        />
      )}
      <div />
      <div className="app__navber-login">
        {user ? (
          <>
            <a onClick={handleLogOut} className="p__opensans">
              Log Out
            </a>{" "}
            <a className="p__opensans">{user?.name}</a>
          </>
        ) : (
          <>
            <NavLink className="p__opensans" to="/register">
              {" "}
              Log In / Register
            </NavLink>
          </>
        )}

        {/* <a href="#login" className="p__opensans"></a> */}
      </div>
      <div className="app__navber-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        ></GiHamburgerMenu>

        {toggleMenu && (
          <div className="app__navber-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navber-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#award">Award</a>
              </li>
              <li className="p__opensans">
                <a href="#contract">Contract</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
