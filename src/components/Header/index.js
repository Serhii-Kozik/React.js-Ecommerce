import { h, Component } from 'preact';
import { Link } from 'preact-router';
import s from './style.less';
import avatarUrl from './images/avatar.png';
import DropDown from '../Elements/dropDown/DropDown';

const browseItems = [
	{ text: 'Hot Products' },
	{ text: 'Phones' },
	{ text: 'Armchairs' },
];

const profileItems = [
	{ text: 'Profile' },
	{ text: 'Log Out' },
];

class Header extends Component {
	render() {
		return (
			<div className={s.headerBar}>
				<div className={s.headerContent}>
					<div className={s.section1}>
						<div className={s.logo}/>
					</div>

					<DropDown items={browseItems}>
						<div className={s.headerBrowse}>
							Browse
							<div className={s.triangleDown}/>
						</div>
					</DropDown>

					<Link href={`/`} className={s.section2}>
						Happy Interior
					</Link>
					<div className={s.section3}>
						<div className={s.searchContainer}>
							<div className={s.search}/>
							<div>Search</div>

						</div>
						<div className={s.bell}/>
						<div className={s.headerProfile}>
							<img src={avatarUrl} alt=""/>
							<DropDown items={profileItems}>
								<div className={s.profileName}>
									Eli
									<div className={s.triangleDown}/>
								</div>
							</DropDown>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
