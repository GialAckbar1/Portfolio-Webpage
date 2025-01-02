import Progressbar from "../comps/progressbar/progressbar"
import Sidebar from "../comps/sidebar/sidebar"
import Textfloat from "../comps/floatingtext/Textfloat"
import styles from "./page.module.css"






export default function Page(){
    return(
        <main>
        <Sidebar/>
        
                
        <h1 className={styles.header}><Textfloat x = "About me"/></h1>
        <p className={styles.para}>I am a highly driven software developer with a distinctive background that has equipped me to excel as a collaborative team player. I bring strong communication skills, a sharp analytical approach to problem-solving, and a robust technical foundation to overcome challenges and deliver innovative solutions.</p>
        <h2 className={styles.header2}><Textfloat x = "Languages"/></h2>





        
        <div className={styles.bar1}>
        <Progressbar x = "06.2024" y="#E30B5C" n="Python"/>
        </div>
        <div className={styles.bar2}>
        <Progressbar x = "10.2024" y="orange" n="Java"/>
        </div>
        <div className={styles.bar3} > 
        <Progressbar x = "12.2024" y="#1434A4	" n="C"/>
        </div>
        <div className={styles.bar4} > 
        <Progressbar x = "08.2024" y="Green" n="HTML/JS/CSS"/>
        </div>
        
        </main>










    )
}