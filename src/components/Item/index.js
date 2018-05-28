import { h, Component } from 'preact';
import { Link } from 'preact-router';
import cn from 'classnames';
import itemS from '../MainScreen/style.less';
import s from './style.less';
import like from './images/like.png';
import dislike from './images/dislike.png';
import star from './images/star.png';
import online from './images/online.png';

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = { isHovered: false };
	}

	onMouseOver = () => {
		this.setState({ isHovered: true });
		console.log('onMouseOver');
	}

	onMouseOut = () => {
		this.setState({ isHovered: false });
		console.log('onMouseOut');
	}

	render() {
		const { image, title, isHotProduct, info, price } = this.props;
		return (
			<Link href={`/`}
						className={cn(itemS.item, s.secondaryItem)}
						style={isHotProduct
							? { backgroundImage: `url(${image})`, height: '365px' }
							: undefined}>
				{ !isHotProduct &&
					<div className={cn(itemS.imageContainer, s.layout)} style={{ backgroundImage: `url(${image})`, width: '285px', height: '162px' }} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
						{ this.state.isHovered &&
							<div>
								<div className={s.first}>
									<div className={s.info}>
										<div className={s.text}>{info}</div>
										<div className={s.text}>{price}</div>
									</div>
									<div className={s.mark}>
										<img src={like} width={25} height={25} style={{ marginBottom: '5px' }} />
										<img src={dislike} width={25} height={25} style={{ marginBottom: '5px' }} />
										<img src={star} width={25} height={25} style={{ marginBottom: '5px' }} />
									</div>
								</div>
								<div className={s.second}>
									<div style={{ width: '50%', textAlign: 'right' }}>
										<i className={s.downarrow}></i>
									</div>
									<div style={{ width: '45%', textAlign: 'right', color: 'white', display: 'flex', justifyContent: 'flex-end' }}>
										<img src={online} width={25} height={25} />
										<div style={{ marginTop: '4px' }}>Online</div>
									</div>
								</div>
							</div>
						}
					</div>
				}
				{title && <div className={itemS.itemTitle}>{title}</div>}
			</Link>
		);
	}
}

export default Item;
