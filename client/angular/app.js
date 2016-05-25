var waitOutModule = angular.module('waitOut',['ngCookies'])
.directive("outsideClick", ['$document','$parse', function( $document, $parse ){
    return {
        link: function( $scope, $element, $attributes ){
        	var condition = $attributes.ngShow
            var scopeExpression = $attributes.outsideClick,
                onDocumentClick = function(event){
                	console.log(condition == true, condition);
                	if (condition == true){
	                    var isChild = $element.find(event.target).length > 0;

	                    if(!isChild) {
	                        $scope.$apply(scopeExpression());
	                    }
                	}
                };
            $document.on("click", onDocumentClick);

            $element.on('$destroy', function() {
                $document.off("click", onDocumentClick);
            });
        }
    }
}]);