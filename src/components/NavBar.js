import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  background-color: var(--blue);
  top: 0;
  left: 0;
  width: 100%;

  .logo {
    font-size: 1.75rem;
    padding-left: 3rem;
    align-self: center;
    text-decoration: none;
    font-family: "RobotoMono Bold";
  }
  .navecontain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ul {
    max-width: 100%;
    margin: 0;
    padding-right: 2rem;
    text-align: center;
    li {
      margin: 0;
      padding: 0;
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
      }
    }
    li a {
      text-decoration: none;
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: var(--purple);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: -0.2rem;
    margin-bottom: 1.5rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    font-size: 2.5rem;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      background-color: var(--yellow);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      /* .logo {
        font-size: 1rem;
      } */
    }
  }
`;

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <div className="navecontain">
        <a
          className="logo"
          target="_blank"
          rel="noreferrer"
          href="http://pellensemble.com"
        >
          Pell Ensemble
        </a>
        <ul className={!showNav ? "navItems hide-item" : "navItems"}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/codeBlock"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              CodeBlock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/LearnLoop"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              LearnLoop
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </NavStyles>
  );
}
