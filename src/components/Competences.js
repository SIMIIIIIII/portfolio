import { FaPlus, FaMinus, FaJava, FaReact, FaNodeJs, FaLinux,
    FaPython, FaHtml5, FaCss3, FaFlask, FaDev, FaWindows, FaNetworkWired,
    FaDatabase, FaFileExcel, FaEnvira, FaCode, FaAndroid, FaTools, FaGit,
    FaMarkdown, FaLaptop, FaEdit
} from 'react-icons/fa';

const Competences = ({ onShow, onToggle }) => {
  return (
    <div className='container'>
        <h2>
            Mes Compétences &ensp;
            {onShow ? <FaMinus onClick={onToggle} /> : <FaPlus onClick={onToggle} />}
        </h2>
        
        {onShow && (
            <>
                <h3><FaDev/> Développement Web</h3>
                <p>
                    &emsp; <FaReact/>React, &ensp;<FaNodeJs/> Node.js, &ensp;<FaFlask/> Flask,
                    &ensp;<FaHtml5/> HTML5, &ensp;<FaCss3/> CSS3, &ensp;JavaScript, &ensp;SQL,
                    &ensp;MongoDB, 
                </p>

                <br></br>
                <h3> <FaLaptop/>  Langages de programmation</h3>
                <p>
                    &emsp; <FaJava/>Java, &ensp;<FaPython/> Python, &ensp;Langage C
                </p>

                <br></br>
                <h3> <FaNetworkWired/> Systèmes d’exploitation</h3>
                <p> &emsp;<FaLinux/> Linux, &ensp;<FaWindows/> Windows </p>

                <br></br>
                <h3><FaDatabase/> Analyse de doonnées</h3>
                <p> &emsp;<FaFileExcel/> Excel, &ensp;R, &ensp;JMP</p>

                <br></br>
                <h3><FaEnvira/>Environnements de développement</h3>
                <p> &emsp;<FaCode/> VS Code, &ensp;<FaJava/> IntelliJ, &ensp;<FaAndroid/> Android Studio</p>

                <br></br>
                <h3><FaTools/> Divers outils</h3>
                <p>
                    &emsp;<FaGit/> Git, &ensp;<FaMarkdown/> Markdown,  &ensp;<FaEdit/> Pack Office, &ensp;LaTex
                </p>
            </>
        )}
    </div>
  )
}

export default Competences
