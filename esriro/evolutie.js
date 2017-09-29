define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/dom",
    "dojo/_base/lang",
    "esri/dijit/TimeSlider",
    "esri/layers/TimeInfo",
    "esri/layers/FeatureLayer"

], function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        dom,
        lang,
        TimeSlider,
        TimeInfo,
        FeatureLayer

        ) {
    var clasa = new declare([], {
        postCreate: function () {

        },
        constructor: function () {
            declare.safeMixin(this, arguments);
            this.featureLayer = arguments[0].featureLayer;
            this.map = arguments[0].map;
            this.divId = arguments[0].divId;
            this.interval = arguments[0].interval;
           
        },
        start: function () {

    
           
        },
        destroy:function()
        {
            
        }

    });
    return clasa;
});