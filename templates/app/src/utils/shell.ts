// 执行shell命令
const child_process = require('child_process')

export function exec(cmd: string) {
  return new Promise((resolve, reject) => {
    child_process.exec(cmd, (error: Error, stdout: string, stderr: string) => {
      if (error) {
        reject({error, stderr})
      } else {
        resolve({stdout, stderr})
      }
    })
  })
}

export function mkdirp(folder: string) {
  return exec(`mkdir -p ${folder}`)
}

export function mv(source: string, target: string) {
  return exec(`\\mv ${source} ${target}`)
}

export function cp(source: string, target: string) {
  return exec(`\\cp ${source} ${target}`)
}
