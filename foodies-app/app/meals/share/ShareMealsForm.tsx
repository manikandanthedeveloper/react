"use client";

import { useFormState } from "react-dom";
import { shareMeal } from "@/lib/meal-action";
import ImagePicker from "@/componets/ImagePicker";
import MealFormSubmit from "@/app/meals/share/Meal-form-submit";

const INITIAL_STATE = { message: null };

export default function ShareMealsForm() {
    const [state, formAction] = useFormState(shareMeal, INITIAL_STATE);

    return (
        <form action={formAction} className="row g-4 mt-4">
            {/* your input fields */}
            <ImagePicker label="Upload Image" name="imagePicker" />

            {state.message && <p className="text-danger">{state.message}</p>}

            <MealFormSubmit />
        </form>
    );
}
