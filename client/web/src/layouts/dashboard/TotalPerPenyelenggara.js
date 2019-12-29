import React from "react";
import { Card } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

import CardIcon from "./CardIcon";

const useStyles = makeStyles(theme => ({
  main: {
    flex: "1",
    marginRight: "1em",
    marginTop: 20
  },
  titleLink: { textDecoration: "none", color: "inherit" },
  card: {
    padding: "16px 0",
    overflow: "inherit",
    textAlign: "right"
  },
  title: {
    padding: "0 16px"
  },
  value: {
    padding: "0 16px",
    minHeight: 48
  },
  avatar: {
    background: theme.palette.background.avatar
  },
  listItemText: {
    overflowY: "hidden",
    height: "4em",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical"
  }
}));

const location = {
  pathname: "penyelenggara",
  query: { filter: JSON.stringify({ status: "pending" }) }
};

const TotalPerPenyelenggara = ({ penyelenggara = [], nb }) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <CardIcon Icon={AccountBalanceIcon} bgColor="#f44336" />
      <Card className={classes.card}>
        <Typography className={classes.title} color="textSecondary">
          PENYELENGGARA
        </Typography>
        <Typography variant="h5" component="h2" className={classes.value}>
          <Link to={location} className={classes.titleLink}>
            {nb}
          </Link>
        </Typography>
        <Divider />
        <List>
          {penyelenggara.map(record => {
            const displayAvatar =
              record && record.logo ? record.logo.src : null;

            const displayPrimary =
              (record.lingkup_id === 2 ? "Pomdam " : "") +
              (record.kode_romawi ? record.kode_romawi + "/" : "") +
              record.kode;

            return (
              <ListItem
                key={record.id}
                button
                component={Link}
                to={`/penyelenggara/${record.id}`}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    src={displayAvatar}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={displayPrimary}
                  className={classes.listItemText}
                  style={{ paddingRight: 0 }}
                />
              </ListItem>
            );
          })}
        </List>
      </Card>
    </div>
  );
};

export default TotalPerPenyelenggara;
