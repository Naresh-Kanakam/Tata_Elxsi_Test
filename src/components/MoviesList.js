import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import {Link, withRouter} from 'react-router-dom';
import {get,sortBy,orderBy} from 'lodash';
import {connect} from 'react-redux'
import {updateSelectedMovieId} from '../actions/index';
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
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    getMovieId = (selectedMovieId) => {
        this.props.updateSelectedMovieId(selectedMovieId);
    }
    static getDerivedStateFromProps = (props) => {
        let data = get(props,'movies.movies[0].components',[]);
        return {data:data};
    }
    
     compareDate(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.releaseDate;
        const bandB = b.releaseDate;
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
      compareRank(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.rank;
        const bandB = b.rank;
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
    orderByReleaseDate = () => {
        let {data} = this.state;
        let x = data[1].items;
        x.sort(this.compareDate)
        data[1].items = x;
        this.setState({data:data})
    }
    orderByRank = () => {
        let {data} = this.state;
        let x = data[1].items;
        x.sort(this.compareRank)
        data[1].items = x;
        this.setState({data:data})
    }
    getButtons = () => {
        return (
            <div style={{display:"flex" }}>
                 <Button  variant="contained" color="primary"onClick={this.orderByReleaseDate}>Order By Release Data</Button>
                 
                 <Button  variant="contained" color="primary" onClick={this.orderByRank}>Order By Rank</Button>
                </div>
        )
    }
    renderMovies = (data) => {
        const { classes } = this.props;
            return data.map(movie => {
                if(movie.type === "movie-list") {
                    return movie.items.map((each)=> {
                        return(
                            <div key={each.id} onClick={()=> {this.getMovieId(each.id)}}>
                                <div className={classes.typeTitle}>
                                {each.type}
                                </div>
                                    <div style={{display:'flex', flexWrap:'wrap'}}>
                                                <Link to={`/${each.rank}`}>
                                                    <Card className={classes.root} variant="outlined">
                                                        <CardContent>
                                                            <CardMedia>
                                                                <img className={classes.media} src={each.imageUrl}></img>
                                                            </CardMedia>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Button size="small">{each.title}</Button>
                                                        </CardActions>
                                                    </Card>
                                                </Link> 
                                    </div> 
                            </div>
                        )
                    })
                }
            })
    }

    render() {
        let {data} = this.state;
        return (
            <div>
                {this.getButtons()}
                {this.renderMovies(data)}
            </div>
        )
    }
}
function mapStateToProps(){

}
export default connect(mapStateToProps,{updateSelectedMovieId})(withStyles(useStyles)(MoviesList)) 

