sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ui5school.project1.controller.controller.App", {
        onInit() {
        },
        onClick() {
            alert('You have clicked the button!');
        }
      });
    }
  );
  