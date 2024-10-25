import Link from 'next/link';
import styles from './home/page.module.css'; // Using CSS modules
import carpic from './resources/carpic.jpg'
import Image from 'next/image';


export default function Page() {
  return (
    <main className={styles.main}>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&display=swap');
      </style>

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
        <Link href="/work-experience">
          <span>Work Experience</span>
        </Link>
      </div>

      <div className={styles.content}>
        <h1 className={styles.homeline}>
          <span>H</span><span>i</span>
        </h1>

        <h1 className={styles.introduction}>
          <span>I</span><span>m</span><span>&nbsp;</span> {}
          <span className={styles.bigS}>S</span>
          <span>e</span>
          <span>l</span>
          <span>i</span>
          <span>m</span>
          <span>,</span>
        </h1>
        <h1 className={styles.introduction}>
          <span>
            S
          </span>
          <span>
            o
          </span>
          <span>
            f
          </span>
          <span>
            t
          </span>
          <span>
            w
          </span>
          <span>
            a
          </span>
          <span>
            r
          </span>
          <span>
            e 
          </span>
          <span>
          &nbsp;
          </span>
          <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>

        </h1>
        <h1 className={styles.college}>
        <span>C</span><span>o</span><span>m</span><span>p</span><span>E</span>
          <span>
          &nbsp;
          </span>
          <span>a</span><span>t</span>
          <span>
          &nbsp;
          </span>
          <span className = {styles.school}>M</span><span className = {styles.school}>S</span><span className = {styles.school}>U</span>
          <span>
          &nbsp;
          </span>
          <span>2</span><span>0</span><span>2</span><span>8</span>
        </h1>
        <h1 className = {styles.latestproject}>
          Latest Project

        </h1>
        <Image src={carpic} alt="A picture of a car" className={styles.Car} />
        </div>
    </main>
  );
}
/*ADD THE YOUTUE VIDEO IFRAME*/