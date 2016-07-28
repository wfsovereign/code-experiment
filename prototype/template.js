var _ = require('underscore');






function date (date) {
    console.log(arguments);
    console.log(arguments.length);
    _.each(arguments,function(item) {
        console.log(item);
    });
}
date('123','234');







