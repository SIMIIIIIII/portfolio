import { Link } from "react-router-dom"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  
  return (
    <footer>
        <p>Copyright &copy;{year}</p>
        <Link to="/about">About me</Link>
    </footer>
  )
}

export default Footer
