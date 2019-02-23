import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemHeader from '@material-ui-core/ListItemHeader';
import Card from '@material-ui/core/Card';
import {styles} from './styles';
let resp = [{question: 'Hi please', options:["optionA", "OptionB","optionC"]}];


class QuestionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.constructInputCard = this.constructInputCard.bind(this);

  }


  constructInputCard(options,classes) {
    console.log(classes);
    let opts = options.map(op => <ListItem className={classes.options} button> <ListItemText primary="Drafts" /></ListItem>);
    return opts;
  }

  // getFirstQuestion(classes) {
  //   let ele = this.props.chatList.filter(chat =>  chat.squence == 1 );
  //   // return <ListItem className={classes.options} button> <ListItemText primary={ele.} /></ListItem>
  //   return getFirstQuestion;
  // }

  render() {
    console.log('this.props in ChatComponent', this.props);
    const {classes, chatList} = this.props;
    console.log('the chat list',chatList);
    return(
      <div>
        <Card className={classes.questionCard}>
        <List>
        <div style={{float: 'left', margin: 20}}>{resp[0].question}</div>
            <ListItem>
              <List>

              </List>
            </ListItem>
        </List>



        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(QuestionsComponent);
