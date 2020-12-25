/**
 * @method onHeartbeat 获取机器人的心跳。
 * @param {*} user 
 */
const onHeartbeat = async user => {
    try {
        console.log('========================onHeartbeat👇========================')
        console.log(`获取机器人的心跳。`)
    } catch (error) {
        console.log(`onHeartbeat：${error}`)
    }

}

module.exports = { onHeartbeat }