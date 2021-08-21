import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Transfer from './components/Transfer';
import Views from './components/Views';
import './App.css';


import Navbar from './components/Navbar'
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' />
					<Route exact path='/view' component={Views} />
					<Route exact path='/transfer' component={Transfer}/>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
