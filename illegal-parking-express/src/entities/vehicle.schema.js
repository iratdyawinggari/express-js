import {EntitySchema} from 'typeorm';
import Vehicle from '../models/vehicle.model'

const VehicleSchema = new EntitySchema({
    name:'Vehicle',
    target:Vehicle,
    tableName: 'master_vehicle',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        vehicleType:{
            name:'vehicle_type',
            type: 'varchar'
        },
        vehicleNumber:{
            name:'vehicle_number',
            type: 'varchar'
        }
    },
    relations: {
        licenseStatus: {
            target: 'LicenseStatus',
            type: 'many-to-one',
            eager:true,
            joinColumn: {name: 'license_status_id'}
        }
    }
})

export default VehicleSchema;