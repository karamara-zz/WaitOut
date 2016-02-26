var request = require('request')
module.exports = (function(){
	return {
		getDirection: function(req, res){
			console.log(req.body, "session", req.session)
			var reqStr= "https://maps.googleapis.com/maps/api/directions/json?origin="+req.body.start+"&destination="+req.body.end+"&traffic_model=best_guess&departure_time=now&key=AIzaSyC5km2U4XM2_iLX8utCK24s3R0PBx0XR2Q"

			console.log(reqStr)
			request({
			    method: 'GET',
			    url: reqStr,
			    headers: {
			        'content-type': 'application/json',
			    },
			    // alternatively pass an object containing additional options

			  },
			  function (error, response, body) {
			    if (error) {
			    	return error
			      // return console.error('upload failed:', error);
			    }

			    console.log('Upload successful!  Server responded with:', typeof(body));
			    var jsonBody = JSON.parse(body)
			 //    if (jsonBody.status == "OK"){
				//     console.log(jsonBody.routes[0].legs[0].duration)
				//     jsonBody = jsonBody.routes[0].legs[0].duration
				// }
			    res.json(jsonBody)
			  })
		}
	}
})()