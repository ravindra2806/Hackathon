import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styles } from './style'

class Admin extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid>
                            {
                                <form className={classes.root} autoComplete="off">
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            label="Quantity"
                                            value={this.state.quantity}
                                            onChange={this.handleQuantityChange}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOnReject}>
                                            Close
                                    </Button>
                                    </FormControl>
                                </form>}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(Admin)

