
const { Wechaty } = require('wechaty')                                          // 机器人木偶

const { onScan } = require("../service/bot-service/scan-service")               // 当机器人需要扫码登陆的时候会触发这个事件。
const { onLogin } = require("../service/bot-service/login-service")             // 当机器人成功登陆后，会触发事件，并会在事件中传递当前登陆机器人的信息
const { onLogout } = require("../service/bot-service/logout-service")           // 当机器人检测到登出的时候，会触发事件，并会在事件中传递机器人的信息。
const { onReady } = require("../service/bot-service/ready-service")             // 当所有数据加载完成后，会触发这个事件。在wechaty-puppet-padchat 中，它意味着已经加载完成Contact 和Room 的信息。
const { onMessage } = require("../service/bot-service/message-service")         // 当机器人收到消息的时候会触发这个事件。
const { onRoomInvite } = require("../service/bot-service/room-invite-service")  // 当收到群邀请的时候，会触发这个事件。
const { onRoomTopic } = require("../service/bot-service/room-topic-service")    // 当有人修改群名称的时候会触发这个事件。
const { onRoomJoin } = require("../service/bot-service/room-join-service")      // 当有人进入微信群的时候会触发这个事件。机器人主动进入某个微信群，那个样会触发这个事件。
const { onRoomleave } = require("../service/bot-service/room-leave-service")    // 当机器人把群里某个用户移出群聊的时候会触发这个时间。用户主动退群是无法检测到的。
const { onFriendship } = require("../service/bot-service/friendship-service")   // 当有人给机器人发好友请求的时候会触发这个事件。
const { onHeartbeat } = require('../service/bot-service/heartbeat-service')     // 获取机器人的心跳。
const { onError } = require('../service/bot-service/error-service')             // 当机器人内部出错的时候会触发error 事件。

const { wechatyToken } = require('../config/index') // 机器人token

const bot = new Wechaty({
  puppet: 'wechaty-puppet-hostie',
  puppetOptions: {
    token: wechatyToken
  }
});

bot
  .on('scan', onScan)
  .on('login', onLogin)
  .on('logout', onLogout)
  .on('ready', onReady)
  .on('message', onMessage(bot))
  .on('room-invite', onRoomInvite)
  .on('room-topic', onRoomTopic)
  .on('room-join', onRoomJoin)
  .on('room-leave', onRoomleave)
  .on('friendship', onFriendship)
  .on('heartbeat', onHeartbeat)
  .on('error', onError)
  .start()
