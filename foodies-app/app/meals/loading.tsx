import React from "react";
import Image from "next/image";
import ProductPlaceHolderImage from "@/assets/product-placeholder.svg";

const MealsLoadingPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {[...Array(6)].map((_, i) => (
                    <div className="col-md-4 mb-5" key={i}>
                        <div className="card" aria-hidden="true">
                            <Image src={ProductPlaceHolderImage} className="card-img-top" alt="loading" width={413} height={300} />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealsLoadingPage;