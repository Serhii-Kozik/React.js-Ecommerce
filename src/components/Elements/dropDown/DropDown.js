import { h, Component } from 'preact';
import cn from 'classnames';
import s from './dropdownStyle.less';

class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}

	toggleDropDown = () => {
		this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
	};

	render({ className, children, items }) {
		const { isOpen } = this.state;
		return (
			<div className={cn(s.dropDownContainer, className)}
					 tabIndex="0"
					 onBlur={this.toggleDropDown}
					 onFocus={this.toggleDropDown}>
				{children}
				{
					isOpen
					&& <div className={s.commonDropDown}>
						{items.map(({ text }, i) => <div key={i}>{text}</div>)}
					</div>
				}
			</div>
		);
	}
}

export default DropDown;
