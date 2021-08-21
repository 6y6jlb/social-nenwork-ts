import React, {useState} from 'react';
import ReactCrop, {Crop} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


interface IProps {
    src: string
}

const CropperPhoto: React.FC<IProps> = ({src}) => {
    const params = {
        aspect: 16 / 9,

    }
    const [crop, setCrop] = useState<any> ( params );
    const onChange = (newCrop:Crop) => {
        console.log(crop)
        setCrop ( newCrop )
    };
    return <ReactCrop src={ src } crop={ crop } onChange={ onChange }/>;
};

export default CropperPhoto