const { notificationLoginInformation } = require('../ding-service')

/**
 * @method onLogin 当机器人成功登陆后，会触发事件，并会在事件中传递当前登陆机器人的信息
 * @param {*} user 
 */
const onLogin = async user => {
    try {
        console.log('========================👉onLogin👈========================\n\n')
        console.log(`机器人信息：${JSON.stringify(user)}\n\n`)
        console.log(`
                           //
               \\         //
                \\       //
        ##DDDDDDDDDDDDDDDDDDDDDD##
        ## DDDDDDDDDDDDDDDDDDDD ##      
        ## DDDDDDDDDDDDDDDDDDDD ##      
        ## hh                hh ##      ##         ## ## ## ##   ## ## ## ###   ##    ####     ##     
        ## hh    //    \\     hh ##      ##         ##       ##   ##             ##    ## ##    ##
        ## hh   //      \\    hh ##      ##         ##       ##   ##             ##    ##   ##  ##
        ## hh                hh ##      ##         ##       ##   ##     ##      ##    ##    ## ##
        ## hh      wwww      hh ##      ##         ##       ##   ##       ##    ##    ##     ####
        ## hh                hh ##      ## ## ##   ## ## ## ##   ## ## ## ###   ##    ##      ###
        ## MMMMMMMMMMMMMMMMMMMM ##    
        ##MMMMMMMMMMMMMMMMMMMMMM##      微信机器人名为: [${user.payload.name}] 已经扫码登录成功了。\n\n
        `)
        notificationLoginInformation({ chatInfo: user, type: 1 })
    } catch (error) {
        console.log(`onLogin: ${error}`)
    }

}

module.exports = { onLogin }