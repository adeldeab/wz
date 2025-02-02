ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([36.247166, 33.488889, 36.275064, 33.503981]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Electricity_1 = new ol.format.GeoJSON();
var features_Electricity_1 = format_Electricity_1.readFeatures(json_Electricity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Electricity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Electricity_1.addFeatures(features_Electricity_1);
var lyr_Electricity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Electricity_1, 
                style: style_Electricity_1,
                popuplayertitle: 'Electricity',
                interactive: true,
    title: 'Electricity<br />\
    <img src="styles/legend/Electricity_1_0.png" /> غير منفذ<br />\
    <img src="styles/legend/Electricity_1_1.png" /> منفذ<br />\
    <img src="styles/legend/Electricity_1_2.png" /> <br />'
        });
var format_led_2 = new ol.format.GeoJSON();
var features_led_2 = format_led_2.readFeatures(json_led_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_led_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_led_2.addFeatures(features_led_2);
var lyr_led_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_led_2, 
                style: style_led_2,
                popuplayertitle: 'led',
                interactive: true,
                title: '<img src="styles/legend/led_2.png" /> led'
            });
var format_Sanitation_3 = new ol.format.GeoJSON();
var features_Sanitation_3 = format_Sanitation_3.readFeatures(json_Sanitation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sanitation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sanitation_3.addFeatures(features_Sanitation_3);
var lyr_Sanitation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sanitation_3, 
                style: style_Sanitation_3,
                popuplayertitle: 'Sanitation',
                interactive: true,
    title: 'Sanitation<br />\
    <img src="styles/legend/Sanitation_3_0.png" /> غير منفذ<br />\
    <img src="styles/legend/Sanitation_3_1.png" /> منفذ<br />\
    <img src="styles/legend/Sanitation_3_2.png" /> <br />'
        });
var format_Tranch_4 = new ol.format.GeoJSON();
var features_Tranch_4 = format_Tranch_4.readFeatures(json_Tranch_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tranch_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tranch_4.addFeatures(features_Tranch_4);
var lyr_Tranch_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tranch_4, 
                style: style_Tranch_4,
                popuplayertitle: 'Tranch',
                interactive: true,
    title: 'Tranch<br />\
    <img src="styles/legend/Tranch_4_0.png" /> غير منفذ<br />\
    <img src="styles/legend/Tranch_4_1.png" /> قيد التنفيذ<br />\
    <img src="styles/legend/Tranch_4_2.png" /> ملغاة<br />\
    <img src="styles/legend/Tranch_4_3.png" /> منفذ<br />\
    <img src="styles/legend/Tranch_4_4.png" /> <br />'
        });
var format_Build_5 = new ol.format.GeoJSON();
var features_Build_5 = format_Build_5.readFeatures(json_Build_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Build_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Build_5.addFeatures(features_Build_5);
var lyr_Build_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Build_5, 
                style: style_Build_5,
                popuplayertitle: 'Build',
                interactive: true,
    title: 'Build<br />\
    <img src="styles/legend/Build_5_0.png" /> بيع قطعي<br />\
    <img src="styles/legend/Build_5_1.png" /> خدمي<br />\
    <img src="styles/legend/Build_5_2.png" /> شراكة/قرض عيني<br />\
    <img src="styles/legend/Build_5_3.png" /> كنيسة<br />\
    <img src="styles/legend/Build_5_4.png" /> متاح للاستثمار<br />\
    <img src="styles/legend/Build_5_5.png" /> مديرية الآثار بشروط استثمارية<br />\
    <img src="styles/legend/Build_5_6.png" /> مركز خدمة محلي<br />\
    <img src="styles/legend/Build_5_7.png" /> مشاركة برأس المال<br />\
    <img src="styles/legend/Build_5_8.png" /> مقاولة<br />\
    <img src="styles/legend/Build_5_9.png" /> ملك أفراد<br />\
    <img src="styles/legend/Build_5_10.png" /> وزارة الأوقاف<br />\
    <img src="styles/legend/Build_5_11.png" /> وزارة التربية<br />\
    <img src="styles/legend/Build_5_12.png" /> وزارة تربية<br />'
        });
var format_street_6 = new ol.format.GeoJSON();
var features_street_6 = format_street_6.readFeatures(json_street_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_street_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_6.addFeatures(features_street_6);
var lyr_street_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_street_6, 
                style: style_street_6,
                popuplayertitle: 'street',
                interactive: false,
                title: '<img src="styles/legend/street_6.png" /> street'
            });
var format_green_7 = new ol.format.GeoJSON();
var features_green_7 = format_green_7.readFeatures(json_green_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_green_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_green_7.addFeatures(features_green_7);
var lyr_green_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_green_7, 
                style: style_green_7,
                popuplayertitle: 'green',
                interactive: false,
                title: '<img src="styles/legend/green_7.png" /> green'
            });
var format_parcel_8 = new ol.format.GeoJSON();
var features_parcel_8 = format_parcel_8.readFeatures(json_parcel_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_parcel_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcel_8.addFeatures(features_parcel_8);
var lyr_parcel_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcel_8, 
                style: style_parcel_8,
                popuplayertitle: 'parcel',
                interactive: false,
                title: '<img src="styles/legend/parcel_8.png" /> parcel'
            });
var format_zone_9 = new ol.format.GeoJSON();
var features_zone_9 = format_zone_9.readFeatures(json_zone_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_zone_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_9.addFeatures(features_zone_9);
var lyr_zone_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_9, 
                style: style_zone_9,
                popuplayertitle: 'zone',
                interactive: false,
                title: '<img src="styles/legend/zone_9.png" /> zone'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Electricity_1.setVisible(true);lyr_led_2.setVisible(true);lyr_Sanitation_3.setVisible(true);lyr_Tranch_4.setVisible(true);lyr_Build_5.setVisible(true);lyr_street_6.setVisible(true);lyr_green_7.setVisible(true);lyr_parcel_8.setVisible(true);lyr_zone_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Electricity_1,lyr_led_2,lyr_Sanitation_3,lyr_Tranch_4,lyr_Build_5,lyr_street_6,lyr_green_7,lyr_parcel_8,lyr_zone_9];
lyr_Electricity_1.set('fieldAliases', {'التنف': 'التنف', 'Shape_Leng': 'Shape_Leng', });
lyr_led_2.set('fieldAliases', {'التنف': 'التنف', 'Shape_Leng': 'Shape_Leng', });
lyr_Sanitation_3.set('fieldAliases', {'التنف': 'التنف', 'Shape_Leng': 'Shape_Leng', });
lyr_Tranch_4.set('fieldAliases', {'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'التنف': 'التنف', 'Shape_Leng': 'Shape_Leng', });
lyr_Build_5.set('fieldAliases', {'اسم_ا': 'اسم_ا', 'نوع_ا': 'نوع_ا', 'عدد_ا': 'عدد_ا', 'رقم_ا': 'رقم_ا', 'مساحة': 'مساحة', 'وصف_ا': 'وصف_ا', 'رقم_م': 'رقم_م', 'مساح_1': 'مساح_1', 'المسا': 'المسا', 'المال': 'المال', 'الوضع': 'الوضع', 'RuleID': 'RuleID', 'الموا': 'الموا', 'المو_1': 'المو_1', 'مرجعي': 'مرجعي', 'الما_1': 'الما_1', 'جهة_ا': 'جهة_ا', 'عامل_': 'عامل_', 'نسبة_': 'نسبة_', 'رقم_ج': 'رقم_ج', 'قيمة__': 'قيمة__', 'قيمة_': 'قيمة_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_street_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_green_7.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_parcel_8.set('fieldAliases', {'رمز_ا': 'رمز_ا', 'تصنيف': 'تصنيف', 'نوع_ا': 'نوع_ا', 'عدد_ا': 'عدد_ا', 'عامل_': 'عامل_', 'المسا': 'المسا', 'المس_1': 'المس_1', 'المس_2': 'المس_2', 'عدد__1': 'عدد__1', 'مناطق': 'مناطق', 'رقم_ا': 'رقم_ا', 'test': 'test', 'مساحة': 'مساحة', 'اسم_ا': 'اسم_ا', 'وصف_ا': 'وصف_ا', 'صفة_ا': 'صفة_ا', 'رقم_م': 'رقم_م', 'test_1': 'test_1', 'المس_3': 'المس_3', 'المنط': 'المنط', 'مساح_1': 'مساح_1', 'رقم__1': 'رقم__1', 'z_entrance': 'z_entrance', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_zone_9.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'هكتار': 'هكتار', 'كيلوم': 'كيلوم', 'km': 'km', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Electricity_1.set('fieldImages', {'التنف': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_led_2.set('fieldImages', {'التنف': '', 'Shape_Leng': '', });
lyr_Sanitation_3.set('fieldImages', {'التنف': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Tranch_4.set('fieldImages', {'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'التنف': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Build_5.set('fieldImages', {'اسم_ا': 'TextEdit', 'نوع_ا': 'TextEdit', 'عدد_ا': 'TextEdit', 'رقم_ا': 'TextEdit', 'مساحة': 'TextEdit', 'وصف_ا': 'TextEdit', 'رقم_م': 'TextEdit', 'مساح_1': 'TextEdit', 'المسا': 'TextEdit', 'المال': 'TextEdit', 'الوضع': 'TextEdit', 'RuleID': 'TextEdit', 'الموا': 'TextEdit', 'المو_1': 'TextEdit', 'مرجعي': 'TextEdit', 'الما_1': 'TextEdit', 'جهة_ا': 'TextEdit', 'عامل_': 'TextEdit', 'نسبة_': 'TextEdit', 'رقم_ج': 'TextEdit', 'قيمة__': 'TextEdit', 'قيمة_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_street_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_green_7.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_parcel_8.set('fieldImages', {'رمز_ا': 'TextEdit', 'تصنيف': 'TextEdit', 'نوع_ا': 'TextEdit', 'عدد_ا': 'TextEdit', 'عامل_': 'TextEdit', 'المسا': 'TextEdit', 'المس_1': 'TextEdit', 'المس_2': 'TextEdit', 'عدد__1': 'TextEdit', 'مناطق': 'TextEdit', 'رقم_ا': 'TextEdit', 'test': 'TextEdit', 'مساحة': 'TextEdit', 'اسم_ا': 'TextEdit', 'وصف_ا': 'TextEdit', 'صفة_ا': 'TextEdit', 'رقم_م': 'TextEdit', 'test_1': 'TextEdit', 'المس_3': 'TextEdit', 'المنط': 'TextEdit', 'مساح_1': 'TextEdit', 'رقم__1': 'TextEdit', 'z_entrance': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zone_9.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'هكتار': 'TextEdit', 'كيلوم': 'TextEdit', 'km': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Electricity_1.set('fieldLabels', {'التنف': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_led_2.set('fieldLabels', {'التنف': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_Sanitation_3.set('fieldLabels', {'التنف': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_Tranch_4.set('fieldLabels', {'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'inline label - always visible', 'LineWt': 'no label', 'RefName': 'no label', 'التنف': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_Build_5.set('fieldLabels', {'اسم_ا': 'inline label - always visible', 'نوع_ا': 'inline label - always visible', 'عدد_ا': 'inline label - always visible', 'رقم_ا': 'inline label - always visible', 'مساحة': 'inline label - always visible', 'وصف_ا': 'inline label - always visible', 'رقم_م': 'inline label - always visible', 'مساح_1': 'inline label - always visible', 'المسا': 'inline label - always visible', 'المال': 'inline label - always visible', 'الوضع': 'inline label - always visible', 'RuleID': 'inline label - always visible', 'الموا': 'inline label - always visible', 'المو_1': 'inline label - always visible', 'مرجعي': 'inline label - always visible', 'الما_1': 'inline label - always visible', 'جهة_ا': 'inline label - always visible', 'عامل_': 'inline label - always visible', 'نسبة_': 'inline label - always visible', 'رقم_ج': 'inline label - always visible', 'قيمة__': 'inline label - always visible', 'قيمة_': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_street_6.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_green_7.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_parcel_8.set('fieldLabels', {'رمز_ا': 'no label', 'تصنيف': 'no label', 'نوع_ا': 'no label', 'عدد_ا': 'no label', 'عامل_': 'no label', 'المسا': 'no label', 'المس_1': 'no label', 'المس_2': 'no label', 'عدد__1': 'no label', 'مناطق': 'no label', 'رقم_ا': 'no label', 'test': 'no label', 'مساحة': 'no label', 'اسم_ا': 'no label', 'وصف_ا': 'no label', 'صفة_ا': 'no label', 'رقم_م': 'no label', 'test_1': 'no label', 'المس_3': 'no label', 'المنط': 'no label', 'مساح_1': 'no label', 'رقم__1': 'no label', 'z_entrance': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_zone_9.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'هكتار': 'no label', 'كيلوم': 'no label', 'km': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_zone_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});