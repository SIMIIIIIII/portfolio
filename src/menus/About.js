import { useState } from 'react';
import Cv from '../files/cv.pdf'
import Profil from '../components/Profil';
import Formations from '../components/Formations';
import Competences from '../components/Competences';
import Experience from '../components/Experience';
import Langues from '../components/Langues';
import Loisirs from '../components/Loisirs';

const About = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showFormations, setShowFormations] = useState(false);
  const [showCompetences, setShowCompetences] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showLangues, setShowLangues] = useState(false);
  const [showLoisirs, setShowLoisirs] = useState(false);

  return (
    <div className='content'>
      <div className='citation'>
        <p>
          I have no special talent. I am only passionately curious
        </p>
        ~ Albert Einstein ~
      </div>
      <div className='citation'>
        <a href={Cv} target="_blank" rel="noopener noreferrer">🧾 Voir mon CV</a>
      </div>

      {/* La section Mon profil */}
      <Profil onShow={showProfile} onToggle={() => setShowProfile(!showProfile)} />
      
      {/* La section Mes formation */}
      <Formations onShow={showFormations} onToggle={() => setShowFormations(!showFormations)} />
      
      {/* La section Mes competence */}
      <Competences onShow={showCompetences} onToggle={() => setShowCompetences(!showCompetences)} />
      
      {/* La section Mon experiences */}
      <Experience onShow={showExperience} onToggle={() => setShowExperience(!showExperience)} />
    
      {/* La section Mon experiences */}
      <Langues onShow={showLangues} onToggle={() => setShowLangues(!showLangues)} />
    
      {/* La section Mon experiences */}
      <Loisirs onShow={showLoisirs} onToggle={() => setShowLoisirs(!showLoisirs)} />
    
    </div>
  );
};

export default About;