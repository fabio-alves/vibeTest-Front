angular.module('vibeConsultas',['ngRoute'])
.config(function($routeProvider, $locationProvider){
   
  /*$locationProvider.html5Mode(true)*/

  $routeProvider.when('/especialidades',{
    templateUrl:'/views/specialties.html',
    controller:'specialtiesController'
  })

  $routeProvider.when('/medicos',{
    templateUrl:'/views/doctors.html',
    controller:'doctorsController'
  });

  $routeProvider.when('/consultas',{
    templateUrl:'/views/medicalAppointment.html',
    controller:'medicalAppointmentController'
  });

  $routeProvider.when('/agenda', {
    templateUrl:'/views/schedule.html',
    controller:'scheduleController'
  });

  $routeProvider.when
  $routeProvider.otherwise({redirectTo:'/'});
})