import { elements } from './base';
import '../../css/cards.css';
import miniCityImage from '../../img/mini-city.png';
import { weatherIcon } from '../utilites/utilities';

const CardView = (item, tempUnit, index) => {
	let tempUnitChar = '&deg;C'

	const markup = `
		<li class="card" data-element="${index}">
			<div class="cardInfo">
				<h5 class="cardInfo__day">${item.day}</h5>
				<h3 class="cardInfo__temp">${item.temp} ${tempUnitChar}</h3>
			</div>
			<div class="cardImg">
				<img class="cardImg__type" src=${weatherIcon(item.type)} alt="Weather type" />
				<img class="cardImg__city" src=${miniCityImage} alt="Icon city" />
			</div>
		</li>
	`;

	elements.cardList.insertAdjacentHTML('beforeend', markup);
}

export default CardView;

export const updateCardTemperature = ({node, temp, tempUnit = 'celsius'}) => {
	let newTemp;
	let tempUnitChar = '°C'

	if(tempUnit === 'kelvin'){
		{
			newTemp = temp + 273.15;
			tempUnitChar = 'K'
		}
	} else {
		newTemp = temp;
		tempUnitChar = '°C'
	}

	node.textContent = `${newTemp} ${tempUnitChar}`
}