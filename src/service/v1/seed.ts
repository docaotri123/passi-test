const path = require('path');
const fs = require('fs');

export default class SeedService {
    public async create() {
        const seedDir = path.join(__dirname, '../../../seeds');
    
        const filenames = fs.readdirSync(seedDir);
        const _filenames = filenames.sort();
    
        for (const filename of _filenames) {
            if (filename !== 'index.js' && filename.slice(-3) === '.js') {
                const seedFile = require(path.join(seedDir, filename));
    
                if (seedFile.seed) {
                    await seedFile.seed();
                }
            }
        }
    }
}
