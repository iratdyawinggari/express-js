import createDbConnection from './database/connection'
import { logEventError } from './events/logging.event'
import { server } from './server'
import configure from './config'

createDbConnection()
    .then((connection) => {
        if (connection.isConnected) {
            configure()
            server.listen(process.env.APP_PORT)
        }
    }).catch((error) => {
        logEventError.emit('DB', { info: error })
    })