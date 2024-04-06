import { Document } from 'mongoose';
import { UserRoles } from '../enums/user.enum';

export interface User extends Document {
  readonly name: number;
  readonly password: string;
  readonly email: number;
  readonly telephone: number;
  readonly role: UserRoles;
}
