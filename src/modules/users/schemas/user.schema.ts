import * as mongoose from 'mongoose';
import { UserRoles } from '../enums/user.enum';



export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: UserRoles,
    default: 'client',
  },
  telephone: String,
});
