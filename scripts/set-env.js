const fs = require('fs');
const yargs = require('yargs');

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = yargs.argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment${environment ? '.' + environment : ''}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  config: {
    apiKey: '${process.env.API_KEY}',
    authDomain: '${process.env.AUTH_DOMAIN}',
    databaseURL: '${process.env.DATABASE_URL}',
    projectId: '${process.env.PROJECT_ID}',
    storageBucket: '${process.env.STORAGE_BUCKET}',
    messagingSenderId: '${process.env.MESSAGING_SENDER_ID}',
  }
};
`
fs.writeFile(targetPath, envConfigFile, function(err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output generated at ${targetPath} \n`);
});
