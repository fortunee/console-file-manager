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
                - displays directory or file content
                - parameters are --file <file name> and --folder <folder name> 
                - eg. show --file text.txt
                - eg. show --folder newFolder 

            rename: 
                - renames a file or dir depending on specified parameter
                - parameters includes --file <file name> <new file name> 
                  and --folder <folder name> <new folder name>
                - eg. rename --file text.txt text2.txt
                - eg. rename --folder Folder Folder2

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
            console.log(`file '${name}' created`, stdout, '\n');
            runApp();
        });
    } else if (flag === '--folder') {
        exec(`mkdir output/${name}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
            }
            console.log(`folder '${name}' created`, stdout, '\n');
            runApp();
        });
    } else {
        console.log('Invalid flag, please specify a file or folder flag. See  help');
        runApp();
    }
}

function showDirectory(flag, [ name ]) {
    if (!flag) {
        exec('ls output', (err, stdout, stderr) => {
            if (err) {
                console.log('Error:', stderr.split(`${err.cmd}:`)[1]);
            }
            console.log(`showing 'output' directory content >>> \n`);
            console.log(stdout);
            runApp();
        });
    } else if (flag === '--file') {
        exec(`cat output/${name}`, (err, stdout, stderr) => {
            if (err) {
                console.log('Error:', err);
            }
            console.log(`showing '${name}' file content >>> \n`);
            console.log(stdout);
            runApp();
        });
    } else if (flag === '--folder') {
        exec(`ls output/${name}`, (err, stdout, stderr) => {
            if (err) {
                console.log('Error:', err);
            }
            console.log(`showing '${name}' folder content >>> \n`);
            console.log(stdout);
            runApp();
        });
    } else {
        console.log('Invalid flag, please specify a file or folder flag. See  help');
        runApp();
    }
}

function rename (flag, [ oldName, newName ]) {
    if (flag === '--file') {
        exec(`mv output/${oldName} output/${newName}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
                runApp();
            }
            console.log(`file '${oldName}' renamed to '${newName}'`, stdout);
            runApp();
        });
    } else if (flag === '--folder') {
        exec(`mv output/${oldName} output/${newName}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
                runApp();
            }
            console.log(`folder '${oldName} renamed to '${newName}'`, stdout);
            runApp();
        });
    } else {
        console.log('Invalid flag, please specify a file or folder flag. See  help');
        runApp();
    }
}

function del(flag, [ name ]) {
    if (flag === '--file') {
        exec(`rm output/${name}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
                runApp();
            }
            console.log(`${name} deleted`, stdout);
            runApp();
        });
    } else if (flag === '--folder') {
        exec(`rm -r output/${name}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
                runApp();
            }
            console.log(`${name} deleted`, stdout);
            runApp();
        });
    } else {
        console.log('Invalid flag, please specify a file or folder flag. See  help');
        runApp();
    }
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
                showDirectory(flag, resourceNames);
                break;
            case 'rename':
                rename(flag, resourceNames);
                break;
            case 'delete':
                del(flag, resourceNames);
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
