import styles from './SkillsStyles.module.css'
import checkmarkLight from '../../assets/checkmark-light.svg'
import checkmarkDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../components/SkillList'
import { useTheme } from '../../components/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkmarkIcon = theme == 'light' ? checkmarkLight :  checkmarkDark
  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill='HTML'/>
            <SkillList src={checkmarkIcon} skill='CSS'/>
            <SkillList src={checkmarkIcon} skill='Javascript'/>
            <SkillList src={checkmarkIcon} skill='PHP'/>
            <SkillList src={checkmarkIcon} skill='jQuery'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill='Laravel'/>
            <SkillList src={checkmarkIcon} skill='Vue'/>
            <SkillList src={checkmarkIcon} skill='Vuetify'/>
            <SkillList src={checkmarkIcon} skill='Bootstrap'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill='Source Tree'/>
            <SkillList src={checkmarkIcon} skill='Git'/>
            <SkillList src={checkmarkIcon} skill='BackLog'/>
            <SkillList src={checkmarkIcon} skill='Draw.io'/>
        </div>
    </section>
  )
}

export default Skills