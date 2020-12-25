const QrcodeTerminal = require('qrcode-terminal');
const { ScanStatus } = require('wechaty-puppet')

/**
 * @method onScan 当机器人需要扫码登陆的时候会触发这个事件。 建议你安装 qrcode-terminal(运行 npm install qrcode-terminal) 这个包，这样你可以在命令行中直接看到二维码。
 * @param {*} qrcode 
 * @param {*} status 
 */
const onScan = async (qrcode, status) => {
    try {
        if (status === ScanStatus.Waiting) {
            console.log(`========================👉二维码状态：${status}👈========================\n\n`)
            QrcodeTerminal.generate(qrcode, {
                small: true
            })
        }
    } catch (error) {
        console.log('onScan', error)
    }

}

module.exports = { onScan }