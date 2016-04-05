  	waitOutModule.factory('counterFactory',['$http', function($http){
  		console.log("loading factory")

      var factory = {};
      factory.counter = function(){
        $http.post('https://counter-by-site.herokuapp.com/counter',{site:'WaitOut'}).success(function(data){
          console.log(data)
        })
      }
  		return factory
  	}])