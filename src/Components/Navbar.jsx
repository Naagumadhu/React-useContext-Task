import React from 'react'

function Navbar() {
  return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark"  >
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" style={{color:'grey', fontFamily:'cursive'}}>React useContext Task</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
 
        <form className="d-flex" style={{width:'570px', height:'35px'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className='bg-dark ' style={{height:'37px'}} type="submit"><i className="fa-duotone fa-solid fa-magnifying-glass"></i></button>
      </form>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{color:'grey'}} aria-current="page" href="#"> <b style={{fontFamily:'cursive'}}>HOME</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:'grey'}}> <b style={{fontFamily:'cursive'}}>MOBILES</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:'grey'}}> <b style={{fontFamily:'cursive'}}>LAPTOPS</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:'grey'}}> <b style={{fontFamily:'cursive'}}>TABS</b> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:'grey'}}> <b style={{fontFamily:'cursive'}}>FEATURED</b> </a>
        </li>
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle"  style={{color:'grey', fontFamily:'cursive'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OFFER ZONE
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" style={{fontFamily:'cursive'}} href="#">75% "Offer"</a></li>
            <li><a className="dropdown-item" href="#"  style={{fontFamily:'cursive'}} >55% "Offer"</a></li>
            <li><a className="dropdown-item" href="#"  style={{fontFamily:'cursive'}} >35% "Offer"</a></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}

export default Navbar
