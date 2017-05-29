# node-tradfri-restapi [![npm version](https://badge.fury.io/js/node-tradfri-restapi.svg)](https://badge.fury.io/js/node-tradfri-restapi)

What
---
A simple REST-API implementation of [node-tradfri-argon](https://www.npmjs.com/package/node-tradfri-argon) with the following commands

 - `/tradfri/deviceids` will provide an array of device ids
 - `/tradfri/groupids` will provide an array of group ids
 - `/tradfri/devices` will provide a full list of all devices including meta data
 - `/tradfri/groups` will provide a full list of all groups including devices id's and meta data
 - `/tradfri/all` will provide a full detailed list of groups and devices
 - `/tradfri/device/:deviceid/:state` will set the state of a device (on/off). E.g. /tradfri/device/17101/on
 -  `/tradfri/group/:groupid/:state` will set the state of a device (on/off). E.g. /tradfri/device/11007/off

First release is a bit of a quick one. Exceptions needs to be managed and include toggle as an option.

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
$ make
```

You'll find the coap-client binary in `./examples`