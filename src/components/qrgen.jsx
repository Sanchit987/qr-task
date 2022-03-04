import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QrGen = ({text}) => {
    const [src, setSrc] = useState('');

    useEffect(() => {
        QRCode.toDataURL(text).then(setSrc);
    }, []);
    
    return ( 
        <div class="body">
            <img className="barcode" src={src} />
            <h1>{text}</h1>
        </div>
     );
}
 
export default QrGen;