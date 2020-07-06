import React, { Component } from 'react'
import {getMovieDetails} from '../actions'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {get} from 'lodash';

const useStyles = ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    media: {
      height: '25em',
      width: '20em',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    typeTitle: {
      textTransform: 'uppercase',
      marginLeft: '1em',
      fontSize: '2em' 
    }
  });

class MovieDetails extends Component {

    componentDidMount(){
        this.props.getMovieDetails(this.props.match.params.title)
    }

    render() {
        const { classes,movieId } = this.props;
        return (
            <div>
               {
                  this.props.movieDet && this.props.movieDet.map(movdet => {
                      if(movdet.id === movieId) {
                        return(
                          <div key={movdet.id}>
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                              <div>
                                <Paper className={classes.paper}>
                                  <Grid container spacing={2}>
                                    <Grid item>
                                      <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={movdet.imageUrl} />
                                      </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                      <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                          <Typography gutterBottom variant="subtitle1">
                                            Movie Name: {movdet.title}
                                          </Typography>
                                          <Typography variant="body2" gutterBottom>
                                            Released On: {movdet.releaseDate}
                                          </Typography>
                                          <Typography variant="body2">
                                            Movie Description: {movdet.synopsis}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Paper>
                              </div>  
                            </div> 
                          </div>
                        )
                      }
                  })
               }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        movieDet: get(state,'movies.getMovieDetails.movies[0].components[1].items',[]),
        movieId: get(state,'selectedId.id','')
    }
}

export default connect(mapStateToProps,{getMovieDetails})(withStyles(useStyles)(MovieDetails)) 
//export const styleClass = withStyles(useStyles)