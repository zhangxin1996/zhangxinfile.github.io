var app1 = angular.module("myApp");
app1.controller("brandController",function($scope,$sce){
	$scope.yanse={"color":"red"};
	$scope.yanse2={
		"color":"#bdbdbd",
		"font-style":"italic",
		"font-weight":"bold"
	};
	$scope.yanse3={
		"color":"#bdbdbd"
	};
	
  
	$scope.chongfu=[
		{"one":"img/相机.png","two":"拍摄不满意<span style='color:red;'>无条件</span>重拍"},
		{"one":"img/退款.png","two":"重拍不满意<span style='color:red;'>无条件</span>退款"},
		{"one":"img/工具.png","two":"拍摄前可<span style='color:red;'>更改</span>套餐"},
		{"one":"img/多对一.png","two":"全程<span style='color:red;'>多对一</span>管家模式服务"},
		{"one":"img/消费.png","two":"承诺全程<span style='color:red;'>无隐形消费</span>"},
		{"one":"img/房子.png","two":"到店不满意<span style='color:red;'>无条件</span>退换定金"}
	]
	
	$($scope.chongfu).each(function(index) {
		$scope.chongfu[index].two = $sce.trustAsHtml($scope.chongfu[index].two);
	});
	
	$scope.liyou=[
		{"one":"img/16.png","two":"品牌连锁直营店16家"},
		{"one":"img/基地.png","two":"拥有6大摄影基地"},
		{"one":"img/消费费.png","two":"拍摄过程无任何隐形消费"},
		{"one":"img/电话.png","two":"CED直通车投诉电话"},
		{"one":"img/保障.png","two":"婚纱摄影著名商标保障"},
		{"one":"img/人人.png","two":"全程管家式贴心服务"},
		{"one":"img/维修.png","two":"产品十年保修终身维修"},
		{"one":"img/底片.png","two":"拍摄底片全送一张不留"},
		{"one":"img/三人.png","two":"20年品牌缔造百万新人见证"},
		{"one":"img/海岛.png","two":"专注旅游度假拍摄的婚纱摄影公司"}
	]
});
