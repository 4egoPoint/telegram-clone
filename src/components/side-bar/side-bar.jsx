import React from "react";
import menuImg from "../img/menu.png"
import UserPreload from './user-bar-component/user-side-info'
import './side-b.css'

function SideBar() {
   return (
      <div className="SideBar">
         <header>
            <div className="option-list"><img src={menuImg} alt="search" /></div>
            <div className="search-area"><textarea wrap="no" placeholder='Search' cols="30" rows="1"></textarea></div>
         </header>
         <section>
            <ul>
               <UserPreload/>
               <UserPreload/>
               <UserPreload/>
               <UserPreload/>
               <UserPreload/>
               <UserPreload/>
               <UserPreload/>
               <UserPreload/>

            </ul>
         </section>
      </div>
   );
}

export default SideBar;