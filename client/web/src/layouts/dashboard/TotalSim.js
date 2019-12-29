import React from "react";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import { makeStyles, Card, Typography } from "@material-ui/core";
import CardIcon from "./CardIcon";

const useStyles = makeStyles({
  main: {
    flex: "1",
    marginRight: "1em",
    marginTop: 20
  },
  card: {
    overflow: "inherit",
    textAlign: "right",
    padding: 16,
    minHeight: 52
  }
});

const TotalSim = ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CardIcon Icon={RecentActorsIcon} bgColor="#31708f" />
      <Card className={classes.card}>
        <Typography className={classes.title} color="textSecondary">
          PER TAHUN
        </Typography>
        <Typography variant="h5" component="h2">
          20
        </Typography>
      </Card>
    </div>
  );
};

export default TotalSim;
