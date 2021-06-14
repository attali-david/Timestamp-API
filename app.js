const express = require('express')
const app = express()

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'))

//routes home
app.get('/', (req, res)=>{
	res.send()
})

//routes valid andi invalid date parameters
app.get('/api/:date', (req, res)=>{
	const time = new Date(req.params.date)

	console.log(new Date())
	if (time.getTime() !== time.getTime()) {
		res.json({error: "Invalid Date"})
	}
	else if (time.getTime() == time.getTime()) {
		res.json({unix: time.getTime(), utc: time.toUTCString()})
	} 
})

//routes empty date string
app.get('/api', (req, res) =>{
	const timeNow = new Date()
	res.json({unix: timeNow.getTime(), utc: timeNow.toUTCString()})
})

app.listen(5000,()=>{
	console.log("Server is listening on port 5000")
})


//Thu, 01 Jan 1970 00:00:00 GMT
//   Math.floor(new Date().getTime() / 1000)

//new Date(req.params.date) => returns date given unix
