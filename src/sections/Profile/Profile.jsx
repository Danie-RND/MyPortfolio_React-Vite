import styles from './ProfileStyles.module.css'
import danieImg from '../../assets/danie-img.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Danie Mae Abito Peregrina Resume.pdf'
import { useTheme } from '../../common/ThemeContext'
function Profile() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={danieImg} alt='Danie Mae Peregrina Profile Image' className={styles.hero}></img>
            <img src={themeIcon} className={styles.colorMode} alt='Color Mode icon' onClick={toggleTheme}></img>
        </div>
        <div className={styles.info}>
            <h1>Danie Mae <br/> Peregrina</h1>
            <h2>Full-stack Developer</h2>
            <span>
                <a href='' target='_blank'>
                    <img src={githubIcon} alt='GitHub icon'></img>
                </a>
                <a href='' target='_blank'>
                    <img src={linkedinIcon} alt='LinkedIn icon'></img>
                </a>
            </span>
            <p className={styles.description}>With a passion for developing web application for commercial businesses.</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Profile;