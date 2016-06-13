var bdnews=angular.module('bdnews',['ngAnimate','ngRoute'])
bdnews.controller('indexCtrl',['$scope',function($scope){
  if(localStorage.newx){
    $scope.isFirstOpen = false;
  }else{
    $scope.isFirstOpen = true;
  }
  $scope.enter=function(){
    localStorage.newx=true;
    $scope.isFirstOpen=false;
  }
  $scope.title="推荐";
}])

bdnews.directive('bdYindao',function(){
  return {
    restrict:'E',
    templateUrl:'views/directive/yindao.html',
  }
})

bdnews.directive('bdHeader',function(){
  return {
    restrict:'E',
    templateUrl:'views/directive/header.html',
  }
})
bdnews.directive('bdFooter',function(){
  return {
    restrict:'E',
    templateUrl:'views/directive/footer.html',
  }
})

bdnews.controller('tuijianCtrl',['$scope',function($scope){
   $scope.lists=[
      {content:'为啥每次公布工资我都拖后腿？我终于知道原因了',image:'images/t001.png',img:'images/d001.png'},
      {content:'2016年高考分数线预测，2012-1015年各省录取分数线',image:'images/t002.png'},
      {content:'法国VS罗马尼亚，一起欧洲杯，从此日夜不分',image:'images/t003.png'},
      {content:'他从保安成央视著名主持人，因说真话被雪藏，辞职后从头再来！',image:'images/t004.png'},
      {content:'娱乐圈大腕成龙、章子怡、张柏芝、林志玲，为何都爱赵本山？',image:'images/t005.png'},
      {content:'娱乐圈大腕成龙、章子怡、张柏芝、林志玲，为何都爱赵本山？',image:'images/t005.png'}
   ]
}])

bdnews.controller('hotCtrl',['$scope',function($scope){
   $scope.lists=[
      {content:'为啥每次公布工资我都拖后腿？我终于知道原因了',image:'images/t01.png'},
      {content:'2016年高考分数线预测，2012-1015年各省录取分数线',image:'images/t02.png'},
      {content:'法国VS罗马尼亚，一起欧洲杯，从此日夜不分',image:'images/t03.png'},
      {content:'他从保安成央视著名主持人，因说真话被雪藏，辞职后从头再来！',image:'images/t03.png'},
      {content:'娱乐圈大腕成龙、章子怡、张柏芝、林志玲，为何都爱赵本山？',image:'images/t01.png'},
      {content:'娱乐圈大腕成龙、章子怡、张柏芝、林志玲，为何都爱赵本山？',image:'images/t02.png'}
   ]
}])

bdnews.controller('huatiCtrl',['$scope',function($scope){
   $scope.lists=[
      {title:'#情感美文',content:'重感情的人，上的最深我容易满足，更容易受伤，总有一种被忽视的感觉，付出的远远超过得到的。我很固执，不懂得放弃，总是说着要离开，却一再为自己找不离开的理由。我总是对别人。。。。',image:'images/z1.png'},
      {title:'#摄影',content:'2016年高考分数线预测，2012-1015年各省录取分数线',image:'images/t02.png'},
      {title:'#影视',content:'法国VS罗马尼亚，一起欧洲杯，从此日夜不分',image:'images/t03.png'}
   ]
}])

bdnews.controller('woCtrl',['$scope',function($scope){

}])
bdnews.controller('shipinCtrl',['$scope',function($scope){

}])

bdnews.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'tuijianCtrl',
    templateUrl:'views/templates/tuijian.html',
  }).when('/tuijian',{
    controller:'tuijianCtrl',
    templateUrl:'views/templates/tuijian.html',
  }).when('/hot',{
    controller:'hotCtrl',
    templateUrl:'views/templates/hot.html',
  }).when('/keji',{
    controller:'kejiCtrl',
    templateUrl:'views/templates/keji.html',
  }).when('/shipin',{
    controller:'shipinCtrl',
    templateUrl:'views/templates/shipin.html',
  }).when('/shehui',{
    controller:'shehuiCtrl',
    templateUrl:'views/templates/shehui.html',
  }).when('/wo',{
    controller:'woCtrl',
    templateUrl:'views/templates/wo.html',
  }).when('/huati',{
    controller:'huatiCtrl',
    templateUrl:'views/templates/huati.html',
  }).when('/shouye',{
    controller:'shouyeCtrl',
    templateUrl:'views/templates/shouye.html'
  })
}])
