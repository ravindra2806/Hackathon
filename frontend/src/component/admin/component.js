import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { styles } from './style'
class ItemScan extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productCode:'',
            quantity:''
        }
    }

    handleProductChange = event => {
        this.setState({ productCode: event.target.value })
    };

    handleQuantityChange = event => {
        this.setState({ quantity: Number(event.target.value) })
    };

    handleOnScan = () => {
        this.props.addItem({
            productCode: this.state.productCode,
            quantity:this.state.quantity
        })
        this.handleOnReject()
    };

    handleOnReject = () => {
        this.setState({productCode: '',
            quantity:''})
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(ItemScan)
