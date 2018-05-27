import { h, Component } from 'preact';
import { inject, observer } from 'mobx-preact';
import s from './style.less';
import { post, get } from '../../functions/fetch';
import { setUserStore } from '../../App';

export const fetchUserData = async (userStore) => {
	if(!userStore.fetchingUserData) {
		setUserStore({fetchingUserData: true});

		const result = await get('/user/profile');
		console.log("fetchUserData: ", result)
		setUserStore(result);

		return true;
	}
}

const logout = () => {
	localStorage.removeItem('token');
	setUserStore({});
}

const LoggedIn = ({userStore = {} }) => (
	<div>
		<p>Logged in as {userStore.name}</p>
		<p>
			<div style={{color: 'gray', fontWeight: 'bold'}} onClick={logout}>Logout</div>
		</p>
	</div>
)


@inject('userStore') @observer
class LoginBox extends Component {
	state = {}
	constructor(props) {
		super(props);

		this.submit = async (e) => {
			e.preventDefault();
			const data = {
				email: this.state.email,
				password: this.state.password,
			};
			const res = await post(`/user/login`, data);
			if (res.loggedInSuccessful) {
				localStorage.setItem("token", res.jwt);

				fetchUserData(this.props.userStore.store);

			}
		};
	}
	render ({userStore},{email = '', password = ''}) {

		return (
			<div>
				{userStore.store.id ? LoggedIn({userStore: userStore.store}) :
					(
						userStore.store.fetchingUserData ? <p>Logged in!</p> :
							<form onSubmit={this.submit}>
								<p className={s.layout}>
									<p><input type={`email`} value={email} onInput={e => this.setState({email: e.target.value})} className={s.inputGroup} placeholder={'Happy Interior'} size={35} style={{ marginTop: 57 }} /></p>
									<p><input type={`password`} value={password} onInput={e => this.setState({password: e.target.value})} className={s.inputGroup} placeholder={'Password'} size={35} /></p>
									<p>
										<button onClick={this.submit} className={s.loginButton}>Login</button>
										<input type={`submit`} style={{display: 'none'}}/>
									</p>
								</p>
							</form>
					)
				}
				{JSON.stringify(userStore.store)}
			</div>
		);
	}
}

export default LoginBox;
