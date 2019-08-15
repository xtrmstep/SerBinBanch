import fs from "fs";

let content = fs.readFileSync('./src/data/file1mb.json');
let jsonContent = JSON.parse(content.toString());

export default jsonContent;
