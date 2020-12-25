# wechaty-Bot

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/chatie/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

基于 wechaty-puppet-donut 的微信机器人助手

#### 目前实现功能

- 自动通过好友验证
  - 当有人添加机器人时，判断验证消息关键字后通过或直接通过
  - 通过验证后自动回复并介绍机器人功能
- 私聊关键字回复
  - 例如回复 `加群` 推送群聊邀请
  - 例如回复 `作者微信` 推送作者微信名片
- 自动聊天
  - 群聊中通过 `@[机器人]xxx` 可以和机器人聊天
  - 私聊发送消息即可聊天
- 加入群聊自动欢迎
  - 当新的小伙伴加入群聊后自动 `@[新的小伙伴]` 发一个文字欢迎



#### 结构

```js
|-- config/
|---- index.js			# 配置文件
|-- src/
|---- main.js				# 入口文件
|-- service/
|---- scan-service.js				    # 当机器人需要扫码登陆的时候会触发这个事件。
|---- login-service.js				  # 当机器人成功登陆后，会触发事件，并会在事件中传递当前登陆机器人的信息
|---- logout-service.js				  # 当机器人检测到登出的时候，会触发事件，并会在事件中传递机器人的信息。
|---- ready-service.js				  # 当所有数据加载完成后，会触发这个事件。在wechaty-puppet-padchat 中，它意味着已经加载完成Contact 和Room 的信息。
|---- message-service.js				# 当机器人收到消息的时候会触发这个事件。
|---- room-invite-service.js		# 当收到群邀请的时候，会触发这个事件。
|---- room-topic-service.js			# 当有人修改群名称的时候会触发这个事件。
|---- room-join-service.js			# 当有人进入微信群的时候会触发这个事件。机器人主动进入某个微信群，那个样会触发这个事件。
|---- room-leave-service.js			# 当机器人把群里某个用户移出群聊的时候会触发这个时间。用户主动退群是无法检测到的。
|---- friendship-service.js			# 当有人给机器人发好友请求的时候会触发这个事件。
|---- heartbeat-service.js			# 获取机器人的心跳。
|---- error-service.js			    #当机器人内部出错的时候会触发error 事件。
|-- package.json
```
