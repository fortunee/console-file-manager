import { exec } from 'child_process';
import readline from 'readline';

import { help, create, show, rename, del } from './command';

exec('mkdir output', (err, stdout, stderr) => { stderr });

const readLine = readline.createInterface(process.stdin, process.stdout);

/**
 * Application entry point
 */
function runApp() {
    readLine.question(`enter command or type help to see available commands: `, (input) => {

        let cmd = input.toLowerCase().split(' ');
        let command = cmd[0];
        let flag = cmd[1] ? cmd[1] : '';
        let resourceNames = [cmd[2], cmd[3]];

        switch (command) {
            case 'help':
                console.log('pulling up some help for you one sec...');
                help(runApp)
                break;
            case 'create':
                create(flag, resourceNames, runApp);
                break;
            case 'show':
                show(flag, resourceNames, runApp);
                break;
            case 'rename':
                rename(flag, resourceNames, runApp);
                break;
            case 'delete':
                del(flag, resourceNames, runApp);
                break;
            case 'q':
                console.log('bye for now...');
                process.exit()
                break;
            default:
                console.log('Invalid command. See help');
                runApp()
        }
    });

}

runApp();
