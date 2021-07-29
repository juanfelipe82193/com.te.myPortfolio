/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller,
	JSONModel,
	MessageToast) {
    "use strict";

    return Controller.extend("com.te.myPortfolio.controller.App", {

        onInit: function () {
            var oModel = new JSONModel("../model/data.json");
            this.getView().setModel(oModel, "portfolio");
        },

        onTilePress: function (oEvent) {
            var sHeader = oEvent.getSource().getHeader();
            MessageToast.show(sHeader);
        }

    });
});
