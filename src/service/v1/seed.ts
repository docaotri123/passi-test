const path = require('path');
const fs = require('fs');

export default class SeedService {
    public async create() {
        const seedDir = path.join(__dirname, '../../../seeds');
        console.log('seed')
    
        const filenames = fs.readdirSync(seedDir);
        const _filenames = filenames.sort();
    
        for (const filename of _filenames) {
            if (filename !== 'index.ts' && filename.slice(-3) === '.ts') {
                const seedFile = require(path.join(seedDir, filename));
    
                if (seedFile.seed) {
                    await seedFile.seed();
                }
            }
        }
    }
}
