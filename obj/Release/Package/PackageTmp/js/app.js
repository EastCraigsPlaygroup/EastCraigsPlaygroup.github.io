// app.js

(function ()
{
    var app = angular.module('nurseryApp', []);

    app.controller('AppController', function ()
    {
        var now = new Date(Date.now());

        this.currentYear = now.getFullYear();
    });

    app.directive('pageHeader', function ()
    {
        return {
            // E stands for Element (A is for Attribute)
            restrict: 'E',
            templateUrl: 'templates/page-header.html'
        };
    });

    app.directive('pageFooter', function ()
    {
        return {
            // E stands for Element (A is for Attribute)
            restrict: 'E',
            templateUrl: 'templates/page-footer.html'
        };
    });

    app.controller('FormController', function ()
    {
        var contact = {
            childName: '',
            childBirthDate: null,
            parentName: '',
            address: '',
            email: '',
            homePhone: '',
            mobilePhone: '',
            comments: ''
        };
        
        this.contact = contact;

        this.submit = function ()
        {
            alert('Eventually this will do something for ' + this.childName);
        }
    });

})();
