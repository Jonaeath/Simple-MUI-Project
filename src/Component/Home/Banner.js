import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import banner from '../../Asset/Image/Banner.jpg'
import { useNavigate } from 'react-router-dom';


const BannerWrapper = styled(Box)(({theme}) => ({
    height:'80vh',
    backgroundColor:'#33c9dc',
    clipPath: 'polygon( 0% 0%, 100% 0%, 100% 80%, 0% 100%);',
    display:'flex',
    justifyContent:'space-between',
   
}))

const Banner = () => {
    
    const navigate = useNavigate()

    const foodCategory = () =>{
        navigate('/foodcategory')
    } 

    return (
        <BannerWrapper>
            <Box>
                <Typography sx ={{
                    fontSize:'2rem',
                    fontWeight:'bold',
                    marginX:'3rem',
                    marginY: '2rem'
                }}>
                    BD FOOD HEALTHY FOOD FOR EVER
                </Typography>
                <Typography
                sx ={{
                    marginX:'3rem',
                    marginY: '2rem'
                }}
                >
                Healthy bd is an online shop for marketing and selling authentic health & beauty products imported from UK and many other countries.
                </Typography>
            <Button
            onClick={foodCategory}
            sx ={{
                marginX:'5rem',
                backgroundColor:'primary.green'
            }}
            >GO TO FOOD SIDE</Button>
            </Box>
            <Box sx = {{mx:1, my:1,
            // display:['none','none','block']
            display:{
                xs:'none',
                sm: 'none',
                md: 'block',
            },
            }}>
                <img src={banner} alt='' style={{height:'90%'}}/>
            </Box>
        </BannerWrapper>
    );
};

export default Banner;