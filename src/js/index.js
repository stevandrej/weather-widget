import { CardView } from './views/CardView';
import { WidgetView, updateWidgetView } from './views/WidgetView';

import '../css/style.css';

const state = {
	selectedItem: "0",
	weatherData: []
}

//GET JSON
const getData = async () => (
	await fetch('./data.json')
		.then(response => response.json())
		.then(data => state.weatherData = {...data.weatherData})
		.catch(error => console.log(error))
);

//-----------------------------------------------------

//CARDS LIST CONTROLLER
const cardListController = () => {
	//Render cards
	state.weatherData.days.map((item, index) => CardView(item, index));

	//Add OnClick eventListener
	document.querySelectorAll('.card').forEach(item => item.addEventListener('click', e => {
		state.selectedItem = e.currentTarget.getAttribute('data-element');
		updateWidgetView(state.weatherData.days[state.selectedItem]);
	}))
}

//-------------------------------------------------------

//WIDGET CONTROLLER
const widgetController = (forecastDay) => {
	WidgetView(forecastDay)
}

//-------------------------------------------------------------

window.addEventListener('load', async () => {
	await getData();

	//RENDER CARDS LIST
	cardListController();

	// RENDER WIDGET
	widgetController(state.weatherData.days[state.selectedItem]);
})