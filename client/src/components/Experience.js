import { FaPlus, FaMinus, FaLocationArrow, FaCalendar, FaTasks} from 'react-icons/fa';

const Experience = ({ onShow, onToggle }) => {
  return (
    <div className='container'>
        <h2>
        Mon expérience &ensp;
        {onShow ? <FaMinus onClick={onToggle} /> : <FaPlus onClick={onToggle} />}
        </h2>
    
        {onShow && (
            <>
              <h3>Viennois Cat I</h3>
              <p><FaLocationArrow/> La Fleur du Pain S.A | <FaCalendar/> 2023 - En cours</p>

              <br></br>

              <ul>
                <li> &ensp;<FaTasks/> Préparation et conditionnement de viennoiseries (croissants, pains au chocolat, etc.) </li>
                <li> &ensp;<FaTasks/> Organisation du stockage des produits en chambre froide </li>
                <li> &ensp;<FaTasks/> Nettoyage et maintenance de l’atelier </li>
                <li> &ensp;<FaTasks/> Travail à la chaîne et en équipe </li>
                <li> &ensp;<FaTasks/> Préparation de commandes </li>
              </ul>

              <br></br>
              <br></br>
              <h3>Stagiaire administratif</h3>
              <p><FaLocationArrow/> VTI Aalst | <FaCalendar/> 2023</p>

              <br></br>

              <ul>
                <li> &ensp;<FaTasks/> Gestion des inscriptions des élèves </li>
                <li> &ensp;<FaTasks/> Organisation et suivi des dossiers </li>
                <li> &ensp;<FaTasks/> Accueil et orientation des visiteurs </li>
                <li> &ensp;<FaTasks/> Travail en équipe pour l’optimisation des processus administratifs </li>
                <li> &ensp;<FaTasks/> Gestion et organisation des dossiers administratifs </li>
                <li> &ensp;<FaTasks/> Réponse aux appels et accueil des visiteurs </li>
                <li> &ensp;<FaTasks/> Collaboration avec l'équipe administrative pour la gestion des requêtes </li>
                <li> &ensp;<FaTasks/> Traitement et classement du courrier </li>
              </ul>
            </>
        )}
    </div>
  )
}

export default Experience
