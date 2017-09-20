'use strict';
module.exports = agent => {
    agent.messenger.on('egg-ready', () => {
        console.log('****agent start*******');
    });
};
