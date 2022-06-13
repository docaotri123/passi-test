const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const seedDir = path.join(__dirname, '.');
const args = process.argv.slice(2);
let stage = 'dev';

args.forEach((arg) => {
    const [s, v] = arg.split('=');

    if (s === 'stage') {
        stage = v;
    }
});

const envs = yaml.load(
    fs.readFileSync(
        path.join(__dirname, `../serverless.${stage}.env.yml`),
        'utf8'
    )
);

Object.keys(envs).forEach((key) => {
    process.env[key] = envs[key];
});

fs.readdir(seedDir, async (error, filenames) => {
    if (error) {
        return;
    }

    const _filenames = filenames.sort();


    for (const filename of _filenames) {
        if (filename !== 'index.js' && filename.slice(-3) === '.js') {
            const seedFile = require(path.join(seedDir, filename)); //eslint-disable-line

            if (seedFile.seed) {
                // eslint-disable-next-line no-await-in-loop
                await seedFile.seed();
            }
        }
    }

    process.exit();
});
