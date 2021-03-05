import { elements } from './base';
import classnames from 'classnames';
import arrow from '../../img/arrow.png';
import '../../css/widget.css';
import { weatherIcon } from '../utilites/utilities';

export const WidgetView = (item, tempUnit = "celsius") => {

	let tempUnitChar = '°C';

	if(tempUnit === 'kelvin'){
		{
			tempUnitChar = 'K'
		}
	} else {
		tempUnitChar = '°C'
	}

	const markup = `
		<div class="widgetTemp">
			<h5 class="widgetTemp__day">
				${item.day}
			</h5>
			<h5 class="widgetTemp__temp">
				${item.temp} ${tempUnitChar}
			</h5>
		</div>

		<div class="widgetWind">
			<h5 class="widgetWind__direction">Wind direction: ${item.windDirection}</h5>
			<h5 class="widgetWind__speed">Wind speed: ${item.windSpeed}m/s</h5>
			<div class="widgetWind__arrow">
				<img
					src=${arrow}
					alt='arrow'
					class='${classnames({
						"wind-NE": item.windDirection === "north-east",
						"wind-NW": item.windDirection === "north-west",
						"wind-N": item.windDirection === "north",
						"wind-SE": item.windDirection === "south-east",
						"wind-SW": item.windDirection === "south-west",
						"wind-S": item.windDirection === "south",
						"wind-E": item.windDirection === "east",
						"wind-W": item.windDirection === "west",
					})}'
				/>
			</div>
		</div>

		<div class="widgetWeatherType">
			<h5 class="widgetWeatherType__type">${item.type}</h5>
			<img class="widgetWeatherType__icon" src="${weatherIcon(item.type)}">
		</div>`;

	elements.widget.insertAdjacentHTML('beforeend', markup);
}

export const updateWidgetView = (item, tempUnit) => {
	let newTemperature = {...item};

	if(tempUnit === 'kelvin'){
		{
			newTemperature.temp = item.temp + 273.15;
		}
	} else {
		newTemperature.temp = item.temp;
	}

	document.querySelector('.widgetInfo').innerHTML = '';
	WidgetView(newTemperature, tempUnit);
}