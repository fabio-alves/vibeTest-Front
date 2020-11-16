angular.module('vibeConsultas').controller('specialtiesController',function($scope, $http){

  $scope.doctors=[];

  $http.get('api/medicos').success(function(resp){
    $scope.doctors = resp;
  })
  .error(function(erro){
    console.log(erro);
  })
} )