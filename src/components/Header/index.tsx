import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/header-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Logo />
          <div className="header--menu" onClick={() => setMenu(true)}>
            <TbMenu2 />
          </div>
          <nav className="header--nav">
            <NavLink to={"/"}>Вакансии</NavLink>
            <NavLink to={"/events"}>Мероприятия</NavLink>
            <NavLink to={"/video"}>Видео</NavLink>
            <NavLink to={"/organization"}>Организации</NavLink>
            <NavLink to={"/community"}>Сообщество</NavLink>
          </nav>
          <div className="header--btn">
            <span>
              <AiOutlineLogin />
            </span>
            <button>Войти</button>
          </div>
        </div>
      </div>
     {menu &&  <div className="menu">
        <div className="menu--logo">
          <Logo />
          <span onClick={() => setMenu(false)}>
            <IoCloseSharp />
          </span>
        </div>
        <nav className="menu--nav">
        <NavLink to={"/"}>Вакансии</NavLink>
            <NavLink to={"/events"}>Мероприятия</NavLink>
            <NavLink to={"/video"}>Видео</NavLink>
            <NavLink to={"/organization"}>Организации</NavLink>
            <NavLink to={"/community"}>Сообщество</NavLink>
        </nav>
      </div>}
      {menu && <div className="bg" onClick={() => setMenu(false)}></div>}
    </div>
  );
};

export default Header;
