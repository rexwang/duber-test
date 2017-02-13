var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var async = require('async');
var GOOGLE_MAP_DISTANCE_KEY = 'AIzaSyCPKNtsMVPDJ_hzcTaXmJpXNiXvRaQl3uA';
var GOOGLE_MAP_API = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=98101&destinations=';

express()
  .use(bodyParser.json({
    limit: '50mb'
  }))
  .get('/api/distance', function(req, response) {
    request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins= 98101&destinations=98632|98002&key= AIzaSyCPKNtsMVPDJ_hzcTaXmJpXNiXvRaQl3uA', function(error, res, body) {
      if (!error && res.statusCode == 200) {
        response.json(body);
      }
    });
  })
  .post('/api/distance', function(req, res) {
    var retailers = req.body.retailers;
    var origin = req.body.origin;
    var tempArr;
    var chunk = 25;
    var result = [];

    for (var i = 0; i < retailers.length; i += chunk) {
      tempArr = retailers.slice(i, i + chunk);
      var destination = '';
      tempArr.forEach(function(retailer) {
        destination += retailer.address + '|';
      });
      request(GOOGLE_MAP_API + destination + '&key=' + GOOGLE_MAP_DISTANCE_KEY)
    }
  })
  .listen(4000);
