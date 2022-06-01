import React, { useState } from "react";
import styles from './Header.module.css'
import Webcam from 'react-webcam'
import Draggable from 'react-draggable'
import { BsFillCameraVideoOffFill, BsFillCameraVideoFill } from 'react-icons/bs'



const Header = () => {

    const [ camera, setCamera ] = useState(false)

    return(
        <>
        <header className={styles.header}>
            <button onClick={() => setCamera(!camera)} className={styles.button}>
                {camera ? <BsFillCameraVideoFill fill="#fff" size={23} /> : <BsFillCameraVideoOffFill fill="#fff" size={23} />}
            </button>
        </header>


        {
            camera ?
            <Draggable>
                <Webcam
                className={styles.camera}
                audio={false}
                width={300}
                height={300}
                videoConstraints={{
                    width: 300,
                    height: 300,
                    facingMode: 'user'
                }}
                />
            </Draggable>
            : null
        }
        </>
    )
}

export default Header;