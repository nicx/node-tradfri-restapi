# node-tradfri-restapi

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