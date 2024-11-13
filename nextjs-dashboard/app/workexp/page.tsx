import Link from 'next/link';
import styles from './page.module.css'; // Using CSS modules




export default function Page(){

    return(
    <main>
        <title>
            Work Experiences
        </title>
        <h1 className ={styles.title}>
        Work Experiences
      </h1>

        <div className={styles.sidenav}>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/contact">
          <span>Contact me</span>
        </Link>
        <Link href="/projects">
          <span>Projects</span>
        </Link>
        <Link href="/workexp">
          <span>Work Experience</span>
        </Link>
      </div>
      



    </main>
    







);


}