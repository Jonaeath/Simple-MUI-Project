import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FoodCdisplay from './FoodCdisplay';



const FoodCategory = () => {
  
    const [FoodCategorys, seTFoodCategorys] = useState(null)

    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res =>res.json())
        .then(data =>seTFoodCategorys(data))
    },[])

    return (
        <Box>
           <Grid container spacing={2} sx ={{mx:'3rem'}} >
            {
            FoodCategorys?.categories?.map(category=><FoodCdisplay
            key = {category.idCategory}
            category ={category}
            />)
            }
           </Grid>
        </Box>
    );
};

export default FoodCategory;