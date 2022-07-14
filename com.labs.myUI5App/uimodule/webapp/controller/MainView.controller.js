sap.ui.define(
    ["./BaseController", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("com.labs.myUI5App.controller.MainView", {
            onShowHello: function () {
                alert("hola");
                console.log("hola");
                MessageToast.show("Hello World");
                alert("hola 2");
            },
            onInit: function () {
                // set data model on view
                var oData = {
                    recipient: {
                        name: "World",
                    },
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
        });
    }
);
