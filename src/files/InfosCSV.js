import img1 from '../images/deplacity/requete.png';
import img2 from '../images/malloc/project.png';
import img3 from '../images/portfolio/project.png';
import Papa from 'papaparse';
import Infos from './Infos'

const imageMap = {
  'img1': img1,
  'img2': img2,
  'img3': img3,
};

// Function to load projects from CSV
export const loadProjectsFromCSV = (callback) => {
  Papa.parse('/projects.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      try {
        const projects = results.data
          .filter(row => row.image && row.title) // Filter out empty rows
          .map(row => ({
            image: imageMap[row.image?.trim()],
            title: row.title?.trim() || '',
            description: row.description?.trim() || '',
            github: row.github?.trim() || '',
            website: row.website?.trim() || undefined,
            citation: row.citation?.trim() || undefined,
            auteur: row.auteur?.trim() || undefined
          }));
        
        if (projects.length > 0) {
          callback(projects);
        } else {
          //No valid projects found in CSV, using defaults
          callback(getDefaultProjects());
        }
      } catch (error) {
        callback(getDefaultProjects());
      }
    },
    error: (error) => {
      callback(getDefaultProjects());
    }
  });
};

// Default projects (fallback)
const getDefaultProjects = () => Infos();

const Info = () => getDefaultProjects();

export default Info;
