import { spawn } from 'child_process';

const migrationFns = {
    create: async (event: any, context: any, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;

        const prismaDeploy = spawn('npx', ['prisma', 'migrate', 'deploy']);

        prismaDeploy.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
            callback(null, { body: JSON.stringify({ message: 'ok' }) });
        });

        prismaDeploy.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            callback(null, { body: JSON.stringify({ message: 'error' }) });
        });

        prismaDeploy.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            callback(null, { body: JSON.stringify({ message: 'ok' }) });
        });

        callback(null, { body: JSON.stringify({ message: 'ok' }) });
    },
};

const create = migrationFns.create;

export { create };
