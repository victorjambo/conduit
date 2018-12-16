import dotenv from 'dotenv';
import models from '../../database/models';


dotenv.config();


class FooController {
  static response(res, message, result) {
    return res.status(message[0]).json({
      success: message[2],
      message: message[1],
      result
    });
  }

  static async getAllFoo(req, res) {
    const result = await models.Foo.findAll();
    const message = [200, 'data', true];
    FooController.response(res, message, result);
  }
}

export default FooController;
