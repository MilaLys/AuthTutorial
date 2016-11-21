<?php
session_start();
?>
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
</head>
<body ng-controller="myCtrl">

<header>
    <!--<div class="logo">
        <img src="images/logo.png" alt="logo" title="Home"/>
    </div>-->
</header>
<nav class="menu">
    <ul>
        <li>
            <a href="#!/view1">About</a>
        </li>
        <li>
            <a href="#">Blog</a>
        </li>
        <li>
            <a href="#!/view2">Contacts</a>
        </li>
    </ul>
</nav>
<div class="outer-container"></div>
<div class="outer-container1"></div>
<div class="outer-container2"></div>

<div class="inner-container animated zoomIn">
    <div ng-view>
    </div> <!--for content that will be changed-->
</div>
<a href='javascript:void(0)'
   class="log-in"
   data-ng-show="!loggedin"
   data-ng-click='toggleModal()'
>
    log in
</a>
<a href='javascript:void(0)'
   class="logout"
   data-ng-show="loggedin"
   data-ng-click='signout()'
>
    log out
</a>

<modal-dialog show='modalShown' width='750px' height='430px'>
    <ul class="login">
        <li>Log In</li>
        <li>Sign In</li>
    </ul>

    <div class="row modal-content">
        <div>
            <form name="loginForm" data-ng-submit="login()">
                <input type="text"
                       autocomplete="off"
                       placeholder="Your name"
                       data-ng-model="data.uName"
                       name="uName"
                       required
                />
                <span data-ng-show="loginForm.uName.$error.required">User name is required!</span>

                <input type="password"
                       autocomplete="off"
                       placeholder="Your password"
                       data-ng-model="data.uPassword"
                       name="uPassword"
                       data-ng-minlength="8"
                       data-ng-maxlength="10"
                       required
                />
                <span data-ng-show="loginForm.uPassword.$error.required">Password is required!</span>
                <span data-ng-show="loginForm.uPassword.$error.minlength">Password is too short!</span>
                <span data-ng-show="loginForm.uPassword.$error.maxlength">Password is too long!</span>

                <button data-ng-click = 'getUsers()'>Get All Users</button>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </form>
        </div>
        <div>
            <form name="signinForm" data-ng-submit="submit()">
                <input type="text"
                       autocomplete="off"
                       placeholder="Your name"
                       data-ng-model="data.name"
                       name="name"
                       required
                />
                <span data-ng-show="signinForm.name.$error.required">User name is required!</span>

                <input type="password"
                       autocomplete="off"
                       placeholder="Your password"
                       data-ng-model="data.password"
                       name="password"
                       data-ng-minlength="8"
                       data-ng-maxlength="10"
                       required
                />
                <span data-ng-show="signinForm.password.$error.required">Password is required!</span>
                <span data-ng-show="signinForm.password.$error.minlength || signinForm.password.$error.maxlength">Password must be from 8 to 10 characters!</span>

                <input type="password"
                       autocomplete="off"
                       placeholder="Confirm your password"
                       data-ng-model="confirm"
                       name="confirm"
                       required
                />
                <span data-ng-show="signinForm.confirm.$error.required">Confirm password!</span>
                <span data-ng-show="confirmPassword(confirm, data.password)">Password is not the same!</span>


                <input type="submit"
                       value="Send"
                       data-ng-click="send()"
                />
                <input type="reset"
                       value="Reset"
                />
            </form>
        </div>
    </div>
</modal-dialog>


<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->


<!-- In production use:
<script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
-->
<script>
    var isUserLogged = <?= isset($_SESSION['loggedin']) ? 'true' : 'false'; ?>;
</script>
<script src="vendors/jquery-3.1.1.min.js"></script>
<script src="vendors/angular/angular.js"></script>
<script src="vendors/angular-route/angular-route.js"></script>
<script src="vendors/angular-animate/angular-animate.js"></script>
<script src="https://cdn.jsdelivr.net/lodash/1.3.1/lodash.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/restangular/1.5.1/restangular.js"></script>

<script src="app/scripts/app.js"></script>
<script src="app/scripts/view1.js"></script>
<script src="app/scripts/view2.js"></script>
<script src="app/scripts/validation.directive.js"></script>
<script src="app/scripts/modal-window.directive.js"></script>
</body>
</html>