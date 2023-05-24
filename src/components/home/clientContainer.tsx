import React, { useState } from 'react'
import {Box} from '@mui/material';
import Image from 'next/image';

interface clientData {
    client: any;
    clientHover?:any;
    widthImg?: string;
}

const ClientContainer = ({client, widthImg, clientHover}: clientData) => {
    const [image, setImage] = useState(client)
    return (
        <Box sx={{ textAlign: "center" }}>
            <Image src={image} alt="test" width={80} height={80} className='black-and-white' style={{width: widthImg && "100%" }}  
                onMouseEnter={(e) => setImage(clientHover)}
                onMouseLeave={(e) => setImage(client)}
            />
        </Box>
    )
}

export default ClientContainer