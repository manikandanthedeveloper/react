"use client";

import { useActionState } from "react";
import ImagePicker from "@/componets/ImagePicker";
import MealFormSubmit from "@/app/meals/share/Meal-form-submit";
import { shareMeal, ShareMealState } from "@/lib/meal-action";

const initialState: ShareMealState = {
    message: null,
};

const ShareMealsPage = () => {
    const [state, formAction] = useActionState<ShareMealState, FormData>(
        shareMeal,
        initialState
    );

    return (
        <div className="container mt-5 mb-5">
            <h3 className="mb-4">Share your favorite meal</h3>
            <p>Or any other meal you feel needs sharing!</p>

            <form className="row g-4 mt-4" action={formAction}>
                <div className="col-md-6">
                    <label htmlFor="yourName" className="form-label">Your Name</label>
                    <input id="yourName" type="text" className="form-control" placeholder="Ex: Jhon" name="yourName" />
                </div>

                <div className="col-md-6">
                    <label className="form-label" htmlFor="yourEmail">Your Email</label>
                    <input id="yourEmail" type="email" className="form-control" placeholder="Ex: jhon@gmail.com" name="yourEmail" />
                </div>

                <div className="col-md-12">
                    <label className="form-label" htmlFor="yourTitle">Title</label>
                    <input id="yourTitle" type="text" className="form-control" placeholder="Enter title" name="yourTitle" />
                </div>

                <div className="col-md-12">
                    <label className="form-label" htmlFor="yourShortSummary">Short Summary</label>
                    <input type="text" className="form-control" placeholder="Enter short summary" id="yourShortSummary" name="yourShortSummary" />
                </div>

                <div className="col-md-12">
                    <label className="form-label" htmlFor="yourInstructions">Instructions</label>
                    <textarea className="form-control" rows={10} placeholder="Enter your Instructions" id="yourInstructions" name="yourInstructions"></textarea>
                </div>

                <ImagePicker label="Upload Image" name="imagePicker" />
                {state.message && <p>{state.message}</p>}
                <div className="col-12">
                    <MealFormSubmit />
                </div>

            </form>
        </div>
    );
}

export default ShareMealsPage;