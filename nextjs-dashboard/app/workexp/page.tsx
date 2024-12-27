import Sidebar from "../comps/sidebar/sidebar"
import Textfloat from "../comps/floatingtext/Textfloat"
import styles from "./page.module.css"
export default function Page() {
    return (
        <main>
            <title>Work Experiences</title>
            <h1 className={styles.title}>
            <Textfloat x = "Work Experience"/>
            </h1>
            <ul>
                <li className = {styles.worklist} >
                    Lagrange Theater team member
                    <ul>
                        <li>
                        Delivered exceptional customer service and facilitated smooth day-to-day operations.
                        </li>
                        <li>
                        Assisted in maintaining a clean, safe and functional environment, enhancing customer
                        satisfaction.
                        </li>
                    </ul>
                </li>
            </ul>
            <section>
            <Sidebar />  
            </section>
           
        </main>
    );
}
