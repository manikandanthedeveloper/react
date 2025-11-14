import React from "react";
import Meal from "./MealItem"
import { Product } from "@/models/Producs";

const MealsGrid: React.FC<{ meals: Product[] }> = (props) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {props.meals.map((meal: Product) => (
                    <div className="col-md-4 mb-4" key={meal.id}>
                        <Meal {...meal} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MealsGrid;