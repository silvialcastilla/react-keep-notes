import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

//Hay otro fallo ya que se meten las demás pero se queda el primero arriba sin imagen. Why??? 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Note({ notes, deleteNote }) {
  const [state, setState] = useState([]);
  const [theme, setTheme] = useState("cat");
  const [input, setInput] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const [error, setError] = useState(true)

  const APIKEY = "15841423-e107f2d5eb403ce2c822f8170";
  const classes = useStyles();

  useEffect(() => {
    changeImage()
    setInput(false)
  }, [theme])

  const changeTheme = (e) => {
    e.preventDefault();
    setTheme(document.getElementById('theme').value)
  };

  const changeImage = () => {
    return axios
      .get(
        `https://pixabay.com/api/?key=${APIKEY}&q=${theme}&image_type=photo&pretty=true`
      )
      .then((res) => {
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
              {notes.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {notes.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={changeImage}>
            Change the image
          </Button>
          <Button size="small" color="primary" onClick={() => setInput(true)}>
            Change the default theme
          </Button>
          {input ? (
            <div>
              <input
                name="theme"
                type="text"
                placeholder="Busca un tema en las fotos"
                id="theme"
              />
              <button onClick={changeTheme}>
                Cambiar el tema
              </button>
            </div>

          ) : (
              <></>
            )}
              <button
                className="button eliminar u-full-width"
                onClick={() => deleteNote(notes.id)}
              >
                Eliminar
              </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Note;
