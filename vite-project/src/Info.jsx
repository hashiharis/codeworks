import profileImg from './assets/hashipic.jpg'
import mail from './assets/Mail.jpg'
import styles from './Info.module.css'

const color={
    color: '#3268a8',
    background: "white",
    padding:"0.2em",
    boxShadow:"2px 5px 2px 0px rgba(0,0,0,0.18)"

}

const mailIcon={
    background:"#D1D5DB"
}

export default function Photo(){
    return(
        <section className={styles.profileimg}>
        <img className={styles.proImg} src={profileImg}></img>
        <div className={styles.nameDetails}>
           <h1>Hashi Haris</h1>
           <p id={styles.role}>Frontend Developer</p>
           <a href="https://github.com/hashiharis/codeworks">hashiharis.github</a>
           </div>
           <div className={styles.contact}>
            <a href="mailto:hashiharis95@gmail.com">
           <button className={styles.buttons} id={styles.btn1}>
            <img src={mail} alt="mail-icon" style={mailIcon}/>Email</button> </a>
            <a href="www.linkedin.com/in/hashi-haris">
           <button className={styles.buttons} id={styles.btn2}>
           <i className="fa fa-linkedin" style={color}></i>LinkedIn</button> </a> 
           </div>  
    </section>
    )
   
}
