const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: 'XCE2goRKHVLGq1LOwSNhDg',
  token: 'D5OGQxjAhxmbIjqnpZLS5jeGWqVCJW2OcEMANFNVfeopZmcEvc2fQq4tQ3At4a0kiVJhfys-6482TIXF7WFO81L7GCO5y0JyoL0GTAYeaHzx2fqMcK6Pigk80sm_WnYx',
});

yelp.search({ term: 'food', location: 'Los Angeles' })
  .then(data => {
    console.log('data');
  });
