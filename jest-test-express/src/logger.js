import bunyan from 'bunyan'

export const log = bunyan.createLogger({
    name: 'hello-world-db',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            // path: '/home/risanjayy/express/exdatabase/myapp-error.log'
            stream: process.stdout
        }
    ],
    level: 'info'
})