import React from 'react'
// rfc : shortcut for react function based component
import PropTypes from 'prop-types'
// impt : shortcut for importing prop-type
export default function Navbar(props){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.nav1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.nav2}</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">{props.nav3}</button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}
// Navbar.protoType =pts // first import pop-type " line 2"
Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    nav1:  PropTypes.string.isRequired,
                    nav2:    PropTypes.string,
                    nav3:      PropTypes.string,
              }

// to set defaul tvalue
 Navbar.defaultProps ={
 nav1: "Home",
 nav2: "About",
   nav3 : "search"}

