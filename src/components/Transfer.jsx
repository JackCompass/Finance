import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	transactionForm: {
		border: '2px solid red',
		width: '50%',
		textAlign: 'center',
		margin: '0 auto',
	},
}));

const Transfer = ({ data }) => {
	const classes = useStyles();
	const [sender, setSender] = React.useState('');
	const [receiver, setReceiver] = React.useState('');

	const handleSender = (event) => {
		setSender(event.target.value);
	}

	const handleReceiver = (event) => {
		setReceiver(event.target.value);
	}

	return (
		<div>
			<form action="" className={classes.transactionForm}>
				<div className={classes.heading}>
					<Typography variant="h6">This is a transaction form</Typography>
				</div>
				<div className={classes.customers}>
					<FormControl className={classes.formControl}>
						<InputLabel id="sender-select-label">Sender</InputLabel>
						<Select
							labelId="sender-select-label"
							id="sender-select"
							value={sender}
							onChange={handleSender}
						>
							{data.map(item => {
								return <MenuItem value={item['User Id']}>{item['Account Holder']}</MenuItem>
							})}
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="receiver-select-label">Receiver</InputLabel>
						<Select
							labelId="receiver-select-label"
							id="receiver-select"
							value={receiver}
							onChange={handleReceiver}
						>
						{ data.map( item => {
							return <MenuItem value={item['User Id']}>{item['Account Holder']}</MenuItem>
						})}
						</Select>
					</FormControl>
				</div>
				<TextField id="filled-basic" label="Amount" variant="filled" /> <br />
				<Button variant="contained" color="primary" href="#contained-buttons">
					Transfer
				</Button>
			</form>
		</div>
	);
}

export default Transfer;