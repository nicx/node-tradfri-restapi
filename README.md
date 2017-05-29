# node-tradfri-restapi

What
---
A simple REST-API implementation of [node-tradfri-argon](https://www.npmjs.com/package/node-tradfri-argon) with the following commands

 - `/tradfri/deviceids` will provide an array of device ids
 - `/tradfri/groupids` will provide an array of group ids
 - `/tradfri/devices` will provide a full list of all devices including meta data
 - `/tradfri/groups` will provide a full list of all groups including devices and meta data
 - `/tradfri/device/:deviceid/:state` will set the state of a device (on/off). E.g. /tradfri/device/17101/on
 -  `/tradfri/group/:groupid/:state` will set the state of a device (on/off). E.g. /tradfri/device/11007/off

First release is a bit of a quick one. Exceptions needs to be managed and include toggle as an option. I did the API as I need to control my IKEA TRÅDFRI-lights with Node-RED but Node-RED does not support Node v7.x (I assume it will wait for the next LTS release) and a simple micro service is the short term solution to have it integrated and managed by Node-RED.

How
---
Setup libcoap as explained below

 1. Setup libcoap as explained below
 2. Rename `./config/default.json-sample` to `./config/default.json` and update with the IKEA hub information
 3. Run using node >4.4.7

Compiling libcoap
---
Install libcoap as descibed below for Debian/Ubuntu/Raspbian:
(credits to homebridge-tradfri)

```
$ apt-get install libtool git build-essential install autoconf automake
$ git clone --recursive https://github.com/obgm/libcoap.git
$ cd libcoap
$ git checkout dtls
$ git submodule update --init --recursive
$ ./autogen.sh
$ ./configure --disable-documentation --disable-shared
$ make```

You'll find the coap-client binary in ./examples