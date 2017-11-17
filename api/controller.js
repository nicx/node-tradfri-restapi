'use strict';

var config = require("config");
const tradfri = require('node-tradfri-argon').create({
    coapClientPath: config.coapClientPath,
    securityId: config.securityId,
    identity: config.identity,
    hubIpAddress: config.hubIpAddress,
    preshared_key: config.preshared_key
});

exports.register = function (req, res) {
	tradfri.register().then(key => {
	    res.json({
	        items: key,
            status: "ok"
        });
    }).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });
}

exports.getDeviceIds = function (req, res) {
    tradfri.getDeviceIds().then(deviceIds => {
        res.json({
            items: deviceIds,
            status: "ok"
        });
    }).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });

}

exports.getDevices = function (req, res) {
    tradfri.getDevices().then(devices => {
        res.json({
            items: devices,
            status: "ok"
        });
    }).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });

}
exports.getGroupIds = function (req, res) {
    tradfri.getGroupIds().then(groupIds => {
        res.json({
            items: groupIds,
            status: "ok"
        });
    }).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });

}

exports.getGroups = function (req, res) {
    tradfri.getGroups().then(groups => {
        res.json({
            items: groups,
            status: "ok"
        });
    }).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });

}

exports.getAll = function (req, res) {
    tradfri.getAll().then(groups => {
        res.json({
            items: groups,
            status: "ok"
        });
    }).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });
}


exports.setDevice = function (req, res) {
    var q = {
        state: req.params.state
    };

    if (req.query.brightness && !isNaN(parseInt(req.query.brightness)) && req.query.brightness <= 255)
        q.brightness = req.query.brightness;

    tradfri.setDeviceState(req.params.deviceId, q).then(
        res.json({
            status: "ok"
        })
    ).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });

}

exports.setGroup = function (req, res) {
    var q = {
        state: req.params.state
    };

    if (req.query.brightness && !isNaN(parseInt(req.query.brightness)) && req.query.brightness <= 255)
        q.brightness = req.query.brightness;

    tradfri.setGroupState(req.params.groupId, q).then(
        res.json({
            status: "ok"
        })
    ).catch((err) => {
        res.json({
            items: [],
            status: "err"
        });
    });

}
