import mongoose from "mongoose";

const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URL as string);

		console.log("connected to database");
	} catch (error) {
		console.error("database connection failed");
		console.error((error as Error).message);
		process.exit(1);
	}
};

export default connectToDB;