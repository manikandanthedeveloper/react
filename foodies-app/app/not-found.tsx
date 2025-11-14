import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="error-container">
            <div className="error-code">404</div>
            <h1 className="error-message">Page Not Found</h1>
            <p className="error-description">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link href="/" className="btn btn-dark btn-lg">
                ⬅ Back to Home
            </Link>
        </div>
    )
}

export default NotFoundPage;