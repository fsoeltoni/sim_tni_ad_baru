import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: "18em"
  }
});

const mediaUrl = `https://marmelab.com/posters/beard-${parseInt(
  Math.random() * 10,
  10
) + 1}.jpeg`;

const Identity = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={mediaUrl} className={classes.media} />
      <CardContent>
        <Typography variant="h5" component="h2">
          PUSPOMAD
        </Typography>
        <Typography component="p">
          Pusat Polisi Militer Angkatan Darat
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Identity;
