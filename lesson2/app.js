var app = angular.module('myApp',[]);

//在失焦后显示验证信息
app.directive('ngFocus',[function(){
    var FOCUS_CLASS = 'ng-focused';
    return {
        restrict:'A',
        require:'ngModel',
        link: function (scope, element, attrs, ctrl){
            ctrl.$focused = false;
            element.bind('focus', function(evt){
                element.addClass(FOCUS_CLASS);
                scope.$apply(function(){
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt){
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function(){
                    ctrl.$focused = false;
                });
            });
        }
    };
}]);