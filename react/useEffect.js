// useEffect usually work to load data from the server.

function AllUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('http://localhost.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<ul>
				{users.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
