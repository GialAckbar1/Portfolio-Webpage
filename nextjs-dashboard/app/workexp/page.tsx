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
            <section>
            <Sidebar />  
            </section>
           
        </main>
    );
}
