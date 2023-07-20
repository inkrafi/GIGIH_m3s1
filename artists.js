const artists =
[
	{
		name: "Bruno Mars",
		dateOfBirth: new Date("<1985-10-08>"),
        genres: ["Pop", "Hip Hop", "R&B", "Soul"]
	},
	{
		name: "Afgan",
		dateOfBirth: new Date("<1989-05-27>"),
        genres: ["Pop", "R&B", "Soul"]
	},
	{
		name: "Taylor Swift",
		dateOfBirth: new Date("<1989-12-13>"),
        genres: ["Pop", "Country", "Rock", "Synth-pop"]
	},
	{
		name: "Shawn Mendes",
		dateOfBirth: new Date("<1998-08-08>"),
        genres: ["Pop", "Folk Pop", "Pop Rock"]
	},
	{
		name: "Ariana Grande",
		dateOfBirth: new Date("<1993-06-26>"),
        genres: ["R&B", "Pop"]
	},
	{
		name: "Harry Styles",
		dateOfBirth: new Date("<1994-02-01>"),
        genres:["Soft Rock", "Rock", "Britpop"]
	},
	{
		name: "Demi Lovato",
		dateOfBirth: new Date("<1992-08-20>"),
        genres:["Pop", "Pop Rock", "R&B"]
	},
	{
		name: "Adele",
		dateOfBirth: new Date("<1994-02-01>"),
        genres:["Pop", "Soul", "R&B"]
	},
	{
		name: "Lady Gaga",
		dateOfBirth: new Date("<1986-03-28>"),
        genres:["Pop", "Dance", "Elektronik"]
	},
	{
		name: "SZA",
		dateOfBirth: new Date("<1990-11-08>"),
        genres:["R&B alternatif", "Neo Soul", "R&B"]
	},
];

db.artists.insertOne(artists)
