// ***** start - imports from files *****
import ErrorImg from "../../assets/images/custom/noDataFound.svg"
// ***** end - imports from files *****

export default function NoDataComponent() {
    return (
        <div className="data-not-found-section text-center">
            <img src={ErrorImg} className="img-fluid" alt="images" />
            <h4>Data not found</h4>
        </div>
    )
}
