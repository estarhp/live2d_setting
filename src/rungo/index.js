const exec = require('child_process').exec
const iconv = require('iconv-lite');

let cmdProcess;

export function start (cmdstr) {
    // 任何你期望执行的cmd命令，ls都可以


    let cmdPath = './GoATuber/'
    // 子进程名称

    runExec(cmdstr)

    function runExec (cmdStr ) {
        cmdProcess = exec(cmdStr, { cwd: cmdPath })
        // 打印正常的后台可执行程序输出
        cmdProcess.stdout.on('data', function (data ) {
            console.log('stdout: ' + data)
        })
        // 打印错误的后台可执行程序输出
        cmdProcess.stderr.on('data', function (data ) {
            console.log('stderr: ' + data)
        })
        // 退出之后的输出
        cmdProcess.on('close', function (code ) {
            console.log('out code：' + code)
        })


    }


}

export function Stop(){
    if (cmdProcess) {

        exec('taskkill /F /T /PID '+cmdProcess.pid , { encoding: 'buffer' },(error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            const stdoutStr = iconv.decode(stdout, 'gbk'); // 将输出从GBK编码转换为UTF-8编码
            const stderrStr = iconv.decode(stderr, 'gbk');

            console.log(`stdout: ${stdoutStr}`);
            console.error(`stderr: ${stderrStr}`);
        })


    }
}

