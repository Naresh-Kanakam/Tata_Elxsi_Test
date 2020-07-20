import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  typeTitle: {
    textTransform: "uppercase",
    marginLeft: "1em",
    fontSize: "2em",
  },
  image: {
    padding: "1em",
  },
  img: {
    display: "block",
    height: "27em",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const MovieDetails = () => {
  const moviedetails = useSelector((state) => state.moviedetails);

  const classes = useStyles();
  if (!moviedetails.title) return null;
  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item>
              <img
                className={classes.img}
                alt="complex"
                src={moviedetails.imageUrl}
              />
            </Grid>
            <Grid item xs={12} sm container style={{ padding: "10px" }}>
              <Grid item xs container direction="column">
                <Grid item xs>
                  <Grid container>
                    <Typography variant="subtitle1">Movie Name:</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {moviedetails.title}
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography variant="subtitle1">
                      Year Of Release:
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {moviedetails.releaseDate}
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography variant="subtitle1">Rank:</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {moviedetails.rank}
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography variant="subtitle1">Synopsis:</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {moviedetails.synopsis}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default MovieDetails;
