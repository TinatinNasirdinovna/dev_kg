import React from "react";
import { ReactComponent as Logo } from "../../assets/images/header-logo.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { TfiGithub } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <Logo />
          <div className="footer--com">
            <div className="footer--com__text">
              <p>
                Мы — сообщество разработчиков Кыргызстана. Данный проект
                поддерживается и администрируется членами нашего сообщества.
              </p>
              <img src='https://www.net.kg/img.php?id=6620&refer=&page=https%3A//devkg.com/ru/jobs/frontend-developer-bca-software-14305&c=yes&java=now&razresh=1920x1080&cvet=24&jscript=1.3&rand=0.761890706826267' alt="img" />
            </div>
            <div className="footer--com__socials">
            <FaTelegramPlane />
            <ImFacebook2 />
            <TfiGithub />
            <FaYoutube /> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
