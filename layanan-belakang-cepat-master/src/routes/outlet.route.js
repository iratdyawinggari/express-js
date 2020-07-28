import {Router} from 'express';
let a=[{outletId: '10000', outletName: 'Indomart'}, {outletId: '20000', outletName: 'Alfamart'}];


const OutletRouter = Router()
    .get('/', function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send(a);
    })

    .post('/insert', function (req, res) {
        let outletId = req.body.outletId;
        let outletName = req.body.outletName;
        res.set('Content-Type', 'application/json');
        res.send({outletId: outletId, outletName:outletName});
        a.push({outletId: outletId, outletName:outletName})
    })
    
    .post('/update', function (req, res) {
        let outletId = req.body.outletId;
        let outletName = req.body.outletName;
        res.set('Content-Type', 'application/json');
        res.send({outletId: outletId, outletName:outletName});
        a.push({outletId: outletId, outletName:outletName})
        let index = a.findIndex(i => i.outletId === outletId);
        a[index] = {"outletId":outletId,"outletName":outletName}

    })
    
export default OutletRouter;