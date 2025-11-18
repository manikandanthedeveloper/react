"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

type ImagePickerProps = {
    label: string;
    name: string
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState<string | null>(null);
    const imageInput = useRef<HTMLInputElement | null>(null);

    const handlePickClick = () => {
        imageInput.current?.click();
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                setPickedImage(fileReader.result);
            }
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <div className="col-md-12">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="row d-flex align-items-center">
                <div className="col-md-2 justify-content-center">
                    <div className="preview border d-flex justify-content-center align-items-center text-center" style={{ height: '200px' }}>
                        {!pickedImage && <p className="text-center">No image picked yet.</p>}
                        {pickedImage && (<Image src={pickedImage} alt="The image selected by the user." className="img-fluid" height={200} width={200} />)}
                    </div>
                </div>
                <div className="col-md-10">
                    <input className="form-control form-control-lg visually-hidden" id={name} name={name} type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInput} onChange={handleImageChange} />
                    <button type="button" className="btn btn-warning" onClick={handlePickClick}>Pick an Image</button>
                </div>
            </div>
        </div>
    );
}

export default ImagePicker;