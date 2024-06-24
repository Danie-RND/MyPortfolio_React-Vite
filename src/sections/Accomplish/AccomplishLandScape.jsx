import styles from './AccomplishStyles.module.css'
import Exam from '../../assets/exam.png'
function AccomplishLandScape() {
  return (
    <section id='accomplishLandscape' className={styles.landscapeContainer}>
        <div className={styles.accomplishLandScapeContainer}>
            <a>
                <img className='hover' src={Exam}/>
                <h3>HRD In-house Programming Exam</h3>
                <p>3/3 Passed (May 2024)</p>
            </a>
        </div>
    </section>
  )
}

export default AccomplishLandScape