import styles from './Interests.module.css'

export default function Interests(){
    return (
        <section className={styles.interestsSection}>
        <h2 id={styles.interestsHeader}>Interests</h2>
        <p>Food expert.Music scholar.Reader.
        Internet fanatic.Bacon buff.Entreprenaur.Travel geek.Pop culture ninja.Cofee fanatic</p>
        </section>
    )
}