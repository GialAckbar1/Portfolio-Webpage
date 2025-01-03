import Progressbar from "@/app/comps/progressbar/progressbar";
import Sidebar from "@/app/comps/sidebar/sidebar";
import Textfloat from "@/app/comps/floatingtext/Textfloat";
import styles from "./page.module.css"
import Link from "next/link";





export default function Page(){
    return(
        <main>
        <Sidebar/>
        
                
        <h1 className={styles.header}><Textfloat x = "About me"/></h1>
        <p className={styles.para}>I am a highly driven software developer with a distinctive background that has equipped me to excel as a collaborative team player. I bring strong communication skills, a sharp analytical approach to problem-solving, and a robust technical foundation to overcome challenges and deliver innovative solutions.</p>
        <h2 className={styles.header2}><Textfloat x = "Technologies and Frameworks"/></h2>





        
        <div className={styles.bar1}>
        <Progressbar x = "06.2024" y="#f14e32" n="Git"/>
        </div>
        <div className={styles.bar2}>
        <Progressbar x = "06.2024" y="#61dbfb" n="React"/>
        </div>
        <div className={styles.bar3} > 
        <Progressbar x = "12.2024" y="orange" n="PostgreSQL"/>
        </div>
        
        
        <Link href = "/about/" className={styles.button}>
        Languages
        </Link>
            
        
        </main>
    )

    }
