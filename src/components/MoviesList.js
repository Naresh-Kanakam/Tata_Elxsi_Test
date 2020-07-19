import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  media: {
    height: "25em",
    width: "100%",
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
  cardLoyout: {
    padding: "10px",
  },
  sortContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  sortTitle: {
    fontSize: "2rem",
    margin: "0px 10px",
  },
  sortButtons: {
    margin: "0px 10px",
  },
}));

const MoviesList = () => {
  const classes = useStyles();
  const movieslist = useSelector((state) => state.movieslist);

  const moviesfilter = useSelector((state) => state.moviesfilter);
  const dispatch = useDispatch();
  const filterMovies = useCallback(
    (item) =>
      dispatch({
        type: actions.MOVIES_LIST,
        payload: { filterOption: item.valueToOrderBy },
      }),
    [dispatch]
  );

  const movDetails = useCallback(
    (item) => dispatch({ type: actions.MOVIES_DETAILS, payload: item }),
    [dispatch]
  );

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} className={classes.sortContainer}>
          <div className={classes.sortTitle}>Sort By:- </div>
          {moviesfilter.map((item) => (
            <Button
              className={classes.sortButtons}
              variant="contained"
              key={item.label}
              color="primary"
              onClick={() => filterMovies(item)}>
              {item.label}
            </Button>
          ))}
        </Grid>
      </Grid>

      <Grid container>
        {movieslist.map((item) => (
          <Grid className={classes.cardLoyout} item sm={6} md={4} key={item.id}>
            <Link to={`/moviedetails/${item.rank}`}>
              <Card
                className={classes.root}
                variant="outlined"
                onClick={() => movDetails(item)}>
                <CardContent>
                  <CardMedia>
                    <img
                      alt="Poster"
                      className={classes.media}
                      src={item.imageUrl}></img>
                  </CardMedia>
                </CardContent>
                <CardActions>
                  <Button size="small">{item.title}</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MoviesList;
