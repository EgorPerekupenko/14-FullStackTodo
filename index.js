var app = angular.module("app", []);

app.controller("ListController", function($scope) {

	//empty array so I have something to actually push/unshift into
    $scope.todos = [];


    //populating the select priority options
    $scope.options = [{
        "priority": "A low priority item",
        "value": "green",
        "number": "1",
    }, {
        "priority": "A medium priority item",
        "value": "yellow",
        "number": "2",
    }, {
        "priority": "A high priority item",
        "value": "red",
        "number": "3",
    }];


    //what happens when the "add todo" button is pressed!
    $scope.addNewToDo = function(toDo) {
        var todo = { 
        	"newtask": $scope.newtext, 
        	"value": $scope.selectedOption.value, 
        	"number": $scope.selectedOption.number};
        $scope.todos.unshift(todo);
        //clears the form
        $scope.newtext=null;
    };

    //I was originally going to place a conditional statement for text input being empty, but maybe some people would like to do that then edit later

    //chop chop
    $scope.removeItem = function(todo, $index) {
        $scope.todos.splice($index, 1);
    };

});