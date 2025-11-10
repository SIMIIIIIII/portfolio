import { FaPlus, FaMinus, FaLanguage } from 'react-icons/fa';

const Langues = ({ onShow, onToggle }) => {
  return (
    <div className='container'>
      <h2>
        Langues &ensp;
        {onShow ? <FaMinus onClick={onToggle} /> : <FaPlus onClick={onToggle} />}
      </h2>

      {onShow && (
        <>
            <h3><FaLanguage/> Français</h3>
            <h3><FaLanguage/> Anglais</h3>
            <h3><FaLanguage/> Néerlandais</h3>
            <h3><FaLanguage/> Lingala</h3>
        </>
      )}
    </div>
  )
}

export default Langues
