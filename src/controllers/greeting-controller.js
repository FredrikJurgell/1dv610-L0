/**
 * Module for the greetingController.
 *
 * @author Fredrik Jurgell
 * @version 1.0.0
 */

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
}
