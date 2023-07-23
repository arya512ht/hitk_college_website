
import express, { Router } from 'express';
import {getUsers, getUsersData} from '../controller/user-controller.js';
import multer from 'multer'
import User from '../schema/user-schema.js'



const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post('/add', upload.single('image'), async (req, res) => {
    const user = new User()
    user.name = req.body.name
    user.fname = req.body.fname
    user.mname = req.body.mname
    user.mobile = req.body.mobile
    user.email = req.body.email
    user.dob = req.body.dob
    user.gender = req.body.gender
    user.rel = req.body.rel
    user.uname = req.body.uname
    user.pass = req.body.pass
    user.street = req.body.street
    user.post = req.body.post
    user.police = req.body.police
    user.dist = req.body.dist
    user.state = req.body.state
    user.pin = req.body.pin
    user.course = req.body.course
    user.adate = req.body.adate
    user.department = req.body.department
    user.roll = req.body.roll
    user.image = req.file.originalname
    user.save()
    res.status(201).json('success')
});

router.get('/all', getUsers);

router.post('/getUser', getUsersData);



export default router;