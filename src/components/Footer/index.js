import { h, Component } from 'preact';
import s from './style.less';
import icon1 from './images/1.png';
import icon2 from './images/2.png';
import icon3 from './images/3.png';
import icon4 from './images/4.png';

class Footer extends Component {
	render() {
		return (
			<div className={s.footerContainer}>
				<div className={s.imageRow}>
					<img src={icon1} alt=""/>
					<img src={icon2} alt=""/>
					<img src={icon3} alt=""/>
					<img src={icon4} alt=""/>
				</div>
				<div className={s.linksRow}>
					<div>Audio Description</div>
					<div>Help Center</div>
					<div>Media Center</div>
					<div>Jobs</div>
					<div>Terms of Use</div>
					<div>Privacy</div>
				</div>
				<div className={s.serviceBtn}>
					<button>Service Code</button>
				</div>
				<div className={s.copyRightText}>© 1997-2018 METRO, Inc.</div>
			</div>
		);
	}
}

export default Footer;
