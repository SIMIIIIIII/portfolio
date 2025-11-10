import Project from '../components/Project';
import Button from '../components/Button'
import Info from '../files/Infos'
import { useState } from 'react';

const Projects = () => {
  const info = Info();
  const [index, setIndex] = useState(0);
  
  return (
    <div className="content">
      <div className='citation'>
        <p>Talk is cheap. Show me the code</p>
        ~ Limus Torvalds ~
      </div>
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