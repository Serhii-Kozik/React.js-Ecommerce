import { h, Component } from 'preact';
import { Link } from 'preact-router';
import cn from 'classnames';
import itemS from '../MainScreen/style.less';
import s from './style.less';

class Item extends Component {
	render() {
		const { image, title, isHotProduct } = this.props;
		return (
			<Link href={`/`}
						className={cn(itemS.item, s.secondaryItem)}
						style={isHotProduct
							? { backgroundImage: `url(${image})`, height: '365px' }
							: undefined}>
				{
					!isHotProduct && <img src={image} alt="" className={itemS.imageContainer}/>
				}
				{title && <div className={itemS.itemTitle}>{title}</div>}
			</Link>
		);
	}
}

export default Item;
