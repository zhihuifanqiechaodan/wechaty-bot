/**
 * @method onRoomleave 当机器人把群里某个用户移出群聊的时候会触发这个时间。用户主动退群是无法检测到的。
 * @param {*} user 
 */
const onRoomleave = async user => {
    try {
        console.log('========================onRoomleave👇========================')
        console.log(`获取机器人的心跳。`)
    } catch (error) {
        console.log(`onRoomleave：${error}`)
    }

}

module.exports = { onRoomleave }