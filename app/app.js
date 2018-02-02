"use strict";

angular.module("SweetApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/login", {
                templateUrl: "partials/nav-view.html",
                controller: "AuthCtrl"
            })
            .otherwise("/");
    }).run(FBcreds => {
        let creds = FBcreds;
        let authConfig = {
            apiKey: creds.apiKey,
            authDomain: creds.authDomain
        };
        firebase.initializeApp(authConfig);
    });