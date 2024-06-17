import styles from './ProjectsStyles.module.css'
import confidential from '../../assets/confidential.png'
import ProjectCard from '../../components/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={confidential} projectTitle={'Product Layout Management'} projectDesc={"Web application"}/>
        <ProjectCard src={confidential}  projectTitle={'Package Management'} projectDesc={"Web application (Phase 1 & 3)"}/>
        <ProjectCard src={confidential} projectTitle={'Progress Monitoring'} projectDesc={"Web application"}/>
      </div>
    </section>
  )
}

export default Projects