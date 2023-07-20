const popularSongs =
[
	{
		title: "Komang",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Sial",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Angels Like You",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Secrets",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Rayuan Perempuan Gila",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Trauma",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Jiwa Yang Bersedih",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Tertawan Hati",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
	{
		title: "Drip",
		timesPlayed: Math.floor(Math.random() * 10000),
		periode: Math.floor(Math.random() * 10) + 1
	},
];

db.popularSongs.insertOne(popularSongs)