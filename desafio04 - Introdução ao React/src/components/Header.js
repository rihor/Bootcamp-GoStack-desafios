import React from "react";

import logo from "../assets/logo.png";
import userImage from "../assets/user.png";

function Header() {
  return (
    <div className="header">
      <div className="content">
        <img src={logo} />
        <nav>
          <ul>
            <li>
              Meu perfil
            </li>
            <li>
              <img src={userImage} width="30" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
