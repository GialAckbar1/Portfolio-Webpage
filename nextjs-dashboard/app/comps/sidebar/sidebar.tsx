"use client";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useState } from "react";

export default function Sidebar() {

  return(
    <main>
    

    
        <div className = {styles.container}>
        <div className = {styles.sidenav}>
         </div>
          <ul className={styles.list}>
              <div><Link href = "/" className={styles.links}>Home</Link></div>
              <div><Link href = "/contact" className={styles.links}>Contact Info</Link></div>
              <div><Link href = "/projects" className={styles.links} >Projects</Link></div>
              <div><Link href = "/workexp" className={styles.links} > Past jobs</Link></div>
              <div><Link href = "/about" className={styles.links}>About me</Link></div>
          </ul>

         <div className = {styles.pulltab}>




         </div>


         </div>
        
</main>
  )
}
