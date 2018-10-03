import React from "react";
import "./Menu.css";

class Menu extends React.Component{
  render(){
    return(
      <div className = "nav">
        <nav>
          <ul>
            <li><a href="/html/">HOME</a></li>
            <li><a href="/css/">O NAS</a></li>
            <li><a href="/js/">REALIZACJE</a></li>
            <li><a href="/jquery/">KONTAKT</a></li>
          </ul>
        </nav>
      </div>
    )
}
}

export default Menu;
