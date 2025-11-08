import { FaPlus, FaSchool, FaCalendar, FaMinus} from 'react-icons/fa';

const Formations = ({ onShow, onToggle }) => {
  return (
    <div className='container'>
        <h2>
            Mes Formations &ensp;
            {onShow ? <FaMinus onClick={onToggle} /> : <FaPlus onClick={onToggle} />}
        </h2>
    
        {onShow && (
            <>
                <h3> Bachelier en Sciences Informatiques </h3>
                <p><FaSchool/> UCLouvain | <FaCalendar/> 2023 - En cours</p>
                <br></br>
                <h3> Economie d'entreprise </h3>
                <p><FaSchool/> DVM HTB Aalst | <FaCalendar/> 2020 - 2023</p>
            </>
        )}
    </div>
  )
}

export default Formations
