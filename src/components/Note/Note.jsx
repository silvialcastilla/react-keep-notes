import React from 'react'
//import Logo from "../../components/logo/Logo";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const addNote = () => {
 let APIKEY= "15841423-e107f2d5eb403ce2c822f8170";
//  let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// 	$.getJSON(URL, function(data){
// 	if (parseInt(data.totalHits) > 0)
// 	    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// 	else
// 	    console.log('No hits');
// 	});
}
//API KEY: 
//https://pixabay.com/api/

function Note() {
  const classes = useStyles();  
  return (
    <div className="note">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="150"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={addNote()}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );

    </div>
  );
}

export default Note;