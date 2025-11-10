import { FaGithub } from "react-icons/fa";

const Project = ({ info }) =>  {
    const website = info.website || info.github;
    return (
        <>
            <div className='container'>
                <h2>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        {info.title}
                    </a>
                </h2>
                <h2>
                    <a href={info.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub></FaGithub>
                    </a>
                </h2>
            </div>

            <div className="container">
                <p className="desc"> {info.description} </p>
            </div>

            <div className='container' >
                <a href={website} target="_blank" rel="noopener noreferrer">
                    <img src={info.image} alt="apercu du projet" className="project-img"/>
                </a>
            </div>
        </>
    )
}

export default Project;