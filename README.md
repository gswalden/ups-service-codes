[![npm version](https://badge.fury.io/js/ups-service-codes.svg)](https://badge.fury.io/js/ups-service-codes)
[![Build status](https://travis-ci.org/gswalden/ups-service-codes.svg?branch=master)](https://travis-ci.org/gswalden/ups-service-codes)

### Install
```sh
npm install --save ups-service-codes
```

### Use
```sh
var upsCodes = require('ups-service-codes');
console.log(upsCodes['03']);         // UPS Ground
console.log(upsCodes.isValid('03')); // true
console.log(upsCodes.isValid('00')); // false
```

### Reference table
|Code|Description
|-|-
|Domestic
|14|UPS Next Day Air Early
|01|UPS Next Day Air
|13|UPS Next Day Air Saver
|59|UPS 2nd Day Air A.M.
|02|UPS 2nd Day Air
|12|UPS 3 Day Select
|03|UPS Ground
|International
|11|UPS Standard
|07|UPS Worldwide Express
|54|UPS Worldwide Express Plus
|08|UPS Worldwide Expedited
|65|UPS Worldwide Saver
|96|UPS Worldwide Express Freight
|82|UPS Today Standard
|83|UPS Today Dedicated Courier
|84|UPS Today Intercity
|85|UPS Today Express
|86|UPS Today Express Saver
|70|UPS Access Point Economy

### Source
Retrieved from [UPS Developer Kit](https://www.ups.com/upsdeveloperkit) on January 15, 2016.
