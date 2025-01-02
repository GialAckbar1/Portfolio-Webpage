"use client"
import React, { useState } from "react";
import styles from "./progressbar.module.css"

//date format 00.0000
//             month.year
export default function progressbar({x , y , n} : {x: string; y:string; n:string}){
    const [currentyear, setDate] = useState(new Date());
    const date = x.split(".")
    var z = 0;
    if(Number(date[1]) == Number(currentyear.getFullYear())){
        z += ((Number(currentyear.getMonth()) + 1) - Number(date[0]))
    
    }
    if(Number(date[1]) < Number(currentyear.getFullYear())){
        z +=  (12 - (Number(date[0]))) + (Number(currentyear.getMonth()) + 1)
    }

    var p = z * 27


    
    return(
        <main>
        <h1 className={styles.header}>{n} : {z} months</h1>
        <div className={styles.bar} style = {{backgroundColor : y , width : p+"px"}} >
        </div>
        </main>
    )
}