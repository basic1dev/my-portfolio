import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
// import imageUrl from '../images/experience-img.jpg'


export const ProductCard = (props) => {
    return(
        <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           style={{ height: "250px", paddingTop: "2%" }}
           component="img"
           alt="green iguana"
           height="150"
           image={props.imageURL}
         /> 
         
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {props.name}
           </Typography>

           <Typography variant="body2" color="text.secondary">
             {props.description}
           </Typography>
         </CardContent>
         
         
         <CardActions>
           <Button size="small" variant='contained' endIcon={<AddIcon />}>Add to cart</Button>
           <Button size="small">Share</Button>
         </CardActions>
       </Card>
    )
}