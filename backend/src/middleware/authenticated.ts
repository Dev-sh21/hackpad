import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const authenticated: RequestHandler = (req, res, next) => {
	try {
		const authHeader = req.header("Authorization");
		if (!authHeader) {
			return res.status(401).json({ error: "No token provided" });
		}

		const token = authHeader.split(" ")[1];
		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET as string
		) as { userId: string };

		(req as any).userId = decoded.userId;
		next();
	} catch {
		res.status(401).json({ error: "Please authenticate using a valid token" });
	}
};

export default authenticated;