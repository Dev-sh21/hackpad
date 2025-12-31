import { RequestHandler } from "express";
import Project from "../../model/Project";

/**
 * CREATE PROJECT
 */
export const createProject: RequestHandler = async (req, res) => {
	try {
		const { name, description } = req.body;

		const project = await Project.create({
			name,
			description,
			uid: (req as any).userId,
		});

		res.status(201).json({
			success: true,
			project,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

/**
 * GET ALL PROJECTS
 */
export const getAllProjects: RequestHandler = async (req, res) => {
	try {
		const projects = await Project.find({ uid: (req as any).userId });
		res.json({ success: true, projects });
	} catch (error: any) {
		res.status(400).json({ success: false, error: error.message });
	}
};

/**
 * GET SINGLE PROJECT
 */
export const getProject: RequestHandler = async (req, res) => {
	try {
		const project = await Project.findOne({
			_id: req.params.id,
			uid: (req as any).userId,
		});

		res.json({ success: true, project });
	} catch (error: any) {
		res.status(400).json({ success: false, error: error.message });
	}
};

/**
 * UPDATE PROJECT
 */
export const updateProject: RequestHandler = async (req, res) => {
	try {
		const project = await Project.findOneAndUpdate(
			{ _id: req.params.id, uid: (req as any).userId },
			req.body,
			{ new: true }
		);

		res.json({ success: true, project });
	} catch (error: any) {
		res.status(400).json({ success: false, error: error.message });
	}
};

/**
 * DELETE PROJECT
 */
export const deleteProject: RequestHandler = async (req, res) => {
	try {
		await Project.findOneAndDelete({
			_id: req.params.id,
			uid: (req as any).userId,
		});

		res.json({ success: true });
	} catch (error: any) {
		res.status(400).json({ success: false, error: error.message });
	}
};