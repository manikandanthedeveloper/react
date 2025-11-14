import MealsGrid from "@/componets/MealsGrid";
import getMeals from "@/lib/meals";
import { Product } from "@/models/Producs";

const MealsPage = async () => {
    const meals: Product[] = await getMeals();

    return <MealsGrid meals={meals} />
}

export default MealsPage;