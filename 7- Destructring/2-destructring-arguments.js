const savedFile = {
   name: 'repost',
   extension: 'jpg',
   size: 14020
};

// ES5
/*
const fileSummery = (file) => {
   return `The file is ${file.name}, and it's extension is ${file.extension} and Finally the size is ${file.size}`;
};

console.log(fileSummery(savedFile));
*/

// ES6
const fileSummery = ({ name, extension, size }, { color }) => {
   return `The file is ${name}, and it's extension is ${extension} and Finally the size is ${size}, and color is ${color}`;
};

console.log(fileSummery(savedFile, { color: 'red' }));