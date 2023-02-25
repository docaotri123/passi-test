import { spawn } from 'child_process';

const prismaDeploy = spawn('npx', ['prisma', 'migrate', 'deploy']);

prismaDeploy.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

prismaDeploy.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

prismaDeploy.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
