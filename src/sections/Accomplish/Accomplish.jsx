import styles from './AccomplishStyles.module.css'
import PA2 from '../../assets/perfect-attendance_2.jpg'
import PA3 from '../../assets/perfect-attendance_3.jpg'
import Rookie from '../../assets/rookie_programmer2022.jpg'
import AccomplishmentCard from '../../components/AccomplishmentCard'

function Accomplish() {
  return (
    <section id='accomplish' className={styles.container}>
      <h1 className='sectionTitle'>Accomplishments</h1>
      <div className={styles.accomplishContainer}>
        <AccomplishmentCard src={Rookie} accTitle={'Rookie Programmer'} accDesc={'SD-Factory section (Nov. 2022)'}/>
        <AccomplishmentCard src={PA2} accTitle={'Perfect Attendance'} accDesc={'2 Years  (Dec. 2022)'}/>
        <AccomplishmentCard src={PA3} accTitle={'Perfect Attendance'} accDesc={'3 Years  (Dec. 2023)'}/>
      </div>
    </section>    
  )
}

export default Accomplish