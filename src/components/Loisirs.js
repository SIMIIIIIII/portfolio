import { FaPlus, FaMinus, FaBookOpen, FaMusic, FaFootballBall, FaCookie } from 'react-icons/fa';

const Loisirs = ({ onShow, onToggle }) => {
  return (
    <div className='container'>
        <h2>
            Mes centres d'intérêt &ensp;
            {onShow ? <FaMinus onClick={onToggle} /> : <FaPlus onClick={onToggle} />}
        </h2>
    
        {onShow && (
            <>
              <p><FaBookOpen/> Littérature</p>
              <p><FaMusic/> Musique</p>
              <p><FaFootballBall/> Football</p>
              <p><FaCookie/> Cuisine</p>
            </>
        )}
    </div>
  )
}

export default Loisirs
