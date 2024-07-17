import About from './About'
import Info from './Info'
import Interests from './Interests'
import Footer from './Footer'
import styles from './App.module.css'

export default function App(){
    return (
        <div className={styles.container}>
        <Info/>
        <About/>
        <Interests/>
        <Footer/>

        </div>
    )
}