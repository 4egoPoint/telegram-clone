import React from "react";
import './main-stiles/app-stile.css'
import  SideBar  from './components/side-bar/side-bar'
import  Chat from './components/chat-content/main-content'

function App() {
   return (
      <div className="App">
         <SideBar />
         <Chat/>
      </div>
   );
}

export default App;