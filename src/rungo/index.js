const exec = require('child_process').exec
const iconv = require('iconv-lite');

let cmdProcess;

export function start (cmdstr) {
    // 任何你期望执行的cmd命令，ls都可以
   if (cmdProcess && cmdProcess.exitCode === null){
       return
   }

    let cmdPath = './GoATuber/'
    // 子进程名称

    runExec(cmdstr)

    function runExec (cmdStr ) {
        cmdProcess = exec(cmdStr, { cwd: cmdPath })
        // 打印正常的后台可执行程序输出
        cmdProcess.stdout.on('data', function (data ) {
            data = Buffer.from(data)
            const stdoutStr = iconv.decode(data, 'gbk');// 将输出从GBK编码转换为UTF-8编码
            ElMessage({
                message:stdoutStr,
                type:"success",
                duration:5000,
                showClose:true
            })
            console.log(stdoutStr)
        })
        // 打印错误的后台可执行程序输出
        cmdProcess.stderr.on('data', function (data ) {
            data = Buffer.from(data)
            const stderrStr = iconv.decode(data, 'gbk'); // 将输出从GBK编码转换为UTF-8编码
            // console.log('stderr: ' + stderrStr);

            ElMessage({
                message:stderrStr,
                type:"success",
                duration:5000,
                showClose:true
            })
            console.log(stderrStr)
        })
        // 退出之后的输出
        cmdProcess.on('close', function (code ) {

            console.log('out code：' + code)
        })


    }


}

export function Stop(){
    if (cmdProcess && cmdProcess.exitCode == null) {
        console.log()
        exec('taskkill /F /T /PID '+cmdProcess.pid , { encoding: 'buffer' },(error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            const stdoutStr = iconv.decode(stdout, 'gbk'); // 将输出从GBK编码转换为UTF-8编码
            ElMessage({
                message:stdoutStr,
                type:"success",
                duration:5000,
                showClose:true
            })


            console.log(`stdout: ${stdoutStr}`);
            const stderrStr = iconv.decode(stderr, 'gbk');
            if (stderrStr){

                console.log(stderrStr)
                ElMessage({
                    message:stderrStr,
                    type:"success",
                    duration:5000,
                    showClose:true
                })
            }

        })


    }
}

