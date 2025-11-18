export interface Product {
	id: number; // SQLite usually uses INTEGER
	title: string;
	slug: string;
	image: string; // make this required for <Image src={image} />
	summary: string;
	instructions: string;
	creator: string;
	creator_email: string;
}
