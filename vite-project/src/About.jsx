import styles from './About.module.css'

export default function About(){
    return (
        <section className={styles.aboutSection}> 
         <h2 id={styles.aboutHeader}>About</h2>
         <p>I am a frontend developer with a particular interest in 
            making things simple and automating daily tasks. I try to keep up with security
            and best practices, and am always looking for new things to learn
         </p>
         </section>
      
    )
}