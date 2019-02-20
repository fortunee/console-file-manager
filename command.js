import { exec } from 'child_process';

const help = (runApp) => {
    console.log(
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

const create = (flag, [name = 'unnamed'], runApp) => {
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

const show = (flag, [ name ], runApp) => {
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

const rename  = (flag, [ oldName, newName ], runApp) => {
    if (flag === '--file') {
        exec(`mv output/${oldName} output/${newName}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
                runApp();
            }
            console.log(`file '${oldName}' renamed to '${newName}'`, stdout, '\n');
            runApp();
        });
    } else if (flag === '--folder') {
        exec(`mv output/${oldName} output/${newName}`, (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
                runApp();
            }
            console.log(`folder '${oldName} renamed to '${newName}'`, stdout, '\n');
            runApp();
        });
    } else {
        console.log('Invalid flag, please specify a file or folder flag. See  help');
        runApp();
    }
}

const del = (flag, [ name ], runApp) => {
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


export {
    help,
    create,
    show,
    rename,
    del
}
