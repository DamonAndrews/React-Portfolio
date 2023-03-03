import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    header: {
        backgroundColor: '#294257',
    },
    navbarCollapse: {
        marginTop: 10,
    },
    h1: {
        marginLeft: 75,
        fontSize: 65,
        paddingBottom: 15,
    },
    navbarNav: {
        marginRight: 65,
    },
    a: {
        fontSize: 35,
        paddingBottom: 15,
        marginRight: 35,
    }
}
function Header () {
    return (
        <header className='header' style={styles.header}>
            <nav className="navbar navbar-expand-lg text-white">
            <div className="container-fluid">
              <div className = " navbar-collapse" style={styles.navbarCollapse} id="navbarText">

                 <h1 className="navbar-nav me-auto" style={styles.h1}> <Link className="nav-link active text-white" aria-current="page" to='/AboutMe'>Damon Andrews</Link></h1>
        
                <div id="navbarNavDropdown" style={styles.navbarNav}>
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link className="nav-link active text-white" aria-current="page" to="/AboutMe" style={styles.a}>About Me</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-white" aria-current="page" to="/Portfolio" style={styles.a}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-white" aria-current="page" to="/Contact" style={styles.a}>Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-white" aria-current="page" to="/Resume" style={styles.a}>Resume</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;


