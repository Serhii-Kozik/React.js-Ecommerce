import { h, Component } from 'preact';
import { observable } from "mobx";
import { Provider } from "mobx-preact";
import ItemZoom from './components/ItemZoom';
import Index from './components/Index';
import LiveChat from './components/LiveChat';
import Header from './components/Header';
import './App.css';
import {Router} from 'preact-router';



let liveChat = observable({store: {live: false}});
export const setLiveChat = (data) => liveChat.store = data;


class App extends Component {
	render () {
		return (
			<Provider liveChat={liveChat}>
				<div>
					<Header />
					<Router>
						<Index path={'/'} />
						<ItemZoom path={`/item/:id`} />
					</Router>
					<LiveChat />
				</div>
			</Provider>
		);
	}
}

export default App;
