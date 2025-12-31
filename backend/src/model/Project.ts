import { Schema, model, Types } from "mongoose";

export interface ProjectContent {
	id: number | string;
	active: boolean;
	name: string;
	code: string;
	language: string;
}

export interface IProject {
	_id: Types.ObjectId;
	name: string;
	description: string;
	content: ProjectContent[];
	uid: Types.ObjectId;
	accessTo: Types.ObjectId[];
}

const ProjectContentSchema = new Schema<ProjectContent>(
	{
		id: { type: Schema.Types.Mixed, required: true },
		active: { type: Boolean, required: true },
		name: { type: String, required: true },
		code: { type: String, required: true },
		language: { type: String, required: true },
	},
	{ _id: false }
);

const ProjectSchema = new Schema<IProject>({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: "",
	},
	content: {
		type: [ProjectContentSchema],
		default: [],
	},
	uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	accessTo: {
		type: [Schema.Types.ObjectId],
		default: [],
	},
});

const Project = model<IProject>("Project", ProjectSchema);

export default Project;