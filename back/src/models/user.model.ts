import { Schema, model } from 'mongoose';

interface IUsuario {
  firstName: string;
  lastName: string;
  email: string;
}

const userSchema = new Schema<IUsuario>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModel = model('User', userSchema, 'usuarios');

export { UserModel, IUsuario };
