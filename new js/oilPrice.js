/*
379
7370
384
665
1, 1, 1
30, 20, 10
1,0,2
0,2,3
*/
function oilPrice(diesel, petrol, octane) {
	const dieselPrice = diesel * 114;
	const petrolPrice = petrol * 130;
	const octanePrice = octane * 135;

	const totalPrice = dieselPrice + petrolPrice + octanePrice;
	return totalPrice;
}
const price1 = oilPrice(1, 1, 1);
const price2 = oilPrice(30, 20, 10);
console.log(price1);
console.log(price2);
