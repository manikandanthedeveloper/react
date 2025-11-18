// lib/meals.ts
import Database from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import path from "node:path";
import { Meal } from "@/models/Meal";

const db = new Database("meals.db");

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// This returns raw rows; TS will treat as any[]
	return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug: string): Promise<Meal> {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as
		| Meal
		| undefined;

	if (!meal) {
		throw new Error("Meal not found");
	}

	return meal;
}

export async function saveMeal(meal: Meal, imageFile: File) {
	// Generate slug
	const slug = slugify(meal.title, { lower: true });

	// Sanitize instructions
	meal.instructions = xss(meal.instructions);

	// Make sure public/images exists
	const imagesDir = path.join(process.cwd(), "public", "images");
	if (!fs.existsSync(imagesDir)) {
		fs.mkdirSync(imagesDir, { recursive: true });
	}

	// Use the uploaded file's extension
	const originalName = imageFile.name;
	const extension = originalName.split(".").pop() || "png";
	const fileName = `${slug}.${extension}`;

	const filePath = path.join(imagesDir, fileName);

	const bufferedImage = Buffer.from(await imageFile.arrayBuffer());

	await new Promise<void>((resolve, reject) => {
		const stream = fs.createWriteStream(filePath);
		stream.write(bufferedImage, (error) => {
			if (error) {
				reject(new Error("Saving image failed!"));
			} else {
				resolve();
			}
		});
	});

	// Save relative image path
	meal.image = `/images/${fileName}`;

	db.prepare(
		`
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
	).run({
		...meal,
		slug,
	});
}
