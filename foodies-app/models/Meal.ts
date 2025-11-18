export interface Meal {
	title: string;
	summary: string;
	instructions: string;
	creator: string;
	creator_email: string;
	image?: string; // set when saved
}
