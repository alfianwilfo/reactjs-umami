class UserController {
  static async register(req, res, next) {
    try {
      console.log("masuk sini");
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UserController;
