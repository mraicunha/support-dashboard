import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

import Login from "./pages/Login";
import Home from "./pages/Home";


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  {
    path: "/login",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <Login />
  }
];

function App() {
  const [sidebar, setSidebar] = useState(1)

  function onClickMenu() {
    const sidebarElement = document.getElementById('sidebar')

    if (sidebar) {
      sidebarElement.style.display = 'none'
      setSidebar(0)
    } else {
      sidebarElement.style.display = 'block'
      setSidebar(1)
    }

  }
  return (
    <BrowserRouter>
      <header className="header">
        <div>
          <h1>Home</h1>
        </div>
      </header>
      <div className="sandwich-menu" onClick={onClickMenu}>
        <div className="menu-sidebar"></div>
        <div className="menu-sidebar"></div>
        <div className="menu-sidebar"></div>
      </div>
      <div id="sidebar" className="sidebar">
        <div className="sidebar-title">
          <h1>MRai Dashboard</h1>
        </div>
        <div className="sidebar-menu">
          <ul className="sidebar-list">
            <Link className="link" to="/">
              <li>
                Home
            </li>
            </Link>
            <Link className="link" to="/login">
              <li>
                Login
            </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="container">
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter >
  );
}
export default App;
