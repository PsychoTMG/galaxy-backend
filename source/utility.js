import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const currentFile = dirname(dirname(fileURLToPath(import.meta.url)))

export { currentFile }