import express from 'express'
import { contractcontroller } from '../controllers/contactcontroller.js'
import { homecontroller } from '../controllers/homeController.js'
import { servicescontroller } from '../controllers/servicesController.js'
import { skillscontroller } from '../controllers/skillscontroller.js'
const router=express.Router()
router.get('/',homecontroller)
router.get('/contactme',contractcontroller)
router.get('/skills',skillscontroller)
router.get('/service',servicescontroller)

export default router 