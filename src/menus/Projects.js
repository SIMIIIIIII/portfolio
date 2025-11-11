import Project from '../components/Project';
import Button from '../components/Button'
import { loadProjectsFromCSV } from '../files/InfosCSV'
import { useState, useEffect } from 'react';

const Projects = () => {
  const [info, setInfo] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    loadProjectsFromCSV((projects) => {
      setInfo(projects);
    });
  }, []);
  
  if (info.length === 0) {
    return <div className="container">Loading projects...</div>;
  }

  return (
    <div className="content">
      {info[index].citation && 
        <div className='citation'>
          <p>{info[index].citation}</p>
          ~ {info[index].auteur} ~
        </div>
      }
      <Project info = {info[index]}/>
      <div className="nav-container">
        {index > 0 && <Button color="black" text="Prev" onClick={() => setIndex(index-1)}/>} 
        <span className="nav-index">{index + 1} / {info.length}</span>
        {index < info.length-1 && <Button color="black" text="Next" onClick={() => setIndex(index+1)}/>}
      </div>
    </div>
  )
}

export default Projects