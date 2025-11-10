import img1 from '../images/deplacity/requete.png';
import img2 from '../images/malloc/project.png';
import img3 from '../images/portfolio/project.png';

const Info = () => {
    const project1 = {
        image: img1,
        title: "Deplacity",
        description: "A Flask web application for analyzing traffic and mobility data in Belgian cities.",
        github: "https://github.com/SIMIIIIIII/deplacity",
        website: "https://web-production-37f78.up.railway.app/"
    }

    const project2 = {
        image: img2,
        title: "My Malloc",
        description: "In this C project, I create my own malloc function and its free version",
        github: "https://github.com/SIMIIIIIII/my_malloc",
    }

    const project3 = {
        image: img3,
        title: "Portfolio",
        description: "Personal portfolio website built with React and deployed on GitHub Pages.",
        github: "https://github.com/SIMIIIIIII/portfolio",
        website: "www.simeonlama.dev"
    }

    const tab = [project1, project2, project3];
    return tab
}

export default Info