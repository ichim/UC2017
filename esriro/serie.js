//var element = {};


//element['y'] = el.count;
//element['text'] = el.value.toString().split(' ')[0];
//element['tooltip'] = el.value + ' (' + el.count + ')';
//element['categorie'] = el.value;
//elemente.push(element);


define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/_base/lang",


    "esri/layers/FeatureLayer",
    "esri/plugins/FeatureLayerStatistics"

], function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        lang,


        FeatureLayer,
        FeatureLayerStatistics

        ) {
    var clasa = new declare([], {
        postCreate: function () {

        },
        constructor: function () {

            declare.safeMixin(this, arguments);


            this.featureLayer = arguments[0].featureLayer;

            this.fieldName = arguments[0].fieldName;


           

        },
        get: function (callback) {

         
            var elemente = []

                    //var element = {};
                    //element['y'] = 10;
                    //element['text'] = "UC 2017";
                    //element['tooltip'] = "User Conference 2017";
                    //element['categorie'] = "UC 2017";
                    //elemente.push(element);

                    //callback(elemente);



                    var featureLayerStatistics = new FeatureLayerStatistics({
                        layer: this.featureLayer,
                        visible: false
                    });

                    featureLayerStatistics.getUniqueValues({ field: this.fieldName }).then(function (result) {
                        dojo.forEach(result.uniqueValueInfos, function (item) {
                            var element = {};
                            element['y'] = item.count;
                            element['categorie'] = item.value;
                            element['tooltip'] = item.value;

                            elemente.push(element);
                        });
                        callback(elemente);
                    });
            


           

            

           
        }
    });
    return clasa;
});