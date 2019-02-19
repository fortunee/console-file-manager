import { exec } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);
let run = runApp();

// rl.setPrompt('App started >>>> \n');
// rl.prompt();

// rl.write('This a simple console file management app');

// exec("ls", (err, stdout, stderr) => {
//     if (err) {
//         console.log(stderr.split(`${err.cmd}:`)[1]);
//         return;
//     }
//     console.log(stdout);
// });

function runApp () {

    rl.question(`\n enter command or type help to see available commands: `, (cmd) => {
  
      let command = cmd.toLowerCase();

      switch(command) {
        case 'help':
            console.log('pulling up some help for you one sec...');
            help()
            break;
        case 'create':
            console.log('create operation underway...');
            create();
            break;
        case 'delete':
            console.log('delete operation underway');
            del();
            break;
        case 'rename':
            console.log('rename op');
            break;
        case 'q':
            console.log('bye for now...');
            process.exit()
            break;
        default:
            console.log('Invalid command');
      }
  
    //   if (command === "exit") {
    //     rl.write(`Application exited.`);
    //     process.exit();
    //   }
  
    //   rl.write(`Getting definition for 'word' ${word}` + `\n`);
  
    //   getWordDefinition(word)
    //     .then(function(reponse){
    //       displayDefintion(reponse.data, function() {
    //         runApp();
    //       });
  
    //     })
    //     .catch(function (response) {
    //       wordDefinitionError(response);
    //       runApp();
    //     });
    });
  
  }

function help() {
    rl.write(
        `
            create: 
                - creates a file or dir depending on specified parameter
                - parameters includes --file <file name> and --folder <folder name> 
                - eg. create --file text.txt
                - eg. create --folder newFolder

            rename: 
                - renames a file or dir depending on specified parameter
                - parameters includes --file <file name> <new file name> 
                  and --folder <folder name> <new folder name>
                - eg. rename --file text.txt text2.txt
                - eg. rename --folder newFolder newFolder2

            delete: 
                - deletes a file or dir depending on specified parameter
                - parameters includes --file <file name> and --folder <folder name> 
                - eg. delete --file text.txt
                - eg. delete --folder newFolder

            q:
                - this command exits out of the application

            help:
                - basically displays help/guide on how to use
        `
    )
}


function create() {

    return `created`
}

function rename() {
    
    return `renamed`
}

function del() {

    return `deleted`
}
  
//   function getWordDefinition(word) {
//       return axios.get(`http://api.wordnik.com:80/v4/word.json/${word}/definitions`, {
//       params: {
//         limit: 200,
//         includeRelated: true,
//         useCanonical: false,
//         includeTags: false,
//         api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
//       }
//     })
//   }
  
//   function wordDefinitionError(response) {
//     rl.write(`Error getting word defintion pleasee check word spelling.`);
//   }
  
//   function displayDefintion(arrayValue, cb) {
//     var numberFound = arrayValue.length;
//     rl.write(`Found ${numberFound} result(s): ` + `\n`);
  
//     arrayValue.forEach(function(item, idx) {
//       rl.write(`${idx + 1}` + `\n`);
//       rl.write(`Part of Speech:  ${item.partOfSpeech}` + `\n`);
//       rl.write(`Definition: ${item.text}` + `\n` + `\t`);
//     });
  
//     cb();
//   }
  
// run  = runApp();
