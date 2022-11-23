import { load } from 'js-yaml';
import { readdir, readFileSync } from 'fs';
import * as path from 'path';

const seedDir = path.join(__dirname, '.');
const args = process.argv.slice(2);
let stage = 'dev';

args.forEach((arg) => {
    const [s, v] = arg.split('=');

    if (s === 'stage') {
        stage = v;
    }
});

const envs = load(
    readFileSync(
        path.join(__dirname, `../serverless.${stage}.env.yml`),
        'utf8'
    )
) || {};

Object.keys(envs).forEach((key) => {
    process.env[key] = envs[key];
});

readdir(seedDir, async (error, filenames) => {
    if (error) {
        return;
    }

    const _filenames = filenames.sort();

    for (const filename of _filenames) {
        if (filename !== 'index.ts' && filename.slice(-3) === '.ts') {
            const seedFile = require(path.join(seedDir, filename)); //eslint-disable-line

            if (seedFile.seed) {
                // eslint-disable-next-line no-await-in-loop
                await seedFile.seed();
            }
        }
    }

    process.exit();
});
