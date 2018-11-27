import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Grid from '@material-ui/core/Grid';
import './UserList.css';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

var listItems = [{
  id:1,
  icon : 'fa-image',
  name : 'Photo',
  date : 'Jan 1, 2018'
},
{
  id:2,
  icon : 'fa-suitcase',
  name : 'Work',
  date : 'July 5, 2018'
},
{
  id:3,
  icon : 'fa-umbrella-beach',
  name : 'Party',
  date : 'July 9, 2018'
}];

function GetList() {
    var namesList = listItems.map(function(listItem, index){
        			return<ListItem key={listItem.id.toString()} button>
                      <Avatar>
                      <i className={`fas ${listItem.icon}`}></i>
                      </Avatar>
                      <ListItemText primary={listItem.name} secondary={listItem.date} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <i className="far fa-trash-alt"></i>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>;
      			})

    return <List>{ namesList }</List>

};


class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {isLoggedIn :props.isLoggedIn};
  }


  render() {
    const { classes } = this.props;
    const isLoggedIn = this.state.isLoggedIn;
    if(!isLoggedIn){
      return null;
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <GetList />
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(UserList);
