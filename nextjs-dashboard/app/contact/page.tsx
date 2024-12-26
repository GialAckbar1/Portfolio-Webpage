import Link from 'next/link';
import styles from './page.module.css'; // Using CSS modules
import LinkedIn_logo from '../resources/LinkedIn_logo.png';
import github_logo from '../resources/github.png';
import Image from 'next/image';
import Sidebar from "../comps/sidebar/sidebar"

export default function Page() {
    return (
        <main>
            <section>
            <Sidebar />  
            </section>
                <a href="https://www.linkedin.com/in/selim-abik-386055299/">
                    <Image src={LinkedIn_logo} alt="LinkedIn logo" className={styles.logo1} />
                </a>
                <a href="https://www.youtube.com/@Selim-Abik">
                    <div className={styles.youtubeLogo}>
                        <div className={styles.playButton}></div>
                    </div>  
                </a>
                <a href="https://github.com/GialAckbar1">
                    <Image src={github_logo} alt="GitHub logo" className={styles.logo2} />
                </a>
            
        </main>
    );
}
