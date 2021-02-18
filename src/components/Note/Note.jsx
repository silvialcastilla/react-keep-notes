import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



//  let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// 	$.getJSON(URL, function(data){
// 	if (parseInt(data.totalHits) > 0)
// 	    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// 	else
// 	    console.log('No hits');
// 	});
//}
//API KEY: 
//https://pixabay.com/api/

function Note() {
  const [state, setState] = useState({imagen: {image: '', tags: '',theme: ''}});
  const classes = useStyles();  

  const changeImage = () => {
    let APIKEY= "15841423-e107f2d5eb403ce2c822f8170";
    return axios.get(`https://pixabay.com/api/?key=${APIKEY}&q=cat&image_type=photo&pretty=true`)
         .then((res) => {
          const random =() => {
            let mayor = res.data.hits.length;
            return Math.floor((Math.random() * (mayor - 0 + 1)) + 1 );
        }
        
           let images = res.data.hits[random()].largeImageURL;
          //setState(imagen); //CUIDADOOOOOOOO QUE TE HACE UN BUCLE INFINITO DE PETICIONES
          // setState(prevState => ({
          //   imagen: {
          //     ...prevState.imagen,
          //     message: {
          //       ...prevState.imagen.image, 
          //       image: images
          //     }
          //   }
          // }));

          //console.log(imagen)
     })
    }
  return (
    <div className="note">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
         // image={state.imagen   }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            El título que la persona escribe.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            La nota que la persona escribe
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={changeImage}>
          Change the image
        </Button>
        <Button size="small" color="primary" >
          Change the default theme
        </Button>
      </CardActions>
    </Card>


    </div>
  );  
}

export default Note;

//https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object