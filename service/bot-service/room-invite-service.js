/**
 * @method onRoomInvite 当收到群邀请的时候，会触发这个事件。
 * @param {*} user 
 */
const onRoomInvite = async user => {
    try {
        console.log('========================onRoomInvite👇========================')
        console.log(`当有房间邀请时发出，如果有人自己离开房间，会在房间邀请中看到更多，微信不会注意到房间里还有其他人，所以机器人永远不会得到“离开”的活动。`)
    } catch (error) {
        console.log(`onRoomInvite：${error}`)
    }
}

module.exports = { onRoomInvite }