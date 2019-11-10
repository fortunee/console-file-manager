# console-file-manager
This is a simple node.js script that provides an interactive way for users to manage directories and  files efficiently via a command line terminal. 

When the application runs for the first time, a root directory called `output` is created this is where you find all the files and folders you will create when using the application.

### How to start
- Clone project `git clone https://github.com/fortunee/console-file-manager.git`
- Change directory into project
- Run `npm install`
- Run `npm start`

### Usage
#### To create a file|folder: 
 The `create` command basically creates a file or dir depending on specified parameter

It uses parameters `--file <file name>` for creating file and `--folder <folder name>` for creating directory/folder

Examples:  
- `create --file text.txt` - _this creates a file called text.txt in the `output` directory

- `create --folder newFolder` - creates a folder called newFolder withing the `output` directory

#### To see the content of a directory or file
The `show` command displays the content of a directory or file

It uses parameters `--file <file name>` for reading the content of a file within the terminal and `--folder <folder name>` for seeing the content of the specified folder

Exampls:
- `show --file text.txt`- This reads the content of `text.txt` via the terminal

- `show --folder newFolder` - This displays the content of the `newFolder` directory 

#### To rename a file or directory
The `rename` command basically renames a file or dir depending on specified parameters.

It uses parameters `--file <file name> <new file name>` for renaming a file, and `--folder <folder name> <new folder name>` for renaming a director/folder.

Examples:
- `rename --file text.txt text2.txt` - This renames file `text.txt` to `text2.txt`

- `rename --folder Folder Folder2` - This renames directory `Folder` to `Folder2`

#### To delete a file 
 The `delete` command basically deletes a file or directory depending on the specified parameters

It uses parameters `--file <file name>` and `--folder <folder name>`

Examples:

- `delete --file text.txt` - This deletes the `text.txt` file
- `delete --folder newFolder` - This deletes the directory `newFolder`

#### To exit out of the app:
The `q` command basically exits out the application

Example:

- `q`


#### To see help on how to use some commands on the terminal
The `help` command basically displays help/guide on how to use

Example:

- `help`
