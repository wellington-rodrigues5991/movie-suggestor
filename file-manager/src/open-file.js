const load = require('open');

module.exports = {
    open: async file => { 
        await load(file, {wait: true}); 
        console.log('The image viewer app quit!');
    }
}