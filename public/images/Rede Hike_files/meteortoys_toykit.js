//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package['templating-runtime'].Template;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var CollectionExtensions, MeteorToysData, Auth, i, char, oldId, currentEmail, currentPassword, collectionObjects, collections, total, MeteorToysRegistry, MeteorToysRegistryData, toyName, packageList, packageName, ToyKitData, ToyKit, password, email, MeteorToys, quote, MeteorToysDict, MeteorToys_JSON, MeteorToysNotifications, MeteorToysNotifyDict, Note, current, Counter, Data, item, NotifyClose, NotifyInternal, self, name, pixels, position, coordinate, data, keys, temp, em, pw;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/lib/collections.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _0x65e7=["\x64\x62\x75\x72\x6C\x65\x73\x3A\x6D\x6F\x6E\x67\x6F\x2D\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x69\x6E\x73\x74\x61\x6E\x63\x65\x73","\x5F\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73","\x61\x64\x64\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E\x2D\x77\x72\x6F\x6E\x67\x2D\x61\x72\x67\x75\x6D\x65\x6E\x74","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x70\x61\x73\x73\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x69\x6E\x74\x6F\x20\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x28\x29\x2E","\x70\x75\x73\x68","\x75\x73\x65\x72\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x70\x70\x6C\x79","\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E","\x60\x4D\x65\x74\x65\x6F\x72\x2E\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x60\x20\x69\x73\x20\x64\x65\x70\x72\x65\x63\x61\x74\x65\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x75\x73\x65\x20\x60\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x60","\x77\x61\x72\x6E","\x61\x64\x64\x50\x72\x6F\x74\x6F\x74\x79\x70\x65","\x73\x74\x72\x69\x6E\x67","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x70\x61\x73\x73\x20\x61\x20\x73\x74\x72\x69\x6E\x67\x20\x61\x73\x20\x74\x68\x65\x20\x66\x69\x72\x73\x74\x20\x61\x72\x67\x75\x6D\x65\x6E\x74\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x69\x6E\x74\x6F\x20\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x28\x29\x2E","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x70\x61\x73\x73\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x61\x73\x20\x74\x68\x65\x20\x73\x65\x63\x6F\x6E\x64\x20\x61\x72\x67\x75\x6D\x65\x6E\x74\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x69\x6E\x74\x6F\x20\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x50\x72\x6F\x74\x6F\x79\x70\x65\x28\x29\x2E","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x50\x72\x6F\x74\x6F\x74\x79\x70\x65","\x60\x4D\x65\x74\x65\x6F\x72\x2E\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x60\x20\x69\x73\x20\x64\x65\x70\x72\x65\x63\x61\x74\x65\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x75\x73\x65\x20\x60\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x60","\x73\x65\x74\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x4F\x66","\x5F\x5F\x70\x72\x6F\x74\x6F\x5F\x5F","\x5F\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x50\x72\x6F\x74\x6F\x74\x79\x70\x65","\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x63\x61\x6C\x6C","\x73\x6C\x69\x63\x65","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6E\x61\x6D\x65","\x6F\x70\x74\x69\x6F\x6E\x73","\x5F\x6C\x61\x73\x74\x53\x65\x73\x73\x69\x6F\x6E\x49\x64","\x66\x69\x6E\x64","\x69\x6E\x73\x74\x61\x6E\x63\x65","\x67\x65\x74\x41\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x54\x68\x72\x6F\x74\x74\x6C\x65","\x61\x6C\x6C\x6F\x77","\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C","\x41\x75\x74\x6F\x50\x75\x62","\x45\x6D\x61\x69\x6C","\x52\x65\x73\x75\x6C\x74","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x40","","\x72\x65\x70\x6C\x61\x63\x65","\x2E","\x30","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39","\x61","\x73","\x72","\x6C","\x67","\x6E","\x77","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x63\x6C\x65\x61\x6E","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x68\x61\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x79\x65\x73","\x66\x69\x6E\x64\x4F\x6E\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x6D\x6F\x76\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x63\x68\x65\x63\x6B","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x65\x6D\x6F\x76\x65","\x65\x6D\x61\x69\x6C","\x70\x61\x73\x73\x77\x6F\x72\x64","\x6D\x65\x74\x68\x6F\x64\x73","\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x6D\x61\x70","\x54\x68\x72\x6F\x74\x74\x6C\x65","\x70\x75\x62\x6C\x69\x73\x68","\x63\x6F\x72\x65","\x61\x64\x64\x6F\x6E","\x72\x65\x67\x69\x73\x74\x65\x72","\x74\x65\x6D\x70\x6C\x61\x74\x65","\x6F\x66\x66\x69\x63\x69\x61\x6C","\x73\x63\x61\x6E","\x6B\x65\x79\x73","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x54\x6F\x79\x4B\x69\x74","\x73\x74\x61\x72\x74\x53\x63\x61\x6E","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x61\x64\x64\x6F\x6E\x3A","\x73\x74\x61\x72\x74\x75\x70"];if(!Package[_0x65e7[0]]){CollectionExtensions= {};CollectionExtensions[_0x65e7[1]]= [];CollectionExtensions[_0x65e7[2]]= function(_0x51eex1){if( typeof _0x51eex1!== _0x65e7[3]){throw  new Meteor.Error(_0x65e7[4],_0x65e7[5])};CollectionExtensions[_0x65e7[1]][_0x65e7[6]](_0x51eex1);if( typeof Meteor[_0x65e7[7]]!== _0x65e7[8]){_0x51eex1[_0x65e7[9]](Meteor[_0x65e7[7]],[_0x65e7[7]])}};Meteor[_0x65e7[10]]= function(){console[_0x65e7[12]](_0x65e7[11]);CollectionExtensions[_0x65e7[2]][_0x65e7[9]](null,arguments)};CollectionExtensions[_0x65e7[13]]= function(_0x51eex2,_0x51eex1){if( typeof _0x51eex2!== _0x65e7[14]){throw  new Meteor.Error(_0x65e7[4],_0x65e7[15])};if( typeof _0x51eex1!== _0x65e7[3]){throw  new Meteor.Error(_0x65e7[4],_0x65e7[16])};( typeof Mongo!== _0x65e7[8]?Mongo[_0x65e7[18]]:Meteor[_0x65e7[18]])[_0x65e7[17]][_0x51eex2]= _0x51eex1};Meteor[_0x65e7[19]]= function(){console[_0x65e7[12]](_0x65e7[20]);CollectionExtensions[_0x65e7[13]][_0x65e7[9]](null,arguments)};function reassignCollectionPrototype(_0x51eex4,_0x51eex5){var _0x51eex6= typeof Object[_0x65e7[21]]=== _0x65e7[3];if(!_0x51eex5){_0x51eex5=  typeof Mongo!== _0x65e7[8]?Mongo[_0x65e7[18]]:Meteor[_0x65e7[18]]};if(_0x51eex6){Object[_0x65e7[21]](_0x51eex4,_0x51eex5[_0x65e7[17]])}else {if(_0x51eex4[_0x65e7[22]]){_0x51eex4[_0x65e7[22]]= _0x51eex5[_0x65e7[17]]}}}function wrapCollection(_0x51eex8,_0x51eex9){if(!_0x51eex9[_0x65e7[23]]){_0x51eex9[_0x65e7[23]]=  new _0x51eex9.Collection(null)};var _0x51eexa=_0x51eex9[_0x65e7[18]];var _0x51eexb=_0x51eex9[_0x65e7[23]];_0x51eex8[_0x65e7[18]]= function(){var _0x51eexc=_0x51eexa[_0x65e7[9]](this,arguments);processCollectionExtensions(this,arguments);return _0x51eexc};_0x51eex8[_0x65e7[18]][_0x65e7[17]]= _0x51eexb;_0x51eex8[_0x65e7[18]][_0x65e7[17]][_0x65e7[24]]= _0x51eex8[_0x65e7[18]];for(var _0x51eexd in _0x51eexa){if(_0x51eexa[_0x65e7[25]](_0x51eexd)){_0x51eex8[_0x65e7[18]][_0x51eexd]= _0x51eexa[_0x51eexd]}}}function processCollectionExtensions(_0x51eexf,_0x51eex10){var _0x51eex10=_0x51eex10?[][_0x65e7[27]][_0x65e7[26]](_0x51eex10,0):undefined;var _0x51eex11=CollectionExtensions[_0x65e7[1]];for(var _0x51eex12=0,_0x51eex13=_0x51eex11[_0x65e7[28]];_0x51eex12< _0x51eex13;_0x51eex12++){_0x51eex11[_0x51eex12][_0x65e7[9]](_0x51eexf,_0x51eex10)}}if( typeof Mongo!== _0x65e7[8]){wrapCollection(Meteor,Mongo);wrapCollection(Mongo,Mongo)}else {wrapCollection(Meteor,Meteor)};if( typeof Meteor[_0x65e7[7]]!== _0x65e7[8]){reassignCollectionPrototype(Meteor[_0x65e7[7]])};var instances=[];CollectionExtensions[_0x65e7[2]](function(_0x51eex2,_0x51eex15){instances[_0x65e7[6]]({name:_0x51eex2,instance:this,options:_0x51eex15})});Mongo[_0x65e7[18]][_0x65e7[29]]= function(_0x51eex2,_0x51eex15){_0x51eex15= _0x51eex15|| {};var _0x51eex16=_[_0x65e7[34]](instances,function(_0x51eex4){if(_0x51eex15[_0x65e7[30]]){return _0x51eex4[_0x65e7[31]]=== _0x51eex2&& _0x51eex4[_0x65e7[32]]&& _0x51eex4[_0x65e7[32]][_0x65e7[30]][_0x65e7[33]]=== _0x51eex15[_0x65e7[30]][_0x65e7[33]]};return _0x51eex4[_0x65e7[31]]=== _0x51eex2});return _0x51eex16&& _0x51eex16[_0x65e7[35]]};Mongo[_0x65e7[18]][_0x65e7[36]]= function(){return instances};Meteor[_0x65e7[18]]= Mongo[_0x65e7[18]]};MeteorToysData= {"\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65": new Mongo.Collection(_0x65e7[37]),"\x4A\x65\x74\x53\x65\x74\x74\x65\x72": new Mongo.Collection(_0x65e7[38]),"\x4D\x6F\x6E\x67\x6F\x6C": new Mongo.Collection(_0x65e7[39]),"\x41\x75\x74\x6F\x50\x75\x62": new Mongo.Collection(_0x65e7[40]),"\x45\x6D\x61\x69\x6C": new Mongo.Collection(_0x65e7[41]),"\x52\x65\x73\x75\x6C\x74": new Mongo.Collection(_0x65e7[42]),"\x54\x68\x72\x6F\x74\x74\x6C\x65": new Mongo.Collection(_0x65e7[43])};MeteorToysData[_0x65e7[45]][_0x65e7[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x65e7[46]][_0x65e7[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x65e7[47]][_0x65e7[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x65e7[48]][_0x65e7[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x65e7[49]][_0x65e7[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x65e7[50]][_0x65e7[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});if(Meteor[_0x65e7[51]]){MeteorToysData[_0x65e7[52]]=  new Mongo.Collection(_0x65e7[53]);Meteor[_0x65e7[89]]({Mongol_verifyDoc:function(_0x51eex17,_0x51eex18){check(_0x51eex17,Match.Any);check(_0x51eex18,Match.Any);var _0x51eex19;if(_0x51eex17){if(_0x51eex17=== _0x51eex18){return false}};Auth= {clean:function(_0x51eex17){if(_0x51eex17){_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[54],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[57],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[58],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[59],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[60],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[61],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[62],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[63],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[64],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[65],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[66],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[67],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[68],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[69],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[70],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[71],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[72],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[73],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[69],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[74]]();return _0x51eex17}},hash:function(_0x51eex1a){if(!_0x51eex1a){return};_0x51eex1a= Auth[_0x65e7[75]](_0x51eex1a);var _0x51eex1b=0;if(_0x51eex1a[_0x65e7[28]]== 0){return _0x51eex1b};for(i= 0;i< _0x51eex1a[_0x65e7[28]];i++){char= _0x51eex1a[_0x65e7[76]](i);_0x51eex1b= ((_0x51eex1b<< 5)- _0x51eex1b)+ char;_0x51eex1b= _0x51eex1b& _0x51eex1b};if(_0x51eex1b< 0){_0x51eex1b= _0x51eex1b*  -1};return String(_0x51eex1b)},check:function(_0x51eex17,_0x51eex1b){if(_0x51eex17|| _0x51eex1b){return};_0x51eex1b= String(_0x51eex1b);if(Auth[_0x65e7[77]](_0x51eex17)=== _0x51eex1b){return true}}};var _0x51eex1c=Meteor[_0x65e7[26]](_0x65e7[78],_0x51eex17,_0x51eex18,function(_0x51eex1d,_0x51eex1e){if(_0x51eex1e=== _0x65e7[79]){_0x51eex19= true;oldId= MeteorToysData[_0x65e7[52]][_0x65e7[80]]();if(oldId){Meteor[_0x65e7[26]](_0x65e7[81],_0x65e7[53],oldId._id,true)};Meteor[_0x65e7[26]](_0x65e7[82],_0x65e7[53],{email:_0x51eex17,password:_0x51eex18})}else {_0x51eex19= false}});try{if(Auth[_0x65e7[83]](_0x51eex17,_0x51eex18)){_0x51eex19= true};_0x51eex19= Auth[_0x65e7[83]](_0x51eex17,_0x51eex18)}catch(e){};return _0x51eex19},MeteorToys_init:function(){return Package[_0x65e7[85]][_0x65e7[84]][_0x65e7[52]][_0x65e7[80]]()},MeteorToys_remove:function(){Package[_0x65e7[85]][_0x65e7[84]][_0x65e7[52]][_0x65e7[86]]({})},MeteorToys:function(_0x51eex17,_0x51eex18){check(_0x51eex17,Match.Any);check(_0x51eex18,Match.Any);Auth= {clean:function(_0x51eex17){_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[54],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[57],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[58],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[59],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[60],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[61],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[62],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[63],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[64],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[65],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[66],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[67],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[68],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[69],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[70],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[71],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[72],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[73],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[56]](_0x65e7[69],_0x65e7[55]);_0x51eex17= _0x51eex17[_0x65e7[74]]();return _0x51eex17},hash:function(_0x51eex1a){_0x51eex1a= Auth[_0x65e7[75]](_0x51eex1a);var _0x51eex1b=0;if(_0x51eex1a[_0x65e7[28]]== 0){return _0x51eex1b};for(i= 0;i< _0x51eex1a[_0x65e7[28]];i++){char= _0x51eex1a[_0x65e7[76]](i);_0x51eex1b= ((_0x51eex1b<< 5)- _0x51eex1b)+ char;_0x51eex1b= _0x51eex1b& _0x51eex1b};if(_0x51eex1b< 0){_0x51eex1b= _0x51eex1b*  -1};return String(_0x51eex1b)},check:function(_0x51eex17,_0x51eex1b){_0x51eex1b= String(_0x51eex1b);if(Auth[_0x65e7[77]](_0x51eex17)=== _0x51eex1b){return true}}};currentEmail= null;currentPassword= null;if(_0x51eex17){if(_0x51eex17=== _0x51eex18){return false}else {currentEmail= _0x51eex17|| false;currentPassword= _0x51eex18|| false}}else {try{currentEmail= Package[_0x65e7[85]][_0x65e7[84]][_0x65e7[52]][_0x65e7[80]]()[_0x65e7[87]],currentPassword= Package[_0x65e7[85]][_0x65e7[84]][_0x65e7[52]][_0x65e7[80]]()[_0x65e7[88]]}catch(e){}};if(currentEmail&& Auth[_0x65e7[83]](currentEmail,currentPassword)){return _0x65e7[79]}}});if(Package[_0x65e7[90]]){}else {Meteor[_0x65e7[93]](_0x65e7[78],function(_0x51eex1f){check(_0x51eex1f,Match.Any);if(_0x51eex1f){collectionObjects= Mongo[_0x65e7[18]][_0x65e7[36]](),collections= [];collectionObjects[_0x65e7[91]](function(_0x51eex20){if(_0x51eex20[_0x65e7[31]]){collections[_0x65e7[6]](Mongo[_0x65e7[18]][_0x65e7[29]](_0x51eex20[_0x65e7[31]])[_0x65e7[34]]())}});return collections}else {total= [MeteorToysData[_0x65e7[45]][_0x65e7[34]]({},{limit:15}),MeteorToysData[_0x65e7[46]][_0x65e7[34]](),MeteorToysData[_0x65e7[48]][_0x65e7[34]](),MeteorToysData[_0x65e7[92]][_0x65e7[34]](),MeteorToysData[_0x65e7[49]][_0x65e7[34]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":1},limit:15}),MeteorToysData[_0x65e7[50]][_0x65e7[34]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1},limit:15}),MeteorToysData[_0x65e7[47]][_0x65e7[34]]({},{sort:{"\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65":1},limit:15})];return total}})};MeteorToysRegistry= {};MeteorToysRegistryData= {};MeteorToysRegistryData[_0x65e7[94]]=  new Object();MeteorToysRegistryData[_0x65e7[95]]=  new Object();MeteorToysRegistry[_0x65e7[96]]= function(_0x51eex21,_0x51eex22){toyName= _0x51eex21[_0x65e7[97]];if(_0x51eex22=== _0x65e7[98]){MeteorToysRegistryData[_0x65e7[94]][toyName]= _0x51eex21}else {MeteorToysRegistryData[_0x65e7[95]][toyName]= _0x51eex21}};MeteorToysRegistry[_0x65e7[99]]= function(_0x51eex23,_0x51eex22){packageList= Object[_0x65e7[100]](Package);for(var _0x51eex12=0;_0x51eex12< packageList[_0x65e7[28]];_0x51eex12++){packageName= packageList[_0x51eex12];if(packageName[_0x65e7[101]](_0x51eex23,0)=== 0){if(Package[packageName][_0x65e7[102]]){MeteorToysRegistry[_0x65e7[96]](Package[packageName].ToyKit,_0x51eex22)}}}};MeteorToysRegistry[_0x65e7[103]]= function(){MeteorToysRegistry[_0x65e7[99]](_0x65e7[104],_0x65e7[98]);MeteorToysRegistry[_0x65e7[99]](_0x65e7[105],_0x65e7[95])};Meteor[_0x65e7[106]](function(){MeteorToysRegistry[_0x65e7[103]]()});Meteor[_0x65e7[89]]({MeteorToysRegistry:function(){return MeteorToysRegistryData}})}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/lib/api.js                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _0x1955=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x54\x6F\x79\x4B\x69\x74","\x74\x6F\x67\x67\x6C\x65\x44\x69\x73\x70\x6C\x61\x79","\x64\x69\x73\x70\x6C\x61\x79","\x67\x65\x74","\x73\x65\x74","\x66\x6F\x63\x75\x73","\x73\x74\x61\x72\x74\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x61\x75\x74\x6F\x72\x75\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x4B\x65\x79\x73","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x74\x72\x6C\x4B\x65\x79","\x6B\x65\x79\x64\x6F\x77\x6E","\x63\x68\x65\x63\x6B\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x61\x73\x73\x77\x6F\x72\x64","\x67\x65\x74\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x76\x65\x72\x69\x66\x79\x44\x6F\x63","\x63\x61\x6C\x6C","\x54\x68\x65\x20\x73\x74\x6F\x72\x65\x64\x20\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E\x20\x6B\x65\x79\x73\x20\x66\x6F\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x61\x72\x65\x20\x69\x6E\x76\x61\x6C\x69\x64\x2E","\x6C\x6F\x67","\x72\x65\x62\x6F\x6F\x74\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x69\x74","\x70\x61\x73\x73\x77\x6F\x72\x64","\x73\x65\x74\x49\x74\x65\x6D","\x65\x6D\x61\x69\x6C","\x67\x72\x61\x62\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x52\x65\x67\x69\x73\x74\x72\x79","\x72\x65\x67\x69\x73\x74\x72\x79","\x70\x61\x72\x73\x65","\x73\x74\x72\x69\x6E\x67","\x75\x6E\x66\x6F\x63\x75\x73","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x3C\x65\x6D\x3E\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x3C\x2F\x65\x6D\x3E","\x26\x67\x74\x3B","\x72\x65\x70\x6C\x61\x63\x65","\x26\x6C\x74\x3B","\x26\x61\x6D\x70\x3B","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x75\x6D\x62\x65\x72","\x74\x65\x73\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x72\x69\x6E\x67","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x6F\x6F\x6C\x65\x61\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x75\x6C\x6C","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22","\x22\x3E\x22\x3C\x2F\x73\x70\x61\x6E\x3E","","\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x66\x61\x6C\x73\x65\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x3A","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x6F\x6C\x6F\x72\x69\x7A\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x3C\x65\x6D\x3E\x4E\x6F\x20\x64\x61\x74\x61\x3C\x2F\x65\x6D\x3E","\x5F\x69\x64","\x20\x22\x20\x3E","\x20\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x74\x72\x75\x65\x22\x3E","\x20\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x74\x72\x75\x65\x22\x3E\x22","\x22\x3C\x2F\x73\x70\x61\x6E\x3E","\x63\x6C\x6F\x73\x65\x54\x6F\x79","\x63\x75\x72\x72\x65\x6E\x74","\x63\x6C\x6F\x73\x65","\x73\x68\x6F\x75\x6C\x64\x4C\x6F\x67","\x6F\x70\x65\x6E\x54\x6F\x79","\x54\x6F\x79\x4B\x69\x74"];ToyKitData=  new ReactiveDict(_0x1955[0]);ToyKit= ToyKitData;ToyKit[_0x1955[1]]= function(){var _0xf84cx1=ToyKit[_0x1955[3]](_0x1955[2]);if(_0xf84cx1){ToyKit[_0x1955[4]](_0x1955[2],false);ToyKit[_0x1955[4]](_0x1955[5],null)}else {ToyKit[_0x1955[4]](_0x1955[2],true);ToyKit[_0x1955[4]](_0x1955[5],null)}};ToyKit[_0x1955[6]]= function(){if(Package[_0x1955[7]]){return false};Tracker[_0x1955[11]](function(){Meteor[_0x1955[10]](_0x1955[8],MeteorToysDict[_0x1955[3]](_0x1955[9]))})};ToyKit[_0x1955[12]]= function(){$(document)[_0x1955[15]](function(_0xf84cx2){if(_0xf84cx2[_0x1955[13]]=== 77&& _0xf84cx2[_0x1955[14]]){ToyKit[_0x1955[1]]()}})};ToyKit[_0x1955[16]]= function(){Meteor[_0x1955[22]](_0x1955[8],function(_0xf84cx2,_0xf84cx3){ToyKit[_0x1955[4]](_0x1955[17],_0xf84cx3);if(!_0xf84cx3){password= localStorage[_0x1955[19]](_0x1955[18]);email= localStorage[_0x1955[19]](_0x1955[20]);Meteor[_0x1955[22]](_0x1955[21],email,password,function(_0xf84cx2,_0xf84cx3){if(_0xf84cx3){Meteor[_0x1955[22]](_0x1955[8],function(_0xf84cx2,_0xf84cx3){ToyKit[_0x1955[4]](_0x1955[17],_0xf84cx3)})}else {if(localStorage[_0x1955[19]](_0x1955[20])){console[_0x1955[24]](_0x1955[23])}}})}else {password= localStorage[_0x1955[19]](_0x1955[18]);if(!password){ToyKit[_0x1955[25]]()}}})};ToyKit[_0x1955[25]]= function(){Meteor[_0x1955[22]](_0x1955[26],function(_0xf84cx2,_0xf84cx3){localStorage[_0x1955[28]](_0x1955[18],_0xf84cx3[_0x1955[27]]);localStorage[_0x1955[28]](_0x1955[20],_0xf84cx3[_0x1955[29]])})};ToyKit[_0x1955[30]]= function(){Meteor[_0x1955[22]](_0x1955[31],function(_0xf84cx2,_0xf84cx3){ToyKit[_0x1955[4]](_0x1955[32],_0xf84cx3)})};MeteorToys=  new ReactiveDict(_0x1955[8]);MeteorToys[_0x1955[33]]= function(_0xf84cx4){var _0xf84cx5=false;try{_0xf84cx5= JSON[_0x1955[33]](_0xf84cx4)}catch(error){_0xf84cx5= String(_0xf84cx4)};if( typeof _0xf84cx5=== _0x1955[34]){return _0xf84cx4}else {return _0xf84cx5}};MeteorToys[_0x1955[35]]= function(){ToyKit[_0x1955[4]](_0x1955[5])};MeteorToys[_0x1955[36]]= function(_0xf84cx6){if( typeof _0xf84cx6=== _0x1955[37]){return _0x1955[38]};_0xf84cx6= _0xf84cx6[_0x1955[40]](/&/g,_0x1955[42])[_0x1955[40]](/</g,_0x1955[41])[_0x1955[40]](/>/g,_0x1955[39]);return _0xf84cx6[_0x1955[40]](/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(_0xf84cx7){var _0xf84cx8=_0x1955[43];if(/^"/[_0x1955[44]](_0xf84cx7)){if(/:$/[_0x1955[44]](_0xf84cx7)){_0xf84cx8= _0x1955[45]}else {_0xf84cx8= _0x1955[46]}}else {if(/true|false/[_0x1955[44]](_0xf84cx7)){_0xf84cx8= _0x1955[47]}else {if(/null/[_0x1955[44]](_0xf84cx7)){_0xf84cx8= _0x1955[48]}}};quote= _0x1955[49]+ _0xf84cx8+ _0x1955[50];switch(_0xf84cx8){case _0x1955[45]:_0xf84cx7= _0xf84cx7[_0x1955[40]](/"/g,_0x1955[51]);_0xf84cx7= _0xf84cx7[_0x1955[40]](/:/g,_0x1955[51]);return quote+ _0x1955[49]+ _0xf84cx8+ _0x1955[52]+ _0xf84cx7+ _0x1955[53]+ quote+ _0x1955[54];break;case _0x1955[43]:return _0x1955[49]+ _0xf84cx8+ _0x1955[52]+ _0xf84cx7+ _0x1955[53];break;case _0x1955[46]:_0xf84cx7= _0xf84cx7[_0x1955[56]](1,_0xf84cx7[_0x1955[55]]- 1);return quote+ _0x1955[49]+ _0xf84cx8+ _0x1955[52]+ _0xf84cx7+ _0x1955[53]+ quote;break;case _0x1955[47]:return _0x1955[49]+ _0xf84cx8+ _0x1955[52]+ _0xf84cx7+ _0x1955[53];break;case _0x1955[48]:return _0x1955[49]+ _0xf84cx8+ _0x1955[52]+ _0xf84cx7+ _0x1955[53];break}})};MeteorToys[_0x1955[57]]= function(_0xf84cx6){if( typeof _0xf84cx6=== _0x1955[37]){return _0x1955[58]};_0xf84cx6= _0xf84cx6[_0x1955[40]](/&/g,_0x1955[42])[_0x1955[40]](/</g,_0x1955[41])[_0x1955[40]](/>/g,_0x1955[39]);return _0xf84cx6[_0x1955[40]](/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(_0xf84cx7){var _0xf84cx8=_0x1955[43];if(/^"/[_0x1955[44]](_0xf84cx7)){if(/:$/[_0x1955[44]](_0xf84cx7)){_0xf84cx8= _0x1955[45]}else {_0xf84cx8= _0x1955[46]}}else {if(/true|false/[_0x1955[44]](_0xf84cx7)){_0xf84cx8= _0x1955[47]}else {if(/null/[_0x1955[44]](_0xf84cx7)){_0xf84cx8= _0x1955[48]}}};quote= _0x1955[49]+ _0xf84cx8+ _0x1955[50];switch(_0xf84cx8){case _0x1955[45]:_0xf84cx7= _0xf84cx7[_0x1955[40]](/"/g,_0x1955[51]);_0xf84cx7= _0xf84cx7[_0x1955[40]](/:/g,_0x1955[51]);if(_0xf84cx7=== _0x1955[59]){return quote+ _0x1955[49]+ _0xf84cx8+ _0x1955[60]+ _0xf84cx7+ _0x1955[53]+ quote+ _0x1955[54]}else {return quote+ _0x1955[49]+ _0xf84cx8+ _0x1955[61]+ _0xf84cx7+ _0x1955[53]+ quote+ _0x1955[54]};break;case _0x1955[43]:return _0x1955[49]+ _0xf84cx8+ _0x1955[61]+ _0xf84cx7+ _0x1955[53];break;case _0x1955[46]:_0xf84cx7= _0xf84cx7[_0x1955[56]](1,_0xf84cx7[_0x1955[55]]- 1);return _0x1955[49]+ _0xf84cx8+ _0x1955[62]+ _0xf84cx7+ _0x1955[63];break;case _0x1955[47]:return _0x1955[49]+ _0xf84cx8+ _0x1955[61]+ _0xf84cx7+ _0x1955[53];break;case _0x1955[48]:return _0x1955[49]+ _0xf84cx8+ _0x1955[61]+ _0xf84cx7+ _0x1955[53];break}})};MeteorToys[_0x1955[64]]= function(){if(ToyKit[_0x1955[3]](_0x1955[65])){ToyKit[_0x1955[4]](_0x1955[65],null)}else {window[_0x1955[8]][_0x1955[66]]()}};MeteorToys[_0x1955[67]]= function(){if( typeof METEORTOYS_DISABLE_LOGGING=== _0x1955[37]){return true}else {return false}};MeteorToys[_0x1955[68]]= function(_0xf84cx9){MeteorToys[_0x1955[4]](_0x1955[65],_0xf84cx9)};MeteorToys[_0x1955[69]]= ToyKitData;MeteorToysDict= MeteorToys;MeteorToys_JSON= MeteorToys
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/client/template.main.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("MeteorToys_notifications");
Template["MeteorToys_notifications"] = new Template("Template.MeteorToys_notifications", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("notifications_exist"));
  }, function() {
    return HTML.DIV({
      id: "MeteorToys_notifications",
      class: "MeteorToys_notifications MeteorToys_hide_Notifications",
      oncontextmenu: '$(".MeteorToys_notification").addClass("MeteorToys_Notifier_hideAnimation"); window.setTimeout(function(){Package["meteortoys:toykit"].MeteorToysNotifications.remove({});}, 300); return false;'
    }, Blaze.Each(function() {
      return Spacebars.call(view.lookup("notifications"));
    }, function() {
      return Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("type"))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      });
    }));
  });
}));

Template.__checkName("MeteorToys_notification_counter");
Template["MeteorToys_notification_counter"] = new Template("Template.MeteorToys_notification_counter", (function() {
  var view = this;
  return HTML.DIV({
    class: "MeteorToys_notification MeteorToys_notification_counter",
    id: function() {
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, HTML.DIV({
    class: "MeteorToys_notification_symbol"
  }, HTML.STRONG(Blaze.View("lookup:data", function() {
    return Spacebars.mustache(view.lookup("data"));
  }))), HTML.DIV({
    class: "MeteorToys_notification_text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })));
}));

Template.__checkName("MeteorToys_notification_text");
Template["MeteorToys_notification_text"] = new Template("Template.MeteorToys_notification_text", (function() {
  var view = this;
  return HTML.DIV({
    class: "MeteorToys_notification",
    id: function() {
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, HTML.Raw('<div class="MeteorToys_notification_symbol"><strong></strong></div>'), HTML.DIV({
    class: "MeteorToys_notification_text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })));
}));

Template.__checkName("MeteorToys_notification_data");
Template["MeteorToys_notification_data"] = new Template("Template.MeteorToys_notification_data", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "MeteorToys_notification", Spacebars.mustache(view.lookup("expanded")) ];
    },
    id: function() {
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, HTML.Raw('<div class="MeteorToys_notification_symbol"><div class="MeteorToys_notification_triangle"></div></div>'), HTML.DIV({
    class: "MeteorToys_notification_text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), Blaze.If(function() {
    return Spacebars.call(view.lookup("lazyload"));
  }, function() {
    return HTML.DIV({
      class: "MeteorToys_notification_data"
    }, HTML.PRE(Blaze.View("lookup:data", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("data")));
    })));
  }));
}));

Template.__checkName("MeteorToys_notification_widget");
Template["MeteorToys_notification_widget"] = new Template("Template.MeteorToys_notification_widget", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("count"));
  }, function() {
    return [ "\n\t", HTML.DIV({
      class: "MeteorToys_notification_widget"
    }, "\n\t\t", Blaze.View("lookup:count", function() {
      return Spacebars.mustache(view.lookup("count"));
    }), "\n\t"), "\n\t" ];
  });
}));

Template.__checkName("MeteorToy");
Template["MeteorToy"] = new Template("Template.MeteorToy", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "MeteorToys_orb MeteorToys_hide_Orb ", Spacebars.mustache(view.lookup("type")), " ", Spacebars.mustache(view.lookup("state")) ];
    },
    id: function() {
      return Spacebars.mustache(view.lookup("name"));
    },
    oncontextmenu: "Package['meteortoys:toykit'].MeteorToys.closeToy();return false;"
  }, "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("empty"));
  }, function() {
    return [ "\n\t\t\t", Blaze._InOuterTemplateScope(view, function() {
      return Spacebars.include(function() {
        return Spacebars.call(view.templateContentBlock);
      });
    }), "\n\t\t" ];
  }, function() {
    return [ "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_icon"
    }), "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_orb_wrapper"
    }, "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("load"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n\t\t\t\t" ];
    }), "\n\t\t\t"), "\n\t\t" ];
  }), "\n\t");
}));

Template.__checkName("MeteorToys_tooltip");
Template["MeteorToys_tooltip"] = new Template("Template.MeteorToys_tooltip", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("display"));
  }, function() {
    return [ "\n\t", HTML.DIV({
      class: "MeteorToys_tooltip_wrapper MeteorToys_notification_fadeInUp",
      style: function() {
        return [ "left: ", Spacebars.mustache(view.lookup("position")), "px;" ];
      }
    }, "\n\t\t", HTML.DIV({
      class: "MeteorToys_tooltip "
    }, "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_tooltip_arrow1"
    }), "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_tooltip_arrow2"
    }), "\n\t\t\t", Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    }), "\n\t\t"), "\n\t"), "\n\t" ];
  });
}));

Template.__checkName("MeteorToys_basic");
Template["MeteorToys_basic"] = new Template("Template.MeteorToys_basic", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("MeteorToys_basic")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {
      return [ HTML.DIV({
        class: "MeteorToys_Method_header"
      }, HTML.DIV({
        class: "MeteorToys_name"
      }, HTML.STRONG("Meteor Toys Pro"))), HTML.DIV({
        style: "padding-left: 8px"
      }, HTML.FORM(HTML.DIV({
        class: "MeteorToys_row"
      }, HTML.INPUT({
        id: "meteortoyscadf"
      }), HTML.DIV({
        class: "MeteorToys_row_name"
      }, "Email")), HTML.DIV({
        class: "MeteorToys_row"
      }, HTML.INPUT({
        id: "meteortoyspass"
      }), HTML.DIV({
        class: "MeteorToys_row_name"
      }, "Key")), HTML.INPUT({
        type: "submit",
        value: "Activate",
        style: "margin-top: -4px; padding-right: 8px; margin-left: -8px; border-right: 8px sold transparent;"
      }), HTML.DIV({
        style: "height: 156px"
      }), "Experience the next level", HTML.BR(), "of Mongol and JetSetter. ", HTML.BR(), HTML.A({
        href: "http://bit.ly/1FqdsPM"
      }, "Upgrade to Meteor Toys Pro ", HTML.CharRef({
        html: "&raquo;",
        str: "»"
      })))) ];
    });
  });
}));

Template.__checkName("MeteorToys");
Template["MeteorToys"] = new Template("Template.MeteorToys", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Meteor Toys Begin -->\n\t"), Blaze.If(function() {
    return Spacebars.call(view.lookup("MeteorToys"));
  }, function() {
    return Blaze.If(function() {
      return Spacebars.call(view.lookup("MeteorToysCordova"));
    }, function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("MeteorToys_Pro"));
      }, function() {
        return Spacebars.include(view.lookupTemplate("MeteorToysMobile"));
      });
    }, function() {
      return [ Blaze.If(function() {
        return Spacebars.call(view.lookup("MeteorToys_Pro"));
      }, function() {
        return [ Spacebars.include(view.lookupTemplate("MeteorToys_tooltip")), HTML.DIV({
          class: "MeteorToys_orbs MeteorToysReset"
        }, Blaze.Each(function() {
          return Spacebars.call(view.lookup("MeteorToy"));
        }, function() {
          return Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("."))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          });
        }), Blaze.Each(function() {
          return Spacebars.call(view.lookup("MeteorToy_addon"));
        }, function() {
          return Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("."))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          });
        })), Spacebars.include(view.lookupTemplate("MeteorToys_notifications")) ];
      }, function() {
        return HTML.DIV({
          class: "MeteorToys_orbs MeteorToysReset"
        }, Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("all"))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        }), Blaze.Each(function() {
          return Spacebars.call(view.lookup("MeteorToy_addon"));
        }, function() {
          return Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("."))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          });
        }));
      }), Blaze.Each(function() {
        return Spacebars.call(view.lookup("MeteorToysPackage"));
      }, function() {
        return Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("."))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        });
      }) ];
    });
  }, function() {
    return Blaze.If(function() {
      return Spacebars.call(view.lookup("MTtoggle"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("MeteorToysToggle"));
    });
  }), Spacebars.include(view.lookupTemplate("MeteorToys_notification_widget")), HTML.Raw("<!-- Meteor Toys End -->") ];
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/client/main.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _0xc304=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4E\x6F\x74\x69\x66\x79","\x63\x6F\x75\x6E\x74\x65\x72","\x73\x65\x74","\x64\x69\x73\x70\x6C\x61\x79","\x67\x65\x74","\x6C\x6F\x67","\x75\x70\x64\x61\x74\x65","\x69\x6E\x73\x65\x72\x74","\x66\x69\x6E\x64\x4F\x6E\x65","\x5F\x69\x64","\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74\x43\x6F\x75\x6E\x74\x65\x72","\x74\x65\x78\x74","\x75\x6E\x72\x65\x61\x64","\x74\x79\x70\x65","\x64\x61\x74\x61","\x63\x75\x72\x72\x65\x6E\x74","\x66\x6F\x63\x75\x73","\x66\x6F\x63\x75\x73\x32","\x65\x71\x75\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4E\x6F\x74\x69\x66\x69\x65\x72\x5F\x68\x69\x64\x65\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E","\x61\x64\x64\x43\x6C\x61\x73\x73","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F","\x72\x65\x6D\x6F\x76\x65","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x65\x78\x70\x61\x6E\x64","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E","\x61\x75\x74\x6F\x72\x75\x6E","\x66\x69\x6E\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x65\x78\x70\x61\x6E\x64\x4F\x72\x52\x65\x6D\x6F\x76\x65","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x73\x68\x72\x69\x6E\x6B","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61\x5F\x65\x78\x70\x61\x6E\x64\x65\x64","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x77\x69\x64\x67\x65\x74","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x74\x72\x6C\x4B\x65\x79","\x63\x6C\x65\x61\x72\x41\x6C\x6C\x44\x61\x74\x61","\x6B\x65\x79\x64\x6F\x77\x6E","\x6E\x61\x6D\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x6C\x6F\x61\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x61\x63\x74\x69\x76\x65","\x68\x61\x73\x43\x6C\x61\x73\x73","\x23","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x63\x6F\x6E\x64\x65\x6E\x73\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x63\x6F\x72\x65","\x72\x65\x67\x69\x73\x74\x72\x79","\x61\x64\x64\x6F\x6E","\x55\x4E\x4B\x4E\x4F\x57\x4E","\x6C\x65\x66\x74","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x6F\x6F\x6C\x74\x69\x70","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x4E\x6F\x74\x65","\x54\x6F\x20\x75\x73\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x2C\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x74\x68\x65\x20\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x20\x70\x61\x63\x6B\x61\x67\x65\x2E","\x46\x6F\x72\x20\x74\x68\x65\x20\x77\x68\x79\x20\x61\x6E\x64\x20\x68\x6F\x77\x2C\x20\x67\x6F\x20\x74\x6F\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x2F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x62\x6F\x64\x79","\x72\x65\x6E\x64\x65\x72","\x64\x65\x66\x65\x72","\x63\x68\x65\x63\x6B\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x73\x74\x61\x72\x74\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x4B\x65\x79\x73","\x67\x72\x61\x62\x54\x6F\x79\x73","\x73\x74\x61\x72\x74\x75\x70","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x72\x6F","\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65\x64","\x72\x65\x67\x69\x73\x74\x65\x72\x48\x65\x6C\x70\x65\x72","\x6B\x65\x79\x73","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C","\x70\x75\x73\x68","\x6D\x73\x61\x76\x69\x6E\x3A\x6A\x65\x74\x73\x65\x74\x74\x65\x72","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x61\x6C\x6C\x74\x68\x69\x6E\x67\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x61\x73\x69\x63","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x6D\x6F\x62\x69\x6C\x65","\x6F\x62\x6A\x65\x63\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x69\x50\x68\x6F\x6E\x65","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x67\x67\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x63\x6C\x65\x61\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x61\x73\x73\x77\x6F\x72\x64","\x67\x65\x74\x49\x74\x65\x6D","\x73\x65\x74\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x6D\x6F\x76\x65","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x6B\x65\x79\x73\x2E","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x72\x65\x6D\x6F\x76\x65\x64\x20\x66\x72\x6F\x6D\x20\x74\x68\x69\x73\x20\x62\x72\x6F\x77\x73\x65\x72\x2E\x20\x42\x65\x20\x73\x75\x72\x65\x20\x74\x6F\x20\x72\x75\x6E\x20\x74\x68\x69\x73\x20\x66\x6F\x72\x20\x65\x61\x63\x68\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x79\x6F\x75\x20\x75\x73\x65\x20\x66\x6F\x72\x20\x64\x65\x62\x75\x67\x67\x69\x6E\x67\x2E","\x72\x65\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x61\x6C\x6C","\x6F\x70\x65\x6E","\x63\x6C\x6F\x73\x65","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x63\x61\x64\x66","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x70\x61\x73\x73","","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x6E\x20\x65\x6D\x61\x69\x6C","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x76\x65\x72\x69\x66\x79\x44\x6F\x63","\x54\x68\x61\x6E\x6B\x73\x20\x66\x6F\x72\x20\x62\x75\x79\x69\x6E\x67\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x21","\x49\x6E\x76\x61\x6C\x69\x64\x20\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E"];MeteorToysNotifications=  new Mongo.Collection(null);MeteorToysNotifyDict=  new ReactiveDict(_0xc304[0]);MeteorToysNotifyDict[_0xc304[2]](_0xc304[1],0);Note= function(_0x7bd6x1,_0x7bd6x2){if(_0x7bd6x2=== _0xc304[1]){Counter(_0x7bd6x1)}else {Data(_0x7bd6x1,_0x7bd6x2)};if(ToyKit[_0xc304[4]](_0xc304[3])=== false){current= MeteorToysNotifyDict[_0xc304[4]](_0xc304[1]);MeteorToysNotifyDict[_0xc304[4]](_0xc304[1],current+ 1);console[_0xc304[5]](MeteorToysNotifyDict[_0xc304[4]](_0xc304[1]))}};Counter= function(_0x7bd6x1){var _0x7bd6x3;var _0x7bd6x4=function(){MeteorToysNotifications[_0xc304[6]]({type:_0xc304[1],text:_0x7bd6x1},{$inc:{data:+1}})};var _0x7bd6x5=function(){var _0x7bd6x6=MeteorToysNotifications[_0xc304[7]]({type:_0xc304[1],data:1,text:_0x7bd6x1,unread:true});_0x7bd6x3= _0x7bd6x6};var _0x7bd6x2=MeteorToysNotifications[_0xc304[8]]({"\x74\x79\x70\x65":_0xc304[1],"\x74\x65\x78\x74":_0x7bd6x1});if(_0x7bd6x2){_0x7bd6x4();_0x7bd6x3= _0x7bd6x2[_0xc304[9]]}else {_0x7bd6x5()};NotifyInternal[_0xc304[10]]()};Data= function(_0x7bd6x1,_0x7bd6x2){item= {};item[_0xc304[11]]= _0x7bd6x1;item[_0xc304[12]]= true;if(_0x7bd6x2){item[_0xc304[13]]= _0xc304[14];item[_0xc304[14]]= _0x7bd6x2}else {item[_0xc304[13]]= _0xc304[11]};var _0x7bd6x7=MeteorToysNotifications[_0xc304[7]](item);NotifyInternal[_0xc304[10]]()};NotifyClose= function(){MeteorToysNotifyDict[_0xc304[2]](_0xc304[15],null);MeteorToysNotifyDict[_0xc304[2]](_0xc304[16],null);MeteorToysNotifyDict[_0xc304[2]](_0xc304[17],null)};NotifyInternal= {"\x65\x78\x70\x61\x6E\x64":function(){MeteorToysNotifyDict[_0xc304[2]](_0xc304[15],self._id)},"\x72\x65\x6D\x6F\x76\x65":function(){if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[15],self._id)){MeteorToysNotifyDict[_0xc304[2]](_0xc304[15],false)};$(_0xc304[21]+ self[_0xc304[9]])[_0xc304[20]](_0xc304[19]);window[_0xc304[23]](function(){MeteorToysNotifications[_0xc304[22]](self._id)},300)},"\x65\x78\x70\x61\x6E\x64\x4F\x72\x52\x65\x6D\x6F\x76\x65":function(){if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[15],self._id)){NotifyInternal[_0xc304[22]](self._id)}else {NotifyInternal[_0xc304[24]]()}},"\x73\x68\x72\x69\x6E\x6B":function(){MeteorToysNotifyDict[_0xc304[2]](_0xc304[15],false)},"\x63\x6C\x65\x61\x72\x41\x6C\x6C\x44\x61\x74\x61":function(){$(_0xc304[25])[_0xc304[20]](_0xc304[19]);window[_0xc304[23]](function(){MeteorToysNotifications[_0xc304[22]]({})},300)},"\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74\x43\x6F\x75\x6E\x74\x65\x72":function(){if(ToyKit[_0xc304[4]](_0xc304[3])){return};current= MeteorToysNotifyDict[_0xc304[4]](_0xc304[1]);if(current){MeteorToysNotifyDict[_0xc304[2]](_0xc304[1],current+ 1)}else {MeteorToysNotifyDict[_0xc304[2]](_0xc304[1],1)}}};Tracker[_0xc304[26]](function(){if(ToyKit[_0xc304[4]](_0xc304[3])){MeteorToysNotifyDict[_0xc304[2]](_0xc304[1],0)}});Template[_0xc304[30]][_0xc304[29]]({"\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x5F\x65\x78\x69\x73\x74":function(){if(MeteorToysNotifications[_0xc304[8]]()){return true}},"\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73":function(){return MeteorToysNotifications[_0xc304[27]]()},"\x74\x79\x70\x65":function(){return _0xc304[28]+ this[_0xc304[13]]}});Template[_0xc304[30]][_0xc304[34]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){self= this;if(self[_0xc304[13]]=== _0xc304[14]){NotifyInternal[_0xc304[31]]()}else {NotifyInternal[_0xc304[22]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x73\x79\x6D\x62\x6F\x6C":function(_0x7bd6x8){_0x7bd6x8[_0xc304[32]]();self= this;if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[15],this._id)){NotifyInternal[_0xc304[33]]()}else {if(self[_0xc304[13]]=== _0xc304[14]){NotifyInternal[_0xc304[24]]()}}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61":function(_0x7bd6x8){_0x7bd6x8[_0xc304[32]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){MeteorToysNotifyDict[_0xc304[2]](_0xc304[16],this._id)},"\x6D\x6F\x75\x73\x65\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){MeteorToysNotifyDict[_0xc304[2]](_0xc304[16],false);current= MeteorToysNotifyDict[_0xc304[4]](_0xc304[15]);MeteorToysNotifyDict[_0xc304[2]](_0xc304[17],current)}});Template[_0xc304[37]][_0xc304[29]]({"\x65\x78\x70\x61\x6E\x64\x65\x64":function(){if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[15],this._id)){return _0xc304[35]}else {return false}},"\x6C\x61\x7A\x79\x6C\x6F\x61\x64":function(){if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[15],this._id)){return true};if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[16],this._id)){return true};if(MeteorToysNotifyDict[_0xc304[18]](_0xc304[17],this._id)){return true}},"\x64\x61\x74\x61":function(){return MeteorToys[_0xc304[36]](this[_0xc304[14]])}});Template[_0xc304[38]][_0xc304[29]]({"\x63\x6F\x75\x6E\x74":function(){return MeteorToysNotifyDict[_0xc304[4]](_0xc304[1])}});Template[_0xc304[38]][_0xc304[34]]({"\x63\x6C\x69\x63\x6B":function(){ToyKit[_0xc304[2]](_0xc304[3],true)}});$(document)[_0xc304[42]](function(_0x7bd6x8){if(_0x7bd6x8[_0xc304[39]]=== 67&& _0x7bd6x8[_0xc304[40]]){NotifyInternal[_0xc304[41]]();MeteorToysNotifyDict[_0xc304[2]](_0xc304[15])}});Template[_0xc304[49]][_0xc304[34]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){if(this[_0xc304[43]]=== _0xc304[44]){return false};if(this[_0xc304[43]]=== _0xc304[45]){return false};if(ToyKit[_0xc304[4]](_0xc304[15])=== this[_0xc304[43]]){ToyKit[_0xc304[2]](_0xc304[15],false)}else {ToyKit[_0xc304[2]](_0xc304[15],this[_0xc304[43]])}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x77\x72\x61\x70\x70\x65\x72":function(_0x7bd6x9,_0x7bd6xa){if($(_0xc304[48]+ this[_0xc304[43]])[_0xc304[47]](_0xc304[46])){_0x7bd6x9[_0xc304[32]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x61\x6D\x65":function(){ToyKit[_0xc304[2]](_0xc304[15],false)},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){ToyKit[_0xc304[2]](_0xc304[16],this[_0xc304[43]])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){ToyKit[_0xc304[2]](_0xc304[16])}});Template[_0xc304[49]][_0xc304[29]]({type:function(){if(this[_0xc304[13]]=== _0xc304[50]){return _0xc304[51]}},state:function(){if(ToyKit[_0xc304[18]](_0xc304[15],this[_0xc304[43]])){return _0xc304[46]}else {return _0xc304[52]}},load:function(){if(this[_0xc304[43]]=== _0xc304[53]){return true};if(ToyKit[_0xc304[18]](_0xc304[15],this[_0xc304[43]])){return true};if(ToyKit[_0xc304[18]](_0xc304[16],this[_0xc304[43]])){return true}},tmpName:function(){}});Template[_0xc304[60]][_0xc304[29]]({display:function(){var _0x7bd6xb=ToyKit[_0xc304[4]](_0xc304[16]);if(ToyKit[_0xc304[18]](_0xc304[15],_0x7bd6xb)){return false};if(ToyKit[_0xc304[4]](_0xc304[16])){return true}},name:function(){var _0x7bd6xb=ToyKit[_0xc304[4]](_0xc304[16]);if(_0x7bd6xb){if(ToyKit[_0xc304[4]](_0xc304[55])[_0xc304[54]][_0x7bd6xb]){return ToyKit[_0xc304[4]](_0xc304[55])[_0xc304[54]][_0x7bd6xb][_0xc304[43]]}else {if(ToyKit[_0xc304[4]](_0xc304[55])[_0xc304[56]][_0x7bd6xb]){return ToyKit[_0xc304[4]](_0xc304[55])[_0xc304[56]][_0x7bd6xb][_0xc304[43]]}else {return _0xc304[57]}}}},position:function(){name= ToyKit[_0xc304[4]](_0xc304[16]);pixels= $(_0xc304[48]+ name)[_0xc304[59]]()[_0xc304[58]];current= ToyKit[_0xc304[4]](_0xc304[16]);position= $(_0xc304[48]+ name)[_0xc304[59]]()[_0xc304[58]]+ 7,coordinate= (200- 46)*  -0.5,pixels= coordinate+ position;return pixels}});if(Package[_0xc304[61]]){}else {window[_0xc304[62]]= function(){console[_0xc304[5]](_0xc304[63]);console[_0xc304[5]](_0xc304[64])}};Meteor[_0xc304[72]](function(){Meteor[_0xc304[67]](function(){Blaze[_0xc304[66]](Template.MeteorToys,document[_0xc304[65]])});ToyKit[_0xc304[68]]();ToyKit[_0xc304[69]]();ToyKit[_0xc304[2]](_0xc304[16],null);ToyKit[_0xc304[70]]();ToyKit[_0xc304[71]]()});UI[_0xc304[75]](_0xc304[73],function(_0x7bd6xc){return ToyKit[_0xc304[4]](_0xc304[74])});Template[_0xc304[89]][_0xc304[29]]({MeteorToys:function(){return ToyKit[_0xc304[4]](_0xc304[3])},MeteorToy:function(){data= ToyKit[_0xc304[4]](_0xc304[55])[_0xc304[54]];keys= Object[_0xc304[76]](data);return keys},MeteorToy_addon:function(){data= ToyKit[_0xc304[4]](_0xc304[55])[_0xc304[56]];keys= Object[_0xc304[76]](data);return keys},MeteorToysPackage:function(){temp= [];if(Package[_0xc304[77]]){temp[_0xc304[79]](_0xc304[78])};if(Package[_0xc304[80]]){temp[_0xc304[79]](_0xc304[81])};if(ToyKit[_0xc304[4]](_0xc304[74])){temp[_0xc304[79]](_0xc304[30])};return temp},all:function(){if(Package[_0xc304[82]]){return _0xc304[83]}},MeteorToysCordova:function(){if(Package[_0xc304[84]]){if( typeof cordova=== _0xc304[85]|| navigator[_0xc304[86]]=== _0xc304[87]){return true}}},MTtoggle:function(){if(Package[_0xc304[88]]){return true}}});window[_0xc304[89]]= {};window[_0xc304[89]][_0xc304[90]]= function(){password= localStorage[_0xc304[92]](_0xc304[91]);email= localStorage[_0xc304[92]](_0xc304[53]);localStorage[_0xc304[90]]();localStorage[_0xc304[93]](_0xc304[91],password);localStorage[_0xc304[93]](_0xc304[53],email)};window[_0xc304[89]][_0xc304[22]]= function(){Meteor[_0xc304[100]](_0xc304[94],function(_0x7bd6x8,_0x7bd6xd){if(_0x7bd6x8){alert(_0xc304[95])}else {localStorage[_0xc304[96]](_0xc304[91]);localStorage[_0xc304[96]](_0xc304[53]);alert(_0xc304[97]);window[_0xc304[99]][_0xc304[98]]()}})};window[_0xc304[89]][_0xc304[101]]= function(){ToyKit[_0xc304[2]](_0xc304[3],true);ToyKit[_0xc304[2]](_0xc304[16],null)};window[_0xc304[89]][_0xc304[102]]= function(){ToyKit[_0xc304[2]](_0xc304[3],false);ToyKit[_0xc304[2]](_0xc304[16],null)};Template[_0xc304[83]][_0xc304[34]]({"\x73\x75\x62\x6D\x69\x74":function(_0x7bd6x8,_0x7bd6xa){_0x7bd6x8[_0xc304[103]]();em= $(_0xc304[105])[_0xc304[104]](),pw= $(_0xc304[106])[_0xc304[104]]();if(em=== _0xc304[107]){alert(_0xc304[108]);return false};if(pw=== _0xc304[107]){alert(_0xc304[109]);return false};Meteor[_0xc304[100]](_0xc304[110],em,pw,function(_0x7bd6x8,_0x7bd6xd){if(_0x7bd6xd){Meteor[_0xc304[100]](_0xc304[89],function(_0x7bd6x8,_0x7bd6xd){ToyKit[_0xc304[2]](_0xc304[74],_0x7bd6xd)});alert(_0xc304[111]);localStorage[_0xc304[93]](_0xc304[53],em);localStorage[_0xc304[93]](_0xc304[91],pw)}else {alert(_0xc304[112])}})}})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("meteortoys:toykit", {
  MeteorToysData: MeteorToysData,
  MeteorToys: MeteorToys,
  ToyKit: ToyKit,
  Note: Note,
  MeteorToys_JSON: MeteorToys_JSON,
  MeteorToysDict: MeteorToysDict
});

})();