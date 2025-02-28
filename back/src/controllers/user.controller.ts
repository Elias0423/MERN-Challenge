import { DEFAULT_RESPONSE } from '../config/utils';
import { Response, Request } from 'express';
import UserService from '../services/user.service';

class UserController {
  async signIn(req: Request, res: Response) {
    let response;
    try {
      const data = req.body;
      response = await UserService.signIn(data);
    } catch (error) {
      response = DEFAULT_RESPONSE(500, true, 'Error interno', error);
    }
    res.status(response.code).json(response);
  }
}

export default new UserController();
