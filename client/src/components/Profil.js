import { FaPlus, FaMinus } from 'react-icons/fa';

const Profil = ({ onShow, onToggle }) => {
  return (
    <div className='container'>
      <h2>
        Mon profil &ensp;
        {onShow ? <FaMinus onClick={onToggle} /> : <FaPlus onClick={onToggle} />}
      </h2>

      {onShow && (
        <p>
          Étudiant en sciences informatiques à l'UCLouvain, passionné par la
          programmation et l'analyse de données. Doté d’un esprit analytique et
          d’une bonne capacité à résoudre des problèmes complexes, je recherche
          une opportunité professionnelle dans le domaine du développement
          logiciel.
        </p>
      )}
    </div>
  );
};

export default Profil;