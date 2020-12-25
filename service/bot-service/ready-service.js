/**
 * @method onReady 当所有数据加载完成后，会触发这个事件。在wechaty-puppet-padchat 中，它意味着已经加载完成Contact 和Room 的信息。
 */
const onReady = async () => {
    try {
        console.log('========================👉onReady👈========================')
        console.log(`当所有数据加载完成时，在微信-木偶-padchat中，意味着它完成了同步联系和房间`)
    } catch (error) {
        console.log('onReady', error)
    }
}

module.exports = { onReady }