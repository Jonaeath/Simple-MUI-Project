import {
  Card,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Box,
  Container,
} from "@mui/material";
import React from "react";

const FoodCdisplay = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <Box sx={{marginBottom:'2rem'}}>
      <Container>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={strCategoryThumb} title="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {strCategory}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb: 3,
                display: "flex",
                height: 100,
                flexDirection: "column",
                overflow: "hidden",
                overflowY: "scroll",
               }}>
              {strCategoryDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order</Button>
            <Button size="small">Cancel</Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};

export default FoodCdisplay;
