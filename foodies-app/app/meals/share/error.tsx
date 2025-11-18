"use client";

import Link from "next/link";

const ErrorPage = () => {
    return <div className="error-container">
        <div className="error-code">402</div>
        <h1 className="error-message">An error occurred!</h1>
        <p className="error-description">
            Failed to create meal.
        </p>

        <Link href="/" className="btn btn-dark btn-lg">
            ⬅ Back to Home
        </Link>
    </div>

}

export default ErrorPage;