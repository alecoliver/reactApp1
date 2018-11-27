import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Clock extends Component {
  constructor(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    super(props);
    this.state = {date: new Date(), isLoggedIn :props.isLoggedIn};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if(!isLoggedIn){
      return null;
    }
    
    return (
      <div>
      <i className="fas fa-clock"></i>
      <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
export default withStyles(styles)(Clock);
