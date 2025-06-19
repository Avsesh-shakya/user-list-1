import React from 'react'
import './Homepage.css'
import logo from './assets/logo.png'
import project from './assets/project.png';
import imagefile from './assets/image-file.png'
import image from './assets/image.png'
import plus from './assets/plus.png'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div className='left-side'>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>QMS</h2>
          <Link to="#" className='menu-icon'>
            <div className="bar1"></div>
            <div className="bar1"></div>
            <div className="bar1"></div>

          </Link>
        </div>
      </div >
      <div className="list-item">
        <ul>
          <li><Link to="/teacher">Teacher</Link></li>
        <li> <Link to="/department">Department</Link></li>
      <li><Link to="/library">Library</Link></li>
     <li><Link to="/add teacher">Add Teacher</Link></li>
        </ul>
      </div>





    </div>
  )
}

export default Homepage
