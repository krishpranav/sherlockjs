(async function() {
    const {log} = console;
    const arg = require('arg');
    const path = require('path');
    const readline = require('readline');
    const chalk = require('chalk');
    const {fork} = require('child_process');

    const services = require(path.join(__dirname, 'services.json'));
    
})