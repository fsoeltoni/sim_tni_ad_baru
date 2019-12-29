import React from "react";
import Card from "@material-ui/core/Card";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import CardIcon from "./CardIcon";

const useStyles = makeStyles({
  main: {
    flex: "1",
    marginLeft: "1em",
    marginTop: 20
  },
  card: {
    overflow: "inherit",
    textAlign: "right",
    padding: 16,
    minHeight: 52
  }
});

const TotalSimPerBulan = ({ value }) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <CardIcon Icon={RecentActorsIcon} bgColor="#ff9800" />
      <Card className={classes.card}>
        <Typography className={classes.title} color="textSecondary">
          PER BULAN INI
        </Typography>
        <Typography variant="h5" component="h2">
          3
        </Typography>
      </Card>
    </div>
  );
};

export default TotalSimPerBulan;
