//First Day
/**
 * console.log("hello from node.js");
 * console.log("this is my second file");
 */

//Reading And Writing to a file, This method is called Syncronous method.
/**
 * const fs=require('fs');
 * let textn=fs.readFileSync('./File_Tests/input.txt','utf-8');
 * console.log(textn);
 * Now lets read and write this content into another file.
 fs.writeFileSync('./File_Tests/output.txt',"This is output from input.txt file"+textn);
*/

//Reading and writing to a file, this method called ASyncronous method

const fs=require('fs');

fs.readFile("./File_Tests/start.txt", 'utf-8',(error,data)=>{
console.log(data);


});