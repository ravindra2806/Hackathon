import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemHeader from '@material-ui-core/ListItemHeader';
import Card from '@material-ui/core/Card';
import {styles} from './style';
let resp = [{question: 'Hi please', options:["optionA", "OptionB","optionC"]}];


class QuestionComponet extends React.Component {
  constructor(props) {
    super(props);
    this.constructInputCard = this.constructInputCard.bind(this);

  }


  constructInputCard(options,classes) {
    console.log(classes);
    let opts = options.map(op => <ListItem className={classes.options} button> <ListItemText primary="Drafts" /></ListItem>);
    return opts;
  }
  render() {
    const {classes} = this.props;
    console.log(classes);
    return(
      <div>
        <Card className={classes.questionCard}>
        <List>
        <div style={{float: 'left', margin: 20}}>{resp[0].question}</div>
            <ListItem>
              <List>
                {this.constructInputCard(resp[0].options, classes)}
              </List>
            </ListItem>
        </List>



        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(QuestionComponet);
