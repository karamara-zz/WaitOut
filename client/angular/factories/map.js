  	waitOutModule.factory('mapFactory',['$http', function($http){
  		console.log("loading factory")
      var factory = {};
      var self = factory
      factory.cDuration = 0;
      factory.requestingDirection ={}

  		factory.getLocation= function(callback){
  			if (navigator.geolocation){
          var options = {
            timeout: 5000,
            maximumAge: 0
          };
  			function showPosition(position){
          self.location = position;
          console.log(self.location)
          callback(position)
  			}
          function error() {
            alert("Unable to retrieve your location");
          };
          navigator.geolocation.getCurrentPosition(showPosition,error, options);
        } else {
          html+"geolocation is not supported by this browser"
        }
  		}
  		factory.getPosition = function(callback){
  			callback(students)
  		}
      factory.getDirection=function(data, callback){
        self.requestingDirection.start = data.start;
        self.requestingDirection.end = data.end;
        self.requestingDirection.target = Number(data.target)*60;
        $http.post('/direction', self.requestingDirection).success(function(directionData){
          console.log("data from backend to factory", directionData.routes[0].legs[0])
          var duration = directionData.routes[0].legs[0].duration_in_traffic
          // var durationStrNum = ""
          // for(var idx = 0; idx<duration.length;idx++){
          //   if (duration[idx].match(/[0-9]/)){
          //     durationStrNum+= duration[idx];
          //   }
          // }
          var result = false;
          console.log("duration in traffic", duration)
          self.cDuration = duration
          self.duration_without_traffic = directionData.routes[0].legs[0].duration.text
          if (self.cDuration.value < self.requestingDirection.target){
            console.log("result turns true here ",self.cDuration.value, self.requestingDirection.target)
            result = true;
          }
          var data = {
            duration_without_traffic: self.duration_without_traffic,
            cDuration: self.cDuration,
            result : result
          }
          callback(data)
        });
        console.log(self.cDuration.text)
      }
      factory.increaseCounter = function(){
          $http.put('/counter');
      }
      factory.showCounter = function(callback){
        $http.get('/counter').success(function(data){
          var total = 0;
          for (item in data) {
            total += data[item].counter;
          }
          data.total = total;
          callback(data);
        })

      }
  		return factory
  	}])