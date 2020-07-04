import React, { Component } from 'react'
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

class MoviesList extends Component {
    renderMovies = () => {
        const { classes } = this.props;
        if(this.props.movies !== undefined){
            return this.props.movies.map(movie => {
                return(
                    <div key={movie.id}>
                        <div className={classes.typeTitle}>
                        {movie.components[1].type}
                        </div>
                        {
                             (typeof(movie.components[1].items)=='object')?
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                                {
                                    movie.components[1].items.map(item => {
                                       return( <Link to={`/${item.rank}`}>
                                            <Card className={classes.root} variant="outlined">
                                                <CardContent>
                                                    <CardMedia>
                                                        <img className={classes.media} src={item.imageUrl}></img>
                                                    </CardMedia>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">{item.title}</Button>
                                                </CardActions>
                                            </Card>
                                        </Link> )   
                                    })
                                }
                            </div> 
                            :null   
                        }
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderMovies()}
            </div>
        )
    }
}

export default withStyles(useStyles)(MoviesList)

