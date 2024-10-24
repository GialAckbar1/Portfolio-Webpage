import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import './styles/global.css';

export default function Page() {
  return (
    <main>
            

          <div className='sidenav'>
          <Link href="/home">
          <span>Home</span>
          </Link>
          <Link href="/login">
          <span>Contact me</span>
          </Link>
          <Link href="/login">
          <span>Projects</span>
          </Link>
          <Link href="/login">
          <span>Work Experience</span>
          </Link>
          </div>
    </main>
  );
}
