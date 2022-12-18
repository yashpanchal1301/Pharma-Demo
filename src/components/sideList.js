import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './product.scss'

const data = [{
    id: 0,
    header: 'Related Category',
    list: ['Praracetamol Tablet', 'Praracetamol Syrups', 'Praracetamol Powder', ' Aceclofenac', ' Mefenamic Paracetamol Syrup'],

},
{
    id: 1,
    header: 'Related Brands',
    list: [' Cynmol Praracetamol ', 'Pandal Praracetamol Tablet', ' Combiflam', 'Crocin Tablet', 'Calpol Praracetamol Tablet', 'Sumo Tablet'],

},
{
    id: 3,
    header: 'Business Type ',
    list: [' Wholesaler', ' Manufcaturer', ' Reatailer', ' Exporter'],

},
{
    id: 4,
    header: ' Strength',
    list: ['500 mg', '650 mg'],

},
{
    id: 5,
    header: 'Manufacturer ',
    list: [' Intas Pharmaceutical Ltd', ' Alkan Laboratories Ltd'],

},

]

export default function SideList() {
    return (
        <Box className='side-list' sx={{ width: 400, marginRight: '15px',height:'900px',overflowY:'auto',scrollbarWidth:'none' }}>
            {data.map((element) => (

                <Box sx={{ boxShadow: '0px 0px 4px 3px rgba(11, 64, 107, 0.1)', marginBottom:'20px' }}>
                    <Typography fontWeight={800} fontSize={16} sx={{ padding: '10px', background: 'lightgrey', textAlign: 'center' }}>{element.header}</Typography>
                    {element.list.map((item, index) => (
                        <Typography className='side-items' key={index} fontWeight={600} fontSize={12} sx={{ padding: '8px',cursor:'pointer' }}>{item}</Typography>
                    ))}
                </Box>
            ))}

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