//search controller

(function() {
    'use strict';

    angular
        .module('toDoApp')
        .controller('toDoController', toDoController);

    //injecting movie factory to search controller
    toDoController.$inject = ['toDoFactory'];

    function toDoController(toDoFactory) {
        var vm = this;

        vm.options = [{
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

        activate();

        function activate() {
            toDoFactory.getToDo().then(
                function(todos) {
                    vm.todos = todos;
                    console.log(todos);
                },
                function(error) {}
            );
        }



        vm.addNewToDo = function() {
            vm.newToDo = {
                "newtext": vm.newtext,
                "value": vm.selectedOption.value,
                "number": vm.selectedOption.number
            };

            vm.saving = true;
            toDoFactory.addNewToDo(vm.newToDo).then(
                function() {
                    vm.saving = false;
                    vm.todos.push(vm.newToDo);
                    vm.newtext = null;
                },
                function() {
                    alert('Sorry, there was an error saving your todo!');
                }
            );
        };


        vm.editToDo = function(todo) {
            toDoFactory.editToDo(todo).then(
                function() {
                },
                function() {
                    alert('Sorry, there was an error editing your todo!');
                }
            );

        };


        vm.deleteToDo = function(todo, $index) {
            toDoFactory.deleteToDo(todo).then(
                function() {
                    vm.todos.splice($index, 1);
                },
                function() {
                    alert('Sorry, there was an error deleting your todo!');
                }
            );

        };




    }

})();
