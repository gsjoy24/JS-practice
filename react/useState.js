const [count, setCount] = useState(0);

function handleCountIn() {
	newCount = count + 1;
	setCount(newCount);
}
function handleCountDec() {
	newCount = count - 1;
	setCount(newCount);
}

function counter() {
	return (
		<div className='counter'>
			<h2>count:{count}</h2>
			<button onClick={handleCountIn}>Increase</button>
			<button onClick={handleCountDec}>Decrease</button>
		</div>
	);
}
