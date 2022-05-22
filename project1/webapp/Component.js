sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "ui5school/project1/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("ui5school.project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //<<YG
                // set the json model
                let oTestData = { 
                    Data: [
                        {   
                            Name : "ABAP - learn hard",
                            Description : "Learning ABAB basics",
                            Author : "Steven King",
                            PubYear : 2019,
                            Price : 10
                        },
                        {   
                            Name : "Javascript",
                            Description : "Learning JS",
                            Author : "Donald Duck",
                            PubYear : 2020,
                            Price : 15
                        },
                        {   
                            Name : "C++ basics",
                            Description : "C++ programming language",
                            Author : "Mark Tven",
                            PubYear : 2021,
                            Price : 12
                        }
                    ] 
                };
                let oTestDataJsonModel = new JSONModel(oTestData);
                this.setModel(oTestDataJsonModel, "TestDataModel");
                //>>YG
            }
        });
    }
);