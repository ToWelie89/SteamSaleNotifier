require.config({
    baseUrl: 'assets/js',
    paths: {
        jquery: 'libs/jquery-2.1.1.min',
        constants: 'constants',
        helpers: 'helpers',
        angular: 'libs/angular.min'
    }
});

require(['main']);