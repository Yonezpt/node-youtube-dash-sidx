var fs = require('fs');
var path = require('path');
var Interface = require('./index');

var ID = '0uXssTfeHZM';

var options = {
    id:ID,
    audioonly:true,
    videoonly:false,
    chooseBest:true
};

Interface.start(options).then(results => {
    fs.writeFileSync(path.join(process.cwd(), `${ID}.json`), JSON.stringify(results, null, 4), 'utf-8');
});