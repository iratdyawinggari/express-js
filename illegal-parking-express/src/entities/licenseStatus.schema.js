import {EntitySchema} from 'typeorm';
import LicenseStatus from '../models/licenseStatus.model'

const LicenseStatusSchema = new EntitySchema({
    name:'LicenseStatus',
    target:LicenseStatus,
    tableName: 'master_license_status',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        status:{
            name:'status',
            type: 'varchar'
        }
    },
    relations: {
        vehicle:{
            target:'Vehicle',
            type:'one-to-many',
            inverseSide:'licenseStatus'
        }
    }
})

export default LicenseStatusSchema;