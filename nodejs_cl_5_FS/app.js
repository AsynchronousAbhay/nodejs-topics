const fs = require("fs");
const path = require("path");


//  try {
//      // fs.writeFileSync("file.txt", "hyyy! hello world");
//      // console.log("file created!");    
//  } catch (error) {
//     // console.log(error.message);
//  }

// try {
//     // const data = fs.readFileSync("file.txt", "utf-8");
//     // console.log(data);
// } catch (error) {
//     // console.log(error.message);
// }

// try {
//     // fs.appendFileSync("file.txt", "new data added!");
//     // console.log("data added!");
// } catch (error) {
//     // console.log(error.message);
// }

// try {
//     fs.unlinkSync("file.txt");
//     console.log("file deleted!");
// } catch (error) {
//     console.log(error.message);
// }

// console.log("done!");

// this function is work only in empty folder.....
// try {
//     fs.mkdirSync("dir");
//     console.log("folder created!");
// } catch (error) {
//     console.log(error.message);
// }

// try {
//     fs.mkdirSync("dir3/dir4")
//     console.log("folder created!");
// } catch (error) {
//     console.log(error.message);
// }

// this function is work only in empty folder.....
// try {
//     fs.rmdirSync("dir/dir2")
//     console.log("folder deleted!");
// } catch (error) {
//     console.log(error.message);
// }

// try {
//     fs.writeFileSync("dir3/dir4/demo.txt", "hello guys!!!");
//     console.log("new file has been created!!!!");
// } catch (error) {
//     console.log(error.message);
// }

// const folder_data = fs.readdirSync("dir3/dir4");
// console.log(folder_data);

// this is work on only empty folder!!!!!
try {
    fs.renameSync("dir", "dirr");
} catch (error) {
    console.log(error.message);
}


// dynamics paths......

const path1 = path.resolve("a", "b", "hello.txt");
console.log(path1);

console.log(path.join("a", "b", "hello.txt"));