var express = require('express');
var moment = require('moment');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/:ts", function(req, res) {
    var mnt = null;
    if(/^\d+$/.test(req.params.ts)){
        mnt = moment(parseInt(req.params.ts)*1000);
    }else{
        mnt = moment(req.params.ts);
    }
    res.json(getDatetime(mnt));
});

function getDatetime(mnt){
    var unix = null;
    var natural = null;
    if(mnt && mnt.toString() != 'Invalid date'){
        unix = mnt.format('X');
        natural = mnt.format('MMMM D, YYYY');
    }
    ans = {unix:unix, natural:natural};
    return ans;
}

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


