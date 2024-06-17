import style from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={style.container}>
        <p>
            &copy; 2024 Danie Mae Peregrina <br/>
            All rights reserved.
            <br/>
            Made with React + Vite 
        </p>
    </section>
  )
}

export default Footer