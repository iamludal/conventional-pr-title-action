const core = require('@actions/core');
const npm = require('npm');

/**
 * Install preset
 * @returns {Promise<void>}
 */
module.exports = (preset) => (
  new Promise((resolve, reject) => {
    core.debug(`Installing preset ${preset}`);
    npm.commands.install([preset], (err) => {
      if (err) {
        core.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  })
);
