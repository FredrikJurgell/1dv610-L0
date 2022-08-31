/**
 * Greeting routes.
 *
 * @author Fredrik Jurgell
 * @version 1.0.0
 */

import express from 'express'
import { GreetingController } from '../controllers/greeting-controller.js'

export const router = express.Router()

const controller = new GreetingController()

// Map HTTP verbs and route paths to controller actions.
router.get('/', controller.index)
router.post('/', controller.getGif)
