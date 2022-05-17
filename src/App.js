import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useState } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [winSize, setWinSize] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);
    });
  }, []);
  console.log(winSize);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : winSize < 450 ? (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/">
                <Sidebar />
              </Route>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1 className="h1x">HelloChatties</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
