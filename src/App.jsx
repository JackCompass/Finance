import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Transfer from './components/Transfer';
import Views from './components/Views';
import './App.css';
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import { db } from './firebase';

function App() {

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

		return () => {

		}
	}, [])


	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' />
					<Route exact path = '/view'>
						<Views 
							data = {data}
						/>
					</Route>
					<Route exact path = '/transfer'>
						<Transfer 
							data = {data}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
