const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const getRandomCoord = (min, max) =>
	(Math.random() * (max - min) + min).toFixed(6);

const generateTruckData = () => {
	const trucks = [];
	for (let i = 1; i <= 5; i++) {
		const speed = Math.random() * 100;
		const coord = [
			parseFloat(getRandomCoord(50, 70)),
			parseFloat(getRandomCoord(50, 70)),
		];
		trucks.push({
			number: i.toString(),
			speed,
			coord,
		});
	}
	return { data: trucks };
};

app.get("/api/truck-data", (req, res) => {
	res.json(generateTruckData());
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
