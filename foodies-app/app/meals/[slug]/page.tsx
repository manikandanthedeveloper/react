import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from "./Meal.module.css";
import { Meal } from "@/models/Meal";
import { notFound } from "next/navigation";

type MealPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: MealPageProps) {
    const meal = getMeal((await params).slug);

    if (!meal) {
        notFound();
    }

    return {
        title: (await meal).title,
        description: (await meal).summary,
    };
}

const MealPage = async ({ params }: MealPageProps) => {
    const { slug } = await params;

    const meal = (await getMeal(slug)) as Meal;
    const imageSrc = meal.image ?? "/images/placeholder.png"; // must exist in public/

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <Image
                        src={imageSrc}
                        alt={meal.title}
                        className={`product-img shadow-sm ${classes["img-width-100"]}`}
                        width={800}
                        height={800}
                        priority
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold mb-3">{meal.title}</h1>

                    <p
                        className="text-muted mb-4"
                        dangerouslySetInnerHTML={{
                            __html: `<strong>Summary:</strong> ${meal.summary}`,
                        }}
                    ></p>

                    <hr />

                    <div className="mb-3">
                        <div className="section-title">Created By</div>
                        <p className="mb-1">{meal.creator}</p>
                        <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <div className="row">
                <div className="col-md-12">
                    <h3 className="section-title mb-3">Instructions</h3>
                    <p
                        className="lead"
                        dangerouslySetInnerHTML={{ __html: meal.instructions }}
                    ></p>
                </div>
            </div>
        </div>
    );
};

export default MealPage;
