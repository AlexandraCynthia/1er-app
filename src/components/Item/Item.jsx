import { Link } from "react-router-dom";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Items from "../Item/Item.css"

const Item = ({ elemento }) => {
  return (
    <div className="card">
    <Card  sx={{ maxWidth: 345 }}  >
      <CardActionArea >
        <CardMedia  
          component="img"
          height="260"
          image={elemento.img}
          alt="imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elemento.parrafo}
                      
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Precio: S/{elemento.precio}
                      
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${elemento.id}`}>
          <Button className="boton" variant="contained" color="secondary">
            Ver producto
          </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
};

export default Item;
