/**
 * The routes.
 *
 * @author Fredrik Jurgell
 * @version 1.0.0
 */

 import express from 'express'
 import { router as greetingRouter } from './greeting-router.js'
 
 export const router = express.Router()
 
 router.use('/', greetingRouter)
 