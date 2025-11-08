import { Link } from "react-router-dom"
import Cv from '../files/cv.pdf'

const Home = () => {
  return (
    <div className="content">
        <div className='citation'>
            <p>Créer, c’est résister. Résister, c’est créer.</p>
             ~ Stéphane Hessel ~
        </div>
        
        <div className="container">
            <a href={Cv} target="_blank" rel="noopener noreferrer">🧾 Voir mon CV</a>
            <p>💼 <Link to="/projects">Voir mes projets</Link></p>
            <p>📧 <a href="mailto:simeonlama00@gmail.com" target="_blank" rel="noopener noreferrer">Me contacter</a></p>
            <p>🔗 <a href="https://github.com/SIMIIIIIII/" target="_blank" rel="noopener noreferrer">GitHub</a> / 
            <a href="https://www.linkedin.com/in/simeon-lama-7709b5282" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
    </div>

  )
}

export default Home
