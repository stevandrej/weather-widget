import { elements } from './base';

export const WidgetView = item => {
	console.log(item);
	const markup = `
		<div class="widgetTemp">
			<div class="widgetTemp__day">
				${item.day}
			</div>
			<div class="widgetTemp__temp">
				${item.temp} C
			</div>
		</div>

		<div class="widgetWind">
			<div class="widgetWind__direction">Wind direction: ${item.windDirection}</div>
			<div class="widgetWind__speed">Wind speed: ${item.windSpeed}m/s</div>
			<div class="widgetWind__arrow">ARROW Here</div>
		</div>

		<div class="widgetWeatherType">
			<div class="widgetWeatherType__type">${item.type}</div>
			<div class="widgetWeatherType__icon">SUN ICON</div>
		</div>`;

		elements.widget.insertAdjacentHTML('beforeend', markup);
}

export const updateWidgetView = (item) => {
	document.querySelector('.widgetInfo').innerHTML = '';
 	WidgetView(item);
}