if (angular.isDefined(angular)) {
    angular
        .module('hlTableDocsApp', ['hlTableModule'])
        .config(function (hlTableConfigProvider, $translateProvider) {
            hlTableConfigProvider.setTemplatePath('dist/templates/');
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: 'dist/languages/{lang}.json'
            });
            $translateProvider.useSanitizeValueStrategy(null);
        })
        .controller('hlTableDocsCtrl', function ($rootScope, $scope, $timeout, $log, hlUrlHelper, hlTableConfig, hlDataHelper) {
            $scope.project = {
                name: 'hl-table',
                version: '0.0.1'
            };

            $scope.config = {
                // Define a unique name
                name: 'test',
                // URL to get data
                url: 'data/basic.php',
                // Params: pageNum = 1, offset = 20, orderBy = '', ascDesc = 'ASC'
                params: {},
                advancedFilter: {
                    templatePath: 'myModule/advancedFilter.tpl.html'
                },
                // Bind for default prop
                $filter: {
                    published: '0'
                },
                tools: [
                    {
                        template: '<i class="plus icon"></i>',
                        type: 'icon',
                        callback: function (e) {
                            console.log(e);
                        }
                    }
                ]
            };

            // Define column collection
            $scope.columns = [
                {
                    field: 'id',
                    label: 'ID',
                    textAlign: 'right',
                    width: '6%',
                    display: false,
                    ordered: 3
                }, {
                    field: 'name',
                    label: 'Name',
                    ordered: 2
                }, {
                    field: 'published',
                    label: 'Published',
                    width: '10%',
                    textAlign: 'center',
                    ordered: 4
                }, {
                    field: 'action',
                    label: 'Action',
                    width: '80px',
                    textAlign: 'center',
                    canSort: false,
                    ordered: 1
                }
            ];

            // Process config data
            hlDataHelper.run($scope.config, 'id');
        });
}