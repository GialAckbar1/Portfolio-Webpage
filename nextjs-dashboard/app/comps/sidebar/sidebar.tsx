import Link from 'next/link';
import styles from './Sidebar.module.css';


export default function Sidebar(){
    return(
    
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

    )


}