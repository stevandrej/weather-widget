import CardView, { updateCardTemperature } from './views/CardView';
import { WidgetView, updateWidgetView } from './views/WidgetView';
import { elements } from './views/base';
import '../css/style.css';

const state = {
	selectedItem: "0",
	weatherData: [],
	temp: 'celsius',
	wind: 'ms'
}

//GET JSON
const getData = async () => (
	await fetch('./data.json')
		.then(response => response.json())
		.then(data => state.weatherData = { ...data.weatherData })
		.catch(error => console.log(error))
);

//-----------------------------------------------------------

//CARDS LIST CONTROLLER
const cardListController = () => {
	//Render cards
	state.weatherData.days.map((item, index) => CardView(item, state.temp, index));

	//Add OnClick eventListener
	document.querySelectorAll('.card').forEach(item => item.addEventListener('click', e => {
		state.selectedItem = e.currentTarget.getAttribute('data-element');
		updateWidgetView(state.weatherData.days[state.selectedItem], state.temp);
	}))
}

//------------------------------------------------------------

//WIDGET CONTROLLER
const widgetController = (forecastDay) => {
	WidgetView(forecastDay)
}

//-------------------------------------------------------------

//BUTTONS CONTROLLER

const buttonsSettings = () => {


	elements.btnTemp.addEventListener('click', () => {
		if (state.temp === 'celsius')
			state.temp = 'kelvin';
		else state.temp = 'celsius';

		document.querySelectorAll('.cardInfo__temp').forEach((node, index) => {
			updateCardTemperature({
				node: node,
				temp: state.weatherData.days[index].temp,
				tempUnit: state.temp
			})
		})

		updateWidgetView(state.weatherData.days[state.selectedItem], state.temp);
	})
}
//-------------------------------------------------------------

window.addEventListener('load', async () => {
	await getData();
	buttonsSettings();

	//RENDER CARDS LIST
	cardListController();

	// RENDER WIDGET
	widgetController(state.weatherData.days[state.selectedItem]);

})