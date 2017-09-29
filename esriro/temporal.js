﻿define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/_base/lang",

    "esri/renderers/ClassBreaksRenderer",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/Color",

    "esri/renderers/TimeClassBreaksAger",
    "esri/renderers/TemporalRenderer"

], function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        lang,

        ClassBreaksRenderer,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        Color,

        TimeClassBreaksAger,
        TemporalRenderer

        ) {
    var clasa = new declare([], {
        postCreate: function () {

        },
        constructor: function () {
            declare.safeMixin(this, arguments);


            this.featureLayer = arguments[0].featureLayer;
        },
        simbolizare: function () {
           
            var classBreaksRenderer = new ClassBreaksRenderer(new SimpleMarkerSymbol(), "PERSOANE");
           

            classBreaksRenderer.addBreak(3, 5, new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 12, new SimpleLineSymbol().setStyle(SimpleLineSymbol.STYLE_SOLID).setColor(new Color([100, 100, 100])), new Color([0, 0, 0, 0])));
            classBreaksRenderer.addBreak(2, 3, new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 9, new SimpleLineSymbol().setStyle(SimpleLineSymbol.STYLE_SOLID).setColor(new Color([100, 100, 100])), new Color([0, 0, 0, 0])));
            classBreaksRenderer.addBreak(0, 2, new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 6, new SimpleLineSymbol().setStyle(SimpleLineSymbol.STYLE_SOLID).setColor(new Color([100, 100, 100])), new Color([0, 0, 0, 0])));

            var intervaleOrare = [
           { minAge: 18, maxAge: Infinity, color: new dojo.Color([128, 128, 128]) },        
           { minAge: 12, maxAge: 18, color: new dojo.Color([0, 176, 0]) },           
           { minAge: 0, maxAge: 3, color: new dojo.Color([255, 0, 0]) }              
             ];



            var ager = new TimeClassBreaksAger(intervaleOrare, TimeClassBreaksAger.UNIT_DAYS);
            var renderer = new TemporalRenderer(classBreaksRenderer, null, null, ager);
            this.featureLayer.setRenderer(renderer);

        }
    });
    return clasa;
});