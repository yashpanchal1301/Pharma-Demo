import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Tablet from '../assets/image/tablet.jpg'
import TelegramIcon from '@mui/icons-material/Telegram';
import './product.scss'

const data = [
    {
        id: 1,
        image: Tablet,
        name: 'Favipiravir 400mg (Fabiflu) Tablets',
        price: 'Rs 1775',
        manufacturer: 'Glenmark Pharmaceutical Limited',
        address: 'PARVAT PATIYA, SURAT,GUJARAT',
    }, {
        id: 2,
        image: Tablet,
        name: 'Favipiravir 400mg (Fabiflu) Tabletssss',
        price: 'Rs 1775',
        manufacturer: 'Glenmark Pharmaceutical Limited',
        address: 'PARVAT PATIYA, SURAT,GUJARAT',
    }, {
        id: 3,
        image: Tablet,
        name: 'Favipiravir 400mg (Fabiflu) Tablets',
        price: 'Rs 1775',
        manufacturer: 'Glenmark Pharmaceutical Limited',
        address: 'PARVAT PATIYA, SURAT,GUJARAT',
    },
    {
        id: 4,
        image: Tablet,
        name: 'Favipiravir 400mg (Fabiflu) Tablets',
        price: 'Rs 1775',
        manufacturer: 'Glenmark Pharmaceutical Limited',
        address: 'PARVAT PATIYA, SURAT,GUJARAT',
    },
    {
        id: 5,
        image: Tablet,
        name: 'Favipiravir 400mg (Fabiflu) Tablets',
        price: 'Rs 1775',
        manufacturer: 'Glenmark Pharmaceutical Limited',
        address: 'PARVAT PATIYA, SURAT,GUJARAT',
    },
    {
        id: 6,
        image: Tablet,
        name: 'Favipiravir 400mg (Fabiflu) Tablets',
        price: 'Rs 1775',
        manufacturer: 'Glenmark Pharmaceutical Limited',
        address: 'PARVAT PATIYA, SURAT,GUJARAT',
    }
];

export default function Product() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {data.map((element) => (
                    <Grid item xs={4}>
                        <Box className='product'>
                            <img src={Tablet} style={{ height: '220px' }} />
                            <Typography fontWeight={600} fontSize={16}>
                                {element.name}
                            </Typography>
                            <Typography sx={{color:'maroon', marginBottom:'1rem'}} fontWeight={800} fontSize={16}>
                                {element.price} <span style={{color:'darkslategray',fontWeight:'300'}}>/ stripe</span>
                            </Typography>
                            <Typography fontWeight={600} fontSize={14}>
                                {element.manufacturer}
                            </Typography>
                            <Typography sx={{color:'darkslategray'}} fontWeight={400} fontSize={12}>
                                {element.address}
                            </Typography>
                            <hr/>
                            <Button sx={{textTransform:'none', color:'teal'}}>
                            <TelegramIcon/>  <Typography ml={1} fontWeight={600} fontSize={18}>Contact Supplier</Typography>
                            </Button>
                        </Box>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}


// const data={
//     image:'',
//     name:'',
//     price:'',
//     manufacturer:'',
//     address:'',
// }