import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Control from "sap/ui/core/Control";
import BusyIndicator from "sap/ui/core/BusyIndicator";
import Button from "sap/m/Button";
import FilterOperator from "sap/ui/model/FilterOperator";
import Filter from "sap/ui/model/Filter";
import Input from "sap/m/Input";
import BusyDialog from "sap/m/BusyDialog";
import Device from "sap/ui/Device";
import ValueHelpDialog from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
import FilterBar from "sap/ui/comp/filterbar/FilterBar";
import FilterGroupItem from "sap/ui/comp/filterbar/FilterGroupItem";
import Table from "sap/ui/table/Table";
import SmartTable from "sap/ui/comp/smarttable/SmartTable";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace zsotracking.controller
 */
export default class Maintain extends Controller {

    public _pValueHelpDialog: Promise<Control | Control[]> | null = null;
    public selectedAdvLic: string[] = [];
    public oDataModel: ODataModel;
    public oResponsivePaddingDialog: any;
    public _oValueHelpDialog: any;
    public selectedOrder: string = "";
    public errorDialog: boolean = false;


    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        var oView;
        this.oDataModel = new ODataModel("/sap/opu/odata/sap/ZUI_SOTRACKING_O2/", {
            defaultCountMode: "None"
        });

        this.getView()?.setModel(this.oDataModel);
    }
}