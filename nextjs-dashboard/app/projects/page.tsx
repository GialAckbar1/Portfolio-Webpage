import Sidebar from "../comps/sidebar/sidebar"
import Textfloat from "../comps/floatingtext/Textfloat"
import Styles from "./page.module.css"
import carpic from '../resources/carpic.jpg';
import Image from "next/image";


export default function Page(){
    return(
        
        <main>
        <h1 className={Styles.mainheader}>
        
        <div style = {{fontSize: '5.5rem'}}>
            <Textfloat x = "Projects"/>
        </div>
        
        </h1>
        <ul>
        <li className = {Styles.projectheader}>
            My 1984 Mercedes-Benz 230ce
        </li>
        </ul>
        <a href = 'https://docs.google.com/document/d/1W1gPPhOaw8eWcP1B168PMXQ3X81yEzDousF3v5klXhk/edit?usp=sharing'>
        <Image src={carpic} alt="A picture of a car" className={Styles.car} />
        </a>
        
        <Sidebar />  
        
        </main>
    )
}