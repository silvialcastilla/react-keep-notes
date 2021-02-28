import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Note() {
  const [state, setState] = useState([]);
  const [theme, setTheme] = useState("cat");
  const [input, setInput] = useState(false);
  const [errorImage, setErrorImage] = useState(false);

  const APIKEY = "15841423-e107f2d5eb403ce2c822f8170";
  const classes = useStyles();

  const changeTheme = () => {
    setInput(true);
  };

  const changeThema = (e) => {
    setTheme(e.target.value);
  };

  const submitTheme = (e) => {
    e.preventDefault();
    setInput(false);
    changeImage();
  };

  const changeImage = () => {
    return axios
      .get(
        `https://pixabay.com/api/?key=${APIKEY}&q=${theme}&image_type=photo&pretty=true`
      )
      .then((res) => {
        //Obten una imagen random
        const random = () => {
          let mayor = res.data.hits.length;
          return Math.floor(Math.random() * (mayor - 0 + 1) + 1);
        };

        let images = res.data.hits[random()];

        if (images === undefined) {
          setErrorImage(true);
        }
        if (images.tags === undefined) {
          setErrorImage(true);
        }
        setState(images);
        setErrorImage(false);
      })
      .catch((err) => {
        setErrorImage(true);
      })
      .finally(() => {
        setErrorImage(false);
      });
  };
  return (
    <div className="note">
      <Card className={classes.root}>
        <CardActionArea>
          {errorImage ? (
            <p>No hemos podido encontrar una imagen</p>
          ) : (
            <CardMedia
              component="img"
              alt={state.tags}
              height="160"
              image={state.largeImageURL}
              title={state.tags}
            />
          )}
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
          <Button size="small" color="primary" onClick={changeTheme}>
            Change the default theme
          </Button>
          {input ? (
            <form onSubmit={submitTheme}>
              <input
                name="theme"
                className="theme"
                type="text"
                placeholder="Busca un tema en las fotos"
                onChange={changeThema}
              />

              <button type="submit" className="">
                Cambiar el tema
              </button>
            </form>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default Note;

//https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
