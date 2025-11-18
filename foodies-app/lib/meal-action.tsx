"use server";

import { Meal } from "@/models/Meal";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: string) => {
    return !text || text.trim() === '';
}

export type ShareMealState = {
    message: string | null;
};

export const shareMeal = async (prevState: ShareMealState, formData: FormData): Promise<ShareMealState> => {
    const title = formData.get("yourTitle");
    const summary = formData.get("yourShortSummary");
    const instructions = formData.get("yourInstructions");
    const imageFile = formData.get("imagePicker");
    const creator = formData.get("yourName");
    const creator_email = formData.get("yourEmail");

    if (
        typeof title !== "string" ||
        typeof summary !== "string" ||
        typeof instructions !== "string" ||
        typeof creator !== "string" ||
        typeof creator_email !== "string"
    ) {
        throw new Error("Invalid form data");
    }

    if (!(imageFile instanceof File) || imageFile.size === 0) {
        throw new Error("Image is required and must be a file");
    }

    const meal: Meal = {
        title,
        summary,
        instructions,
        creator,
        creator_email
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@')
    ) {
        return {
            message: 'Invalid input.',
        };
    }

    await saveMeal(meal, imageFile);
    revalidatePath("/meals");
    redirect("/meals");
};

export default shareMeal;
