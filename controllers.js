function HelloController($scope){
	$scope.greeting = {text:'Heloo'};
}

function CartController($scope){
	$scope.bill ={};

	$scope.items =[
		{title:'Rice', quantity:8,price:3.2},
		{title:'Milk', quantity:2,price:8.2},
		{title:'Soap', quantity:3,price:4.5},
		{title:'Butter', quantity:7,price:23.2}
	];
	
	$scope.totalCart = function(){
		var total = 0;
		for(var i=0;i<$scope.items.length;i++){
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}
		
		return total;
	}
	
	$scope.subtotal = function(){
		return $scope.totalCart() - $scope.bill.discount;
	}
	
	function caluculateDiscount(newValue, oldValue,scope){
		console.log("newValue"+newValue+"\n oldValue "+oldValue);
		$scope.bill.discount = newValue > 100 ? 10 : 0;
	}
	
	$scope.$watch($scope.totalCart,caluculateDiscount);
	
	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}
}

function Cart2Controller($scope){

	$scope.bill ={};
	
		$scope.items =[
		{title:'Rice', quantity:8,price:3.2},
		{title:'Milk', quantity:2,price:8.2},
		{title:'Soap', quantity:3,price:4.5},
		{title:'Butter', quantity:7,price:23.2}
		];
	
	var claculteTotal = function(){
		var total = 0;
		for(var i=0;i< $scope.items.length;i++){
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}
		
		$scope.bill.total = total;
		$scope.bill.discount = total > 100 ? 10 : 0;
		$scope.bill.subtotal = total - $scope.bill.discount;
		
		
	};
	  $scope.$watch('items', claculteTotal,true);
}