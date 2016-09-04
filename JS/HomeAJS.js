/*
* Navigation Angular JS / JQUERY
* By : Tons-of-Carls
*/



var app = angular.module('Home', []);
app.controller('HomeCtrl', function($scope, $http) {

	$scope.message = {Title: "", Comment: ""};
	
	$scope.enc = function()
		{
			
			$scope.message.Title = btoa($scope.message.Title);
			$scope.message.Comment = btoa($scope.message.Comment);
			
		};
	//temp until i can get http.post to work
	$scope.submit = function()
		{
			$scope.enc();
			$scope.names.push($scope.message);
			$scope.message = {Title: "", Comment: ""};
		}
	
	
 	/*$scope.submit = function()
		{
			$scope.enc();
			$http.post("https://tons-of-carls.github.io/JS/test.php",$scope.message).success(function(data, status, header){
				$scope.callback = data;
				$scope.st = status;
				$scope.other = header;
			});
			
			$scope.message = {Title: "", Comment: ""};
		};*/

	//----------------------------Comments------------------------------
	
	
	$http.get("https://tons-of-carls.github.io/JS/test.php").success(
	function (response) 
	{
		$scope.names = response.posts;
	});


	
});


app.filter("dec", function(){
	return function(input)
	{
		return atob(input);
	};
});


