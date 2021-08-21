import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
	heading : {
		// border: '2px solid red',
		textAlign: 'center',
		margin: '5px 0',
		padding: '5px 0',
		backgroundImage : 'linear-gradient(to bottom right, #E3E8E9, #E9EAEC)',
	},
	imageContainer : {
		width : '100%',
		height: '82.2vh',
		textAlign : 'center',
		backgroundImage : 'linear-gradient(to bottom right, #E3E8E9, #E9EAEC)',
	},
	image : {
		objectFit : 'cover',
		width: 'inherit',
		height: 'inherit',
		position:'relative',
	}

})

function Home() {
	const classes = useStyles();
	return (
		<>
			<div className={classes.heading}>
				<Typography variant="h3">Welcome to Finance Bank</Typography>
			</div>
			<div className={classes.imageContainer}>
				<img className={classes.image} src="./Finance/bank.jpg" alt="bank-image" />
			</div>
		</>
	)
}

export default Home
