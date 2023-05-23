import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import facebook from '../../../Asset/Image/Facebook.jpg';
import twitter from '../../../Asset/Image/Twiter.jpg';
import instagram from '../../../Asset/Image/Instragram.jpg';
import linkedin from '../../../Asset/Image/Linkedin.jpg';
import whatsapp from '../../../Asset/Image/WhatsApp.jpg';



const SocialWrapper = styled(Box)(({theme}) => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'4rem',
    '& > img': {
        height:'120px',width:'130px'
    },
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        '& > img': {
            marginBottom: '1rem',
        }
    }
}))

const SocialSide = () => {
    return (
        <SocialWrapper>
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
            <img src={instagram} alt='' />
            <img src={linkedin} alt='' />
            <img src={whatsapp} alt='' />

        </SocialWrapper>
    );
};

export default SocialSide;