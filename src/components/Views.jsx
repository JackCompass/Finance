import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {db} from './../firebase';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
	tableView: {
		margin: '20px 0',
		padding: '0 15px',
	}
});

const Views = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);

	useEffect(() => {
		db.ref('users/').get().then( (snapshot) => {
			snapshot.forEach( element => {
				setData( (prevState) => {
					return [...prevState, element.val()];
				})
			});
		}).catch ( (error) => {
			alert(error.message);
		})
	}, [])

	return (
		<div className={classes.tableView}>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Account Holder</StyledTableCell>
							<StyledTableCell align="right">Account Type</StyledTableCell>
							<StyledTableCell align="right">User Id</StyledTableCell>
							<StyledTableCell align="right">Email</StyledTableCell>
							<StyledTableCell align="right">Balance</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item) => {
							return (<StyledTableRow key={item.AccountHolder}>
								<StyledTableCell component="th" scope="row">
									{item.AccountHolder}
								</StyledTableCell>
								<StyledTableCell align="right">{item.AccountType}</StyledTableCell>
								<StyledTableCell align="right">{item.UserId}</StyledTableCell>
								<StyledTableCell align="right">{item.Email}</StyledTableCell>
								<StyledTableCell align="right">{item.CurrentBalance}</StyledTableCell>
							</StyledTableRow>)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}


export default Views
