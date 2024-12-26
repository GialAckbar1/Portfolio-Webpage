import Link from 'next/link';
import carpic from './resources/carpic.jpg';
import Image from 'next/image';
import Sidebar from "./comps/sidebar/sidebar"
import styles from "./home/page.module.css"
import Textfloat from "./comps/floatingtext/Textfloat"
export default function Page() {
  return (
    <main className={styles.main}>
      <section>
      <Sidebar />  
      </section>
      <h1 className={styles.title}>
        <div style={{fontSize: '5.5rem'}}>
        <Textfloat x = "Hi "/>
        </div>
        <div style={{fontSize: '5.5rem'}}>
        <Textfloat x = "I'm Selim,"/>
        </div>
        <div style={{fontSize: '1.5rem'}}>
          <Textfloat x = "Computer Engineering at MSU 2028"/>
        </div>
      </h1>
      <h2>

      
      <div className={styles.Cartitle}>
        <Textfloat x = "2023 latest project"/>
      </div>
      </h2>
      
      


      

        <Image src={carpic} alt="A picture of a car" className={styles.Car} />
    </main>
    
  );
}
