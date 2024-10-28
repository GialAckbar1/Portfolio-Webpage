import Link from 'next/link';
import carpic from './resources/carpic.jpg';
import Image from 'next/image';
import './styles/global.css'

export default function Page() {
  return (
    <main className="main">
      <div className="sidenav">
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

      <div className="content">
        <h1 className="homeline">
          <span>H</span><span>i</span>
        </h1>

        <h1 className="introduction">
          <span>I</span><span>m</span><span>&nbsp;</span>
          <span className="bigS">S</span>
          <span>e</span><span>l</span><span>i</span><span>m</span><span>,</span>
        </h1>

        <h1 className="introduction">
          <span>S</span><span>o</span><span>f</span><span>t</span>
          <span>w</span><span>a</span><span>r</span><span>e&nbsp;</span>
          <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span>
          <span>o</span><span>p</span><span>e</span><span>r</span>
        </h1>

        <h1 className="college">
          <span>C</span><span>o</span><span>m</span><span>p</span><span>E</span>
          <span>&nbsp;</span>
          <span>a</span><span>t</span>
          <span>&nbsp;</span>
          <span className="school">M</span>
          <span className="school">S</span>
          <span className="school">U</span>
          <span>&nbsp;</span>
          <span>2</span><span>0</span><span>2</span><span>8</span>
        </h1>

        <h1 className="latestproject">
          Latest Project
        </h1>

        <Image src={carpic} alt="A picture of a car" className="Car" />
      </div>
    </main>
  );
}
