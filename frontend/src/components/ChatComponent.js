import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestions } from "../actions/authentication";
import classnames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styles } from './styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import QuestionsComponent from './QuestionsComponent';
import TextField from '@material-ui/core/TextField';

class ChatComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
      console.log('this ');
      this.props.getQuestions();
    // }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  render() {
    const { errors } = this.state;
    const {classes } = this.props;
    console.log('the props are', this.props);
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Sign In</h2>
        <Paper className={classes.paper}>
    <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
            <Grid>
              <List>
                <QuestionsComponent questions={this.props.questions}/>
              </List>
            </Grid>
        </Grid>
    </Grid>
    <TextField
    id="description"
    label="Description"
    defaultValue="foo"
    margin="normal"
    variant="outlined"
    className={classes.textArea}
  />
</Paper>
      </div>
    );
  }
}

ChatComponent.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  questions: state.questions
});

let comp = withStyles(styles)(ChatComponent);
export default connect(
  mapStateToProps,
  { getQuestions }
)(comp);
