import {
    exec
} from 'child_process';
import readline from 'readline';

exec('mkdir output', (err, stdout, stderr) => { stderr });

const rl = readline.createInterface(process.stdin, process.stdout);

function help() {
    rl.write(
        `
            create: 
                - creates a file or dir depending on specified parameter
                - parameters includes --file <file name> and --folder <folder name> 
                - eg. create --file text.txt
                - eg. create --folder newFolder

            show:
                - displays output directory content

            rename: 
                - renames a file or dir depending on specified parameter
                - parameters includes --file <file name> <new file name> 
                  and --folder <folder name> <new folder name>
                - eg. rename --file text.txt text2.txt
                - eg. rename --folder newFolder newFolder2

            delete: 
                - deletes a file or dir depending on specified parameter
                - parameters includes --file <file name> and --folder <folder name> 
                - eg. delete --file text.txt (specify an extension to the file name)
                - eg. delete --folder newFolder

            q:
                - this command exits out of the application

            help:
                - basically displays help/guide on how to use
        `
    )
    runApp();
}


function create(flag, [name = 'unnamed']) {
    if (flag === '--file') {
        exec(`touch output/${name}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
            }
            console.log(stdout);
            runApp();
        });
    } else if (flag === '--folder') {
        exec(`mkdir output/${name}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
            }
            console.log(stdout);
            runApp();
        });
    } else {
        console.log('Invalid flag, please specify a file or folder flag. See  help');
        runApp();
    }
}

function showDirectory() {
    exec('ls output', (err, stdout, stderr) => {
        if (err) {
            console.log('Error:', stderr.split(`${err.cmd}:`)[1]);
        }
        console.log(stdout);
        runApp();
    });
}

function del() {

    console.log(`deleted`);
    runApp();
}


function runApp() {
    rl.question(`enter command or type help to see available commands: `, (input) => {

        let cmd = input.toLowerCase().split(' ');
        let command = cmd[0];
        let flag = cmd[1] ? cmd[1] : '';
        let resourceNames = [cmd[2], cmd[3]];

        switch (command) {
            case 'help':
                console.log('pulling up some help for you one sec...');
                help()
                break;
            case 'create':
                create(flag, resourceNames);
                break;
            case 'show':
                showDirectory()
                break;
            case 'delete':
                console.log('delete operation underway');
                del();
                break;
            case 'q':
                console.log('bye for now...');
                process.exit()
                break;
            default:
                console.log('Invalid command');
                runApp()
        }
    });

}

let run = runApp();
