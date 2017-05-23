'use strict';

var config = require("config");
const tradfri = require('node-tradfri').create({
    coapClientPath: config.coapClientPath,
    securityId: config.securityId,
    hubIpAddress: config.ip
  });

exports.getDeviceIds = function(req,res){
   //console.log(req);
    tradfri.getDeviceIds().then(deviceIds => {
        res.json({items: deviceIds, status:"ok"});
    });
}

exports.getDevices = function(req,res){
   //console.log(req);
    tradfri.getDevices().then(devices => {
        res.json({items: devices, status:"ok"});
    });
}
exports.getGroupIds = function(req,res){
   //console.log(req);
    tradfri.getGroupIds().then(groupIds => {
        res.json({items: groupIds, status:"ok"});
    });
}

exports.getGroups = function(req,res){
   //console.log(req);
    tradfri.getGroups().then(groups => {
        res.json({items: groups, status:"ok"});
    });
}


exports.setDevice = function(req,res){
    var q = {state: req.params.state};

    if (req.query.brightness && !isNaN(parseInt(req.query.brightness)) && req.query.brightness<=255)
        q.brightness = req.query.brightness;

    tradfri.setDeviceState(req.params.deviceId, q).then(
            res.json({status:"ok"})
        );
}

exports.setGroup = function(req,res){
    var q = {state: req.params.state};

    if (req.query.brightness && !isNaN(parseInt(req.query.brightness)) && req.query.brightness<=255)
        q.brightness = req.query.brightness;

    tradfri.setGroupState(req.params.groupId, q).then(
            res.json({status:"ok"})
        );
}
