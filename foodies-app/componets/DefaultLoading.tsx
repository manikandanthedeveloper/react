import classes from "@/componets/DefaultLoading.module.css";

const DefaultLoadingPage: React.FC = () => {
    return (
        <div className={classes['loading-overlay']} id="loadingOverlay">
            <div className="text-center">
                <div className="spinner-border mb-3" role="status" aria-hidden="true"></div>
                <div className="fw-semibold">Loading, please wait...</div>
            </div>
        </div>
    )
}

export default DefaultLoadingPage;