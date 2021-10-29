import { Link } from 'react-router-dom'
import './NavigationBar.css'
function NavigationBar() {
    return (
        <nav className="bar navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">dopamine-generator</a>
          
          <form className="form-inline mr-auto mt-2 mt-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search for friends" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ">
          <li className="nav-item active">
        <Link to='/' className="nav-link" href="#">Hello! <span className="sr-only">(current)</span></Link>
      </li>
          </ul>
          
        </div>
      </nav>
    )
}

export default NavigationBar
