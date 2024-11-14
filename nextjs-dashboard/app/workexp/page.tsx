import Link from 'next/link';
import styles from './page.module.css'; // Using CSS modules

export default function Page() {
    return (
        <main>
            <title>Work Experiences</title>
            
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k&nbsp;</span>
                    <span>E</span>
                    <span>x</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
            </div>

            <div className={styles.sidenav}>
                <Link href="/"><span>Home</span></Link>
                <Link href="/contact"><span>Contact me</span></Link>
                <Link href="/projects"><span>Projects</span></Link>
                <Link href="/workexp"><span>Work Experience</span></Link>
            </div>
        </main>
    );
}
