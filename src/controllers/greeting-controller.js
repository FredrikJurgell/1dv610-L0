/**
 * Module for the greetingController.
 *
 * @author Fredrik Jurgell
 * @version 1.0.0
 */

import fetch from 'node-fetch'

/**
 * Encapsulates a controller.
 */
export class GreetingController {
  /**
   * Displays greeting.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async index (req, res, next) {
    try {
      res.render('greeting/index')
    } catch (error) {
      next(error)
    }
  }

  /**
   * Displays the gif.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getGif (req, res, next) {
    try {
      const giphyApi = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=hello`

      const response = await fetch(giphyApi, {
        method: 'GET'
      })

      const jsonData = await response.json()

      // Get a random index.
      const randomGif = Math.floor(Math.random() * jsonData.data.length)

      // The viewdata.
      const viewData = {
        name: req.body.name,
        gif: jsonData.data[randomGif].images.original.url
      }

      res.render('greeting/index', { viewData })
    } catch (error) {
      next(error)
    }
  }
}
