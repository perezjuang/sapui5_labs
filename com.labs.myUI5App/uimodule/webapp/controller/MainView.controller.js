sap.ui.define(
    ["./BaseController", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("com.labs.myUI5App.controller.MainView", {
            onPress: function (oEvent) {
                alert("Hello Nex To Next Page");
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("newview2");
            },
            onShowHello: function () {
                // show a native JavaScript alert
               

                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("newview2");

            },
            onInit: function () {
                // set data model on view
               /* var oData = {
                    recipient: {
                        name: "World",
                    },
                };
                var oModel = new JSONModel(oData);
                console.log("/oM_functionallocation");
                console.log(oModel);
                this.getView().setModel(oModel);*/

                var oModel = new JSONModel("products.json");
                this.getView().setModel(oModel);
                console.log(oModel);

                
            },
        });
    }
);
