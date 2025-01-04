import { currentFile } from "../utility.js";
import { join } from "node:path"
import { readFileSync } from "node:fs";


const currentBaseData = join(currentFile, 'data', 'base.json')
const currectBD = readFileSync(currentBaseData, 'utf-8')
const database = JSON.parse(currectBD)

export { database }

