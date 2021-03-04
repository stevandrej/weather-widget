import { elements } from './base';
import sunImage from '../../img/sun.png';
import miniCityImage from '../../img/mini-city.png';

export const CardView = (item, index) => {
	const markup = `
		<li class="card" data-element="${index}">
			<div class="cardInfo">
				<h5 class="cardInfo__day">${item.day}</h5>
				<div class="cardInfo__temp">${item.temp} C</div>
			</div>
			<div class="cardImg">
				<img class="cardImg__type" src=${sunImage} alt="Weather type" />
				<img class="cardImg__city" src=${miniCityImage} alt="Icon city" />
			</div>
		</li>
	`;

	elements.cardList.insertAdjacentHTML('beforeend', markup);
}