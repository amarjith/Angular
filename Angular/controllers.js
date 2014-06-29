function HelloController($scope){
	$scope.greeting = {text:'Heloo'};
}

function CartController($scope){
	$scope.items =[
		{title:'Rice', quantity:8,price:3.2},
		{title:'Milk', quantity:2,price:8.2},
		{title:'Soap', quantity:3,price:4.5},
		{title:'Butter', quantity:7,price:23.2}
	]
	
	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}
}