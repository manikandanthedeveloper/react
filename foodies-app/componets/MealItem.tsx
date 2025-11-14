import { Product } from "@/models/Producs";
import Image from "next/image";
import React from "react";

const MealItem: React.FC<Product> = ({
    title,
    slug,
    image,
    summary,
    creator
}) => {
    return (
        <div className="card">
            <Image src={image} className="card-img-top" alt="lorem" width={413} height={300} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>By {creator}</p>
                <p className="card-text">{summary}</p>
                <a href={`/meals/${slug}`} className="btn btn-dark">View</a>
            </div>
        </div>
    )
}

export default MealItem;