<?php
//session_start();
//?>
<!DOCTYPE html>
<!--[if lt IE 7]>
<html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>My App</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="vendors/html5-boilerplate/dist/css/normalize.css">
    <link rel="stylesheet" href="vendors/html5-boilerplate/dist/css/main.css">
    <link rel="stylesheet" href="app/styles/app.css">
    <link rel="stylesheet" href="vendors/font-awesome-4.7.0/css/font-awesome.min.css">
    <script src="vendors/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
    <!--<script>
        var isUserLogged = <? /*= isset($_SESSION['loggedin']) ? 'true' : 'false'; */ ?>;
    </script>-->
</head>
<body>

<header>
    <!--<div class="logo">
        <img src="images/logo.png" alt="logo" title="Home"/>
    </div>-->
</header>
<nav class="menu">
    <ul>
        <li>
            <a data-ui-sref="about" data-ui-sref-active="active">About</a>
        </li>
        <li>
            <a data-ui-sref="blog" data-ui-sref-active="active">Blog</a>
        </li>
        <li>
            <a data-ui-sref="contacts" data-ui-sref-active="active">Contacts</a>
        </li>
    </ul>
</nav>
<div class="outer-container"></div>
<div class="outer-container1"></div>
<div class="outer-container2"></div>

<div class="inner-container animated zoomIn">
    <div data-ui-view>
    </div> <!--for content that will be changed-->
</div>
<a href='javascript:void(0)'
   class="log-in"
   data-if-show="!isUserLogged || !loggedin"
   data-ng-click='toggleModal()'
>
    log in
</a>
<a href='javascript:void(0)'
   class="logout ng-hide"
   data-ng-if="isUserLogged || loggedin"
   data-ng-click='logout()'
>
    log out
</a>




<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->


<!-- In production use:
<script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
-->

<script src="vendors/jquery-3.1.1.min.js"></script>
<script src="vendors/angular/angular.js"></script>
<script src="vendors/angular-route/angular-route.js"></script>
<script src="vendors/angular-animate/angular-animate.js"></script>
<script src="vendors/angular-ui-router/release/angular-ui-router.js"></script>
<script src="https://cdn.jsdelivr.net/lodash/1.3.1/lodash.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/restangular/1.5.1/restangular.js"></script>

<script src="app/scripts/app.js"></script>
<script src="app/scripts/about.js"></script>
<script src="app/scripts/blog.js"></script>
<script src="app/scripts/contacts.js"></script>
<script src="app/scripts/validation.directive.js"></script>
<script src="app/scripts/modal-window.directive.js"></script>
</body>
</html>
