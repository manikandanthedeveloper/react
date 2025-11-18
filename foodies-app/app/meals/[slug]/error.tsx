"use client";

import Link from "next/link";

const ErrorPage = () => {
    return <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-message">Meal not found!</h1>
        <p className="error-description">
            Unfortunately, We could not find the requested page or meal data
        </p>

        <Link href="/" className="btn btn-dark btn-lg">
            ⬅ Back to Home
        </Link>
    </div>

}

export default ErrorPage;