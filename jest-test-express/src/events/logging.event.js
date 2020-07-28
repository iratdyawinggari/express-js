import events from 'events'
import { log } from '../logger'

export const logEventError = new events.EventEmitter()

logEventError.on('APP', function (err) {
    log.error({ transType: 'APP-FAILED' }, err)
})

logEventError.on('DB', function (err) {
    log.error({ transType: 'DB-FAILED' }, err)
})

logEventError.on('ROUTE', function (err, res) {
    log.error({ transType: 'ROUTE-FAILED' }, err)
    res.status(404).json({ message: 'Not Found' })
})

logEventError.on('SESSION', function (res) {
    res.sendStatus(401)
})

logEventError.on('CONTROLLER', function (err, res) {
    log.error({ transType: 'CONTROLLER-FAILED' }, err)
    res.status(200).json({ message: 'We are sorry, your request can not be processed' })
})

export const logInfoEvent = new events.EventEmitter()

logInfoEvent.on('ACCESS', function (info) {
    log.info({ transType: 'USER-ROUTE' }, info)
})