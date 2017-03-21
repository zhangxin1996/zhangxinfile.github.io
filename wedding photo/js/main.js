var app1 = angular.module("myApp");
app1.controller("mainController",function($scope){
	$scope.youshi=[
		{"one":"#48538b","two":"品牌简介","three":"Brand Profile"},
		{"one":"#aa4763","two":"米兰的6大保障","three":"Six Safeguards In Milan"},
		{"one":"#424d85","two":"米兰客照欣赏","three":"Milan Guest Photos"},
		{"one":"#aa4648","two":"米兰天猫旗舰店","three":"Milan Tmall Flagship Store"},
		{"one":"#2e727f","two":"选择米兰的理由","three":"Reasons For Choosing Milan"},
		{"one":"#af4b4d","two":"米兰的官方微博","three":"Milan's Official Micro-blog"}
	]
	
	$scope.kejia=[
		{"one":"img/kepian0901.jpg","two":"09月第4周"},
		{"one":"img/kepian0902.jpg","two":"09月第3周"},
		{"one":"img/kepian0903.jpg","two":"09月第2周"},
		{"one":"img/kepian0904.jpg","two":"09月第1周"},
		{"one":"img/kepian0801.jpg","two":"08月第4周"},
		{"one":"img/kepian0802.jpg","two":"08月第3周"},
		{"one":"img/kepian0803.jpg","two":"08月第2周"},
		{"one":"img/kepian0804.jpg","two":"08月第1周"}
	]
	
	$scope.xinshang=[
		{"one":"img/2016072085956.jpg"},
		{"one":"img/2016072037965.jpg"},
		{"one":"img/2016072026105.jpg"},
		{"one":"img/2016072022950.jpg"},
		{"one":"img/2016072013751.jpg"},
		{"one":"img/2016072023118.jpg"},
		{"one":"img/2016072043414.jpg"},
		{"one":"img/2016072064062.jpg"}
	]
});

$(function(){
	$(".lvpai li").hover(
	  function(){
		var w = $(this).index();
		$(".lvpai li").not($(".lvpai li").eq(w)).css("opacity","0.3");
	},function(){
		var w = $(this).index();
		$(".lvpai li").not($(".lvpai li").eq(w)).css("opacity","1")
	});
});


