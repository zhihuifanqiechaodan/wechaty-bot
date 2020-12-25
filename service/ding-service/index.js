const dayjs = require('dayjs');
const axios = require('axios')
const config = require("../config/index") // 配置文件

/**
 * @method notificationLoginInformation 机器人登录登出提醒/通知钉钉接口
 * @param {*} param0 机器人信息 
 * @param {*} param1 消息类型
 */
async function notificationLoginInformation({ chatInfo, type }) {
    let loginType = null
    switch (type) {
        case 0:
            loginType = '退出登录'
            break;
        case 1:
            loginType = '登录成功'
            break;
        default:
            break;
    }
    axios.post(config.dingNotificationLoginInformationUrl, {
        msgtype: "text",
        text: {
            content: `反馈时间：${dayjs().format('YYYY-MM-DD HH:mm:ss')}\nwechaty：机器人【${chatInfo.botUserInfo.name}】${loginType}\n`
        }
    }).then(res => {
        console.log('========================👉机器人登录登出提醒：成功👈========================\n\n')
        console.log(res);
    }).catch(err => {
        console.log('========================👉机器人登录登出提醒：失败👈========================\n\n')
        console.log(err);
    })
}

module.exports = {
    notificationLoginInformation
}