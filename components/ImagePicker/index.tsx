'use client';

import { useRef } from 'react';
import classes from './index.module.css';

export default function ImagePicker({ label, name = 'image' }: { label: string, name: string }) {
    const ImageInput = useRef();
    function handlePickClick() {
        if (ImageInput.current) {
            ImageInput.current.click();
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name} 
                    ref={ImageInput}
                    />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}