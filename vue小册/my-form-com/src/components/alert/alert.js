import Notification from './notification'

let messageInstance

function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance()
    return messageInstance
}

function notice({ duration = 1.5, content = '' }) {
    const instance = getMessageInstance()

    instance.add({
        duration: duration,
        content: content
    })
}

export default {
    info(option) {
        return notice(option)
    }
}
