import {h, Component} from "preact";
import s from './style.less';
import { get } from '../../functions/fetch';
import { inject, observer } from 'mobx-preact';
import isEmpty from 'lodash/isEmpty';
import has from 'lodash/has';
import map from "lodash/map";


const AddItem = (cb = () => {}) => {
	return (
		<div>Add item</div>
	)
}

const ItemList = (items = []) => {
	if(isEmpty(items)) return (
		<div>There are no items in this shop yet.</div>
	)
}

@inject('userStore') @observer
class Store extends Component {
	state = {}
	constructor(props) {
		super (props);

		this.loadStore = async(id) => {
			try {
				const result = await get(`/store/${id}`);
				this.setState({store: result});
			}
			catch (error) {
				this.setState({error});
			}
		}

		this.loadStore(this.props.id);
	}
	render({userStore}, {store = {}}) {

		const {id = 0} = this.props;
		if (!id) return "Whoops, this page does not exists"
		if (this.state.error) return this.state.error;

		const storeManager = has(userStore.store.userStores, id);
		console.log("storeManager", storeManager)

		if (store) return (
			<div>
				<h2>{store.name}</h2>
				{storeManager ? "You are a manager in this store" : ''}
				{storeManager && <AddItem onAdd={() => this.loadStore(id)}/>}
				<p>{JSON.stringify(store)}</p>
				{ItemList(store.items)}
				{/*{map(this.storeInfo(k).items, (iv, ik) => <div key={ik}>{JSON.stringify(iv)}</div>)}*/}
			</div>
		)

		return (
			<div>
				Loading
			</div>
		);
	}
}

export default Store;
