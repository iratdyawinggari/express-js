import mysql from 'mysql'
import {createConnection} from 'typeorm'
import configure from '../config'
import SlotSchema from '../entities/slot.schema'
import VehicleSchema from '../entities/vehicle.schema'
import LicenseStatusSchema from '../entities/licenseStatus.schema'
import TransactionStatusSchema from '../entities/transactionStatus.schema'
import TransactionSchema from '../entities/transaction.schema'
import SlotStatusSchema from '../entities/slotStatus.schema'

const {dbType,dbHost,dbPort,dbUser,dbPassword,dbName}=configure();

const createDbConnection = async ()=>{
    const connection = await createConnection({
        type: dbType || 'mysql',
        host: dbHost || 'localhost',
        port:dbPort || '3306',
        username: dbUser || 'root',
        password: dbPassword || '',
        database : dbName ||'test',
        entities: [SlotSchema,VehicleSchema,LicenseStatusSchema,TransactionStatusSchema,TransactionSchema,SlotStatusSchema] 
    });
    return connection;
}

export default createDbConnection;

