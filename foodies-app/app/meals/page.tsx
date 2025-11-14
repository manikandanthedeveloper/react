import MealsGrid from "@/componets/MealsGrid";
import getMeals from "@/lib/meals";
import { Product } from "@/models/Producs";
import { Suspense } from "react";
import Link from "next/link";
import MealsGridPlaceHolder from "@/componets/MealsGridPlaceholder";
import classes from "./MealsGrid.module.css";

const Meals = async () => {
    const meals: Product[] = await getMeals();

    return <MealsGrid meals={meals} />
}

const MealsPage = async () => {


    return (
        <>
            <div className="container mt-4">
                <div className="row mb-4">
                    <div className="col-md-12">
                        <h1>
                            Delicious meals, created{' '}
                            <span className={classes.highlight}>by you</span>
                        </h1>
                        <p>
                            Choose your favorite recipe and cook it yourself. It is easy and fun!
                        </p>
                        <p className={classes.cta}>
                            <Link href="/meals/share">
                                Share Your Favorite Recipe
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Suspense fallback={<MealsGridPlaceHolder />}>
                <Meals />
            </Suspense>
        </>
    )
}

export default MealsPage;