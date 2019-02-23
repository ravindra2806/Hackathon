import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { styles } from './style'

class Admin extends React.Component {

    render() {
        const { classes } = this.props;
        const data = [{ id: '1', category: 'Appliance', desc: 'Not working', teammember: 'Adam' },
        { id: '2', category: 'Appliance', desc: 'Broken', teammember: 'Will' }]
        return (
            <Paper className={classes.paper}>
                <Grid container className={classes.root} spacing={16}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Complaint ID</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Assigned team member</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((complaint, index) => {
                                    return <TableRow key={complaint.id + index}>
                                        <TableCell component="th" scope="row">
                                            {complaint.id}
                                        </TableCell>
                                        <TableCell align="right">{complaint.category}</TableCell>
                                        <TableCell align="right">{complaint.desc}</TableCell>
                                        <TableCell align="right">{complaint.teammember}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(Admin)

