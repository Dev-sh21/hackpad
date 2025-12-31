import { Schema, model, Types } from "mongoose";

export interface IUser {
	_id: Types.ObjectId;
	email: string;
	password: string;
}

const UserSchema = new Schema<IUser>({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = model<IUser>("User", UserSchema);

export default User;