import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <div className='navbar'>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />
    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    <ul>
      <li>Home</li>
      <li>Movies</li>
      <li>Series</li>
      <li>English</li>
      <li>Malayalam</li>
      <li>Tamil</li>
      <li>Hindi</li>
      <li className='navbar_search'>
        <input type='text'></input>
        <button>Search</button>
      </li>
    </ul>
    </div>
  )
}

export default NavBar

// https://github.com/Packapeer/React_tutorial_netflix_app/blob/main/assets.md