var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_reaCTS_1 = new ol.format.GeoJSON();
var features_reaCTS_1 = format_reaCTS_1.readFeatures(json_reaCTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaCTS_1.addFeatures(features_reaCTS_1);
var lyr_reaCTS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaCTS_1, 
                style: style_reaCTS_1,
                popuplayertitle: 'rea CTS',
                interactive: true,
    title: 'rea CTS<br />\
    <img src="styles/legend/reaCTS_1_0.png" /> Cinturão<br />\
    <img src="styles/legend/reaCTS_1_1.png" /> CTS 1<br />\
    <img src="styles/legend/reaCTS_1_2.png" /> CTS 19<br />\
    <img src="styles/legend/reaCTS_1_3.png" /> CTS 1A<br />\
    <img src="styles/legend/reaCTS_1_4.png" /> CTS 2<br />\
    <img src="styles/legend/reaCTS_1_5.png" /> CTS 20<br />\
    <img src="styles/legend/reaCTS_1_6.png" /> CTS 21<br />\
    <img src="styles/legend/reaCTS_1_7.png" /> CTS 22<br />\
    <img src="styles/legend/reaCTS_1_8.png" /> CTS 23<br />\
    <img src="styles/legend/reaCTS_1_9.png" /> CTS 24<br />\
    <img src="styles/legend/reaCTS_1_10.png" /> CTS 3<br />\
    <img src="styles/legend/reaCTS_1_11.png" /> CTS 4<br />\
    <img src="styles/legend/reaCTS_1_12.png" /> CTS 5<br />\
    <img src="styles/legend/reaCTS_1_13.png" /> CTS 6<br />\
    <img src="styles/legend/reaCTS_1_14.png" /> CTS 7<br />\
    <img src="styles/legend/reaCTS_1_15.png" /> CTS 9A e CTS 18<br />\
    <img src="styles/legend/reaCTS_1_16.png" /> <br />' });
var format_Limitemunicipal_2 = new ol.format.GeoJSON();
var features_Limitemunicipal_2 = format_Limitemunicipal_2.readFeatures(json_Limitemunicipal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemunicipal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_2.addFeatures(features_Limitemunicipal_2);
var lyr_Limitemunicipal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_2, 
                style: style_Limitemunicipal_2,
                popuplayertitle: 'Limite municipal',
                interactive: true,
                title: '<img src="styles/legend/Limitemunicipal_2.png" /> Limite municipal'
            });
var format_Coletores_3 = new ol.format.GeoJSON();
var features_Coletores_3 = format_Coletores_3.readFeatures(json_Coletores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coletores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coletores_3.addFeatures(features_Coletores_3);
var lyr_Coletores_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coletores_3, 
                style: style_Coletores_3,
                popuplayertitle: 'Coletores',
                interactive: true,
                title: '<img src="styles/legend/Coletores_3.png" /> Coletores'
            });
var format_Interceptor_4 = new ol.format.GeoJSON();
var features_Interceptor_4 = format_Interceptor_4.readFeatures(json_Interceptor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Interceptor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Interceptor_4.addFeatures(features_Interceptor_4);
var lyr_Interceptor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Interceptor_4, 
                style: style_Interceptor_4,
                popuplayertitle: 'Interceptor',
                interactive: true,
                title: '<img src="styles/legend/Interceptor_4.png" /> Interceptor'
            });
var format_LR_5 = new ol.format.GeoJSON();
var features_LR_5 = format_LR_5.readFeatures(json_LR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LR_5.addFeatures(features_LR_5);
var lyr_LR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LR_5, 
                style: style_LR_5,
                popuplayertitle: 'LR',
                interactive: true,
                title: '<img src="styles/legend/LR_5.png" /> LR'
            });
var format_CaptaoCH_6 = new ol.format.GeoJSON();
var features_CaptaoCH_6 = format_CaptaoCH_6.readFeatures(json_CaptaoCH_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaptaoCH_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaptaoCH_6.addFeatures(features_CaptaoCH_6);
var lyr_CaptaoCH_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaptaoCH_6, 
                style: style_CaptaoCH_6,
                popuplayertitle: 'Captação CH',
                interactive: true,
                title: '<img src="styles/legend/CaptaoCH_6.png" /> Captação CH'
            });
var format_CaptaoGAP_7 = new ol.format.GeoJSON();
var features_CaptaoGAP_7 = format_CaptaoGAP_7.readFeatures(json_CaptaoGAP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaptaoGAP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaptaoGAP_7.addFeatures(features_CaptaoGAP_7);
var lyr_CaptaoGAP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaptaoGAP_7, 
                style: style_CaptaoGAP_7,
                popuplayertitle: 'Captação GAP',
                interactive: true,
                title: '<img src="styles/legend/CaptaoGAP_7.png" /> Captação GAP'
            });
var format_EEE_8 = new ol.format.GeoJSON();
var features_EEE_8 = format_EEE_8.readFeatures(json_EEE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEE_8.addFeatures(features_EEE_8);
var lyr_EEE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEE_8, 
                style: style_EEE_8,
                popuplayertitle: ' EEE',
                interactive: true,
                title: '<img src="styles/legend/EEE_8.png" />  EEE'
            });
var format_ETEProjetada_9 = new ol.format.GeoJSON();
var features_ETEProjetada_9 = format_ETEProjetada_9.readFeatures(json_ETEProjetada_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ETEProjetada_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETEProjetada_9.addFeatures(features_ETEProjetada_9);
var lyr_ETEProjetada_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETEProjetada_9, 
                style: style_ETEProjetada_9,
                popuplayertitle: 'ETE Projetada',
                interactive: true,
                title: '<img src="styles/legend/ETEProjetada_9.png" /> ETE Projetada'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_reaCTS_1.setVisible(true);lyr_Limitemunicipal_2.setVisible(true);lyr_Coletores_3.setVisible(true);lyr_Interceptor_4.setVisible(true);lyr_LR_5.setVisible(true);lyr_CaptaoCH_6.setVisible(true);lyr_CaptaoGAP_7.setVisible(true);lyr_EEE_8.setVisible(true);lyr_ETEProjetada_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_reaCTS_1,lyr_Limitemunicipal_2,lyr_Coletores_3,lyr_Interceptor_4,lyr_LR_5,lyr_CaptaoCH_6,lyr_CaptaoGAP_7,lyr_EEE_8,lyr_ETEProjetada_9];
lyr_reaCTS_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Limitemunicipal_2.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Coletores_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Interceptor_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Extensão': 'Extensão', });
lyr_LR_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CaptaoCH_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_CaptaoGAP_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_EEE_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_ETEProjetada_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_reaCTS_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Limitemunicipal_2.set('fieldImages', {'fid': '', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Coletores_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Interceptor_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Extensão': 'TextEdit', });
lyr_LR_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CaptaoCH_6.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_CaptaoGAP_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_EEE_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_ETEProjetada_9.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_reaCTS_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Limitemunicipal_2.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Coletores_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Interceptor_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Extensão': 'no label', });
lyr_LR_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CaptaoCH_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_CaptaoGAP_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_EEE_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_ETEProjetada_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_ETEProjetada_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});