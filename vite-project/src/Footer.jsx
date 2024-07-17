import styles from './Footer.module.css'


export default function Footer(){
    return (
        <footer className={styles.footerSection}>
            <i className="fa fa-twitter" ></i>
            <i className="fa fa-facebook" ></i>
            <i className="fa fa-instagram" ></i>
            <i className="fa fa-github" ></i>
        </footer>
    )
}