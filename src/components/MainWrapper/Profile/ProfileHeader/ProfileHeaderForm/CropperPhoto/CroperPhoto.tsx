import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

interface IProps {
    imageUrl:string
}

const CropperPhoto: React.FC<IProps> = ({imageUrl}) => {
    const cropperRef = useRef<HTMLImageElement>(null);
    const onCrop = () => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        console.log(cropper.getCroppedCanvas().toDataURL());
    };

    return (
        <Cropper
            src={imageUrl}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options
            initialAspectRatio={16 / 9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
        />
    );
};
export default CropperPhoto;