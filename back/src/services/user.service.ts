import { DEFAULT_RESPONSE } from '../config/utils';
import { IUsuario, UserModel } from '../models/user.model';

class UserService {
  async signIn(data: IUsuario) {
    const oldUser = await UserModel.findOne({ email: data.email });
    if (oldUser) {
      return DEFAULT_RESPONSE(200, true, 'Usuario ya registrado', oldUser);
    } else {
      const newUser = new UserModel({ firstName: data.firstName, lastName: data.lastName, email: data.email });
      await newUser.save();
      return DEFAULT_RESPONSE(200, true, 'Usuario registrado', newUser);
    }
  }
}

export default new UserService();
