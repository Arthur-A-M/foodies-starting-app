'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './index.module.css';

export default function ImagePicker({ label, name = 'image' }: { label: string, name: string }) {
    const [pickedImage, setPickedImage] = useState<string | null>(null);
    const ImageInput = useRef();
    function handlePickClick() {
        if (ImageInput.current) {
            ImageInput.current.click();
        }
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result as string);
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {
                        pickedImage ?
                            <Image
                                src={pickedImage}
                                alt='Picked image'
                                fill
                            />
                            : <p>No image picked</p>}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={ImageInput}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}