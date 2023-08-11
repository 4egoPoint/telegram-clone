import React from "react";
import avatar from '../../img/avatar.png'
import './list-of-users.css'

function UserPreload() {
   return (
      <li>
         <img src={avatar} alt="" />
         <div>
            <div className="user-name">name</div>
            <div className="last-massage">hello</div>
         </div>
      </li>
   );
}

export default UserPreload;