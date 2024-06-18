import { info } from '@nocke/util'
import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

/* returns the config object, overlaying
   • defaultConfig (excludes Dir info)
   • (localSyncDir)/.syncdocs.json (also serving as a marker file!)
*/

const PROJECTROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../')

// testmode (are we in the repo) is detected by some crucial files
// being present and right name in package.json
const isTestMode = () => {
  const filesToCheck = ['LICENSE.txt', 'README.md', 'package.json']

  for (const file of filesToCheck) {
    if (!fs.existsSync(path.join(PROJECTROOT, file))) {
      info(`Test Mode: ${file} not found`)
      return false
    }
  }

  const packageJsonPath = path.join(PROJECTROOT, 'package.json')
  if (!fs.existsSync(packageJsonPath)) {
    info(`Test Mode: package.json not found`)
    return false
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson.name && packageJson.name.toLowerCase().includes('syncdocs')
}

export default (cwd) => {
  info(`getConig | cwd: ${cwd}`)

  const testMode = isTestMode()
  info(`Test Mode: ${testMode}`)

  // check if there is a .syncdocs.json in the current dir
  const syncdocsJsonPath = path.join(PROJECTROOT, '.syncdocs.json')
  const hasSyncdocsJson = fs.existsSync(syncdocsJsonPath)
  if (hasSyncdocsJson) {
    // logic to handle the presence of .syncdocs.json
  } else {
    // logic to handle the absence of .syncdocs.json
  }


  return {
    'way': 'toGo'
  }
}