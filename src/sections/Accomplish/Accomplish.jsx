import styles from './AccomplishStyles.modules.css'

function Accomplish() {
  return (
    <section id='accomplish' className={styles.container}>
        <h1 className='sectionTitle'>Accomplishments</h1>
        <div className={styles.accomplishContainer}></div>
    </section>
  )
}

export default Accomplish