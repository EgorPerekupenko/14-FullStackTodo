//factory

(function() {
    'use strict';

    angular
        .module('toDoApp')
        .factory('toDoFactory', toDoFactory);

    //injecting parameters to the factory
    toDoFactory.$inject = ['$http', '$q'];

    function toDoFactory($http, $q) {
        var service = {
            getToDo: getToDo,
            addNewToDo: addNewToDo,
            deleteToDo: deleteToDo,
            editToDo: editToDo
        };

        return service;

        function getToDo() {
            var deferred = $q.defer();

            //communicating with the api
            $http.get('http://localhost:61302/api/VSTDA').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

        function addNewToDo(todo) {
            var deferred = $q.defer();

            //communicating with the api
            $http.post('http://localhost:61302/api/VSTDA', todo).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

        function editToDo(todo) {
            var deferred = $q.defer();

            //communicating with the api
            $http.put('http://localhost:61302/api/VSTDA' + '/' + todo.todoId, todo).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

        function deleteToDo(todo) {
            var deferred = $q.defer();

            //communicating with the api
            $http.delete('http://localhost:61302/api/VSTDA' + '/' + todo.todoId).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

    }
})();
