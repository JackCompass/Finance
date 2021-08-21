import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, TextField, Typography } from '@material-ui/core';
import { db } from '../firebase';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	transactionForm: {
		// border: '2px solid green',
		marginTop: '50px',
		maxWidth: '500px',
		height: '500px',
		textAlign: 'center',
		backgroundImage: 'linear-gradient(to bottom right, #E3E8E9, #E9EAEC)',
		margin: '0 auto',
		padding: '5px 5px',
	},
	heading: {
		// border: '2px solid red',
		height: '100px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
	},
	customers: {
		// border: '2px solid blue',
		height: '200px',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		// textAlign: 'center',
		// alignItems: 'center',
	},
	transactionAmount: {
		// border : '2px solid yellow',
		height: '100px',
		width: '100%',
		display: 'flex',
		marginTop: '5px',
		padding: '0 5px',

	}
}));

const Transfer = ({data,}) => {
	const classes = useStyles();
	const [sender, setSender] = useState(null);
	const [receiver, setReceiver] = useState(null);
	const [amount, setAmount] = useState(0);

	const handleSender = (event) => {
		setSender(event.target.value);
	}

	const handleReceiver = (event) => {
		setReceiver(event.target.value);
	}

	const handleAmount = (event) => {
		const val = event.target.value;
		if (!isNaN(val)) {
			setAmount(val);
		}
	}

	const transferFund = () => {
		console.log('I am here')
		db.ref('users/').get().then( (snapshot) => {
			snapshot.forEach( element => {
				if (element.val().UserId === sender) {
					let bal = Number(element.val().CurrentBalance) - Number(amount);
					db.ref('users/').child(element.key).update({
						CurrentBalance : bal,
					})
				}
				if (element.val().UserId === receiver) {
					let bal = Number(element.val().CurrentBalance) + Number(amount);
					console.log(typeof(amount));
					console.log(bal);
					db.ref('users/').child(element.key).update({
						CurrentBalance : bal,
					})
				}
			});
		})
		setSender(null);
		setReceiver(null);
		setAmount(0);
	}

	

	return (
		<div>
			<form action="" className={classes.transactionForm}>
				<div className={classes.heading}>
					<Typography variant="h3">Transaction</Typography>
				</div>
				<div className={classes.customers}>
					<FormControl className={classes.formControl}>
						<InputLabel id="sender-select-label">Sender</InputLabel>
						<Select
							labelId="sender-select-label"
							id="sender-select"
							value={sender? sender : null}
							onChange={handleSender}
						>
							{data.map(item => {
								return <MenuItem value={item.UserId}>{item.AccountHolder}</MenuItem>
							})}
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="receiver-select-label">Receiver</InputLabel>
						<Select
							labelId="receiver-select-label"
							id="receiver-select"
							value={receiver? receiver : null}
							onChange={handleReceiver}
						>
							{data.map(item => {
								return <MenuItem value={item.UserId}>{item.AccountHolder}</MenuItem>
							})}
						</Select>
					</FormControl>
				</div>
				<div className={classes.transactionAmount}>
					<TextField id="standard-basic" label="Amount" value={amount} onChange={handleAmount} />
				</div>
				{
					amount > 0 && sender && receiver?
						<Button className={classes.confirmTransaction} variant="contained" color="primary" onClick={transferFund}>Transfer</Button> : ''
				}

			</form>
		</div>
	);
}

export default Transfer;