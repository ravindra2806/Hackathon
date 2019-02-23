import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styles } from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import QuestionComponent from './QuestionComponent';
import TextField from '@material-ui/core/TextField';

class ChatComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    this.props.fetchChatData();
  }
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.paper}>
          <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                  <Grid>
                    <List>
                      <QuestionComponent/>
                    </List>
                  </Grid>
              </Grid>
          </Grid>
          <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          margin="normal"
          variant="outlined"
          className={classes.textArea}
        />
      </Paper>

    )
  }
}




export default withStyles(styles)(ChatComponent);
