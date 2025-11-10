import profileImage from '../images/simeon.JPG'
import { Link } from "react-router-dom"


const Header = () => {

  return (
    <>
      <div className='logo-div'>
        <table>
          <tr>
            <th>
              <h1> Simeon Lama</h1>
            </th>
            <th>
              <img src={profileImage} alt="Ma photo de profil" className="logo" />
            </th>
            <th>
              <h2>Étudiant en sciences informatiques</h2>
            </th>
          </tr>
        </table>
      </div>
      <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About me</Link>
      </div>
    </>
  )
}

export default Header
