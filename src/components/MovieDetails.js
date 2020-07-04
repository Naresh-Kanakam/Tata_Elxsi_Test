import React, { Component } from 'react'
import {getMovieDetails} from '../actions'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import {Link, withRouter} from 'react-router-dom';

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
        const { classes } = this.props;
        return (
            <div>
               {
                   this.props.movieDet && this.props.movieDet.map(movdet => {
                       return(
                           <div key={movdet.id}>
                               {
                             (typeof(movdet.components[1].items)=='object')?
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                                {
                                    movdet.components[1].items.map(item => {
                                       return( <div>
                                            <Card variant="outlined">
                                                <CardContent>
                                                    <CardMedia>
                                                        <img className={classes.media} src={item.imageUrl}></img>
                                                    </CardMedia>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">{item.title}</Button>
                                                </CardActions>
                                            </Card>
                                        </div> )   
                                    })
                                }
                            </div> 
                            :null   
                        }
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("movieDet", state.movies.getMovieDetails)
    return{
        movieDet: state.movies.getMovieDetails 
    }
}

export default connect(mapStateToProps,{getMovieDetails})(withStyles(useStyles)(MovieDetails)) 
//export const styleClass = withStyles(useStyles)