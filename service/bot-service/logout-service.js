const { notificationLoginInformation } = require('../ding-service')

/**
 * @method onLogout 当机器人检测到登出的时候，会触发事件，并会在事件中传递机器人的信息。
 * @param {*} user 
 */
const onLogout = async user => {
    try {
        console.log('========================onLogout👇========================')
        console.log(`当bot检测到注销时，将与当前登录用户的联系人发出注销。`)
        notificationLoginInformation({ chatInfo: user, type: 0 })
    } catch (error) {
        console.log(`onLogout：${error}`)
    }

}

module.exports = { onLogout }