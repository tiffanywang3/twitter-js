var swig = require('swig');
// in some file that is in the root directory of our application
var data = {
    title: 'An Example',
    people: [{
        name: 'Gandalf',
    }, {
        name: 'Frodo'
    }, {
        name: 'Hermione'
    }]
};
swig.renderFile(__dirname + '/views/index.html', data, function (err, output) {
    console.log(output);
});