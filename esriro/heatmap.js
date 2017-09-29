define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/_base/lang",

    "esri/renderers/HeatmapRenderer" /*1*/

], function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        lang

    ,HeatmapRenderer /*2*/

        ) {
    var clasa = new declare([], {
        postCreate: function () {

        },
        constructor: function () {
            declare.safeMixin(this, arguments);


            this.featureLayer = arguments[0].featureLayer; /*3*/

            
        },
        simbolizare: function () {

            var heatmaprenderer = new HeatmapRenderer({
                blurRadius: 9,
                colors: [
                    { ratio: 0, color: "rgba(0,0,0,0)" },
                    { ratio: 0.3, color: "rgb(255,255,180)" },
                    { ratio: 0.5, color: "rgb(255,255,0)" },
                    { ratio: 0.7, color: "rgb(0,255,180)" },
                     { ratio: 0.95, color: "rgb(255,0,0)" }
                ]
            });

            this.featureLayer.setRenderer(heatmaprenderer);




           
        }
    });
    return clasa;
});




























//var heatmaprenderer = new HeatmapRenderer({
//    blurRadius: 9,
//    colors: [
//        { ratio: 0, color: "rgba(0,0,0,0)" },
//        { ratio: 0.3, color: "rgb(255,255,180)" },
//         { ratio: 0.5, color: "rgb(255,255,0)" },
//          { ratio: 0.7, color: "rgb(0,255,0)" },
//           { ratio: 0.95, color: "rgb(255,0,0)" }

//    ]
//});

//this.featureLayer.setRenderer(heatmaprenderer);