import Database from "better-sqlite3";
const db = new Database("meals.db");

const getMeals = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	return db.prepare("SELECT * FROM meals").all();
};

export default getMeals;
