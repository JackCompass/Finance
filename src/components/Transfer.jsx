import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const Transfer = () => {
	const classes = useStyles();
	const [sender, setSender] = React.useState('');
	const [receiver, setReceiver] = React.useState('');

	const handleSender = (event) => {
		setSender(event.target.value);
	};

	const handleReceiver = (event) => {
		setReceiver(event.target.value);
	}

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="sender-select-label">Sender</InputLabel>
				<Select
					labelId="sender-select-label"
					id="sender-select"
					value={sender}
					onChange={handleSender}
				>
					<MenuItem value={10}>Jack</MenuItem>
					<MenuItem value={20}>William</MenuItem>
					<MenuItem value={30}>Ronald</MenuItem>
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
					<MenuItem value={10}>Jackson</MenuItem>
					<MenuItem value={20}>Warner</MenuItem>
					<MenuItem value={30}>Prince</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default Transfer;