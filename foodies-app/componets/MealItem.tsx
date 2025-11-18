// MealItem.tsx
import { Product } from "@/models/Producs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealItem: React.FC<Product> = ({
    title,
    slug,
    image,
    summary,
    creator,
}) => {
    return (
        <div className="card">
            <Image
                src={image}
                className="card-img-top"
                alt={title}
                width={413}
                height={300}
                priority
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>By {creator}</p>
                <p className="card-text" style={{ minHeight: "48px" }}>{summary}</p>
                <Link href={`/meals/${slug}`} className="btn btn-dark">
                    View
                </Link>
            </div>
        </div>
    );
};

export default MealItem;
