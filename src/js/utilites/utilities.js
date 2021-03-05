import sunny from '../../img/sun.png';
import rainy from '../../img/rainy.png';
import cloudy from '../../img/cloudy.png';

export const weatherIcon = (weatherType) => {
	switch (weatherType) {
		case 'sunny':
			return sunny;
		case 'rainy':
			return rainy;
		case 'cloudy':
			return cloudy;
		default:
			return sunny;
	}
}