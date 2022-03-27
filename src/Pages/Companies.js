
import { useNavigate, useParams } from 'react-router-dom';

function Companies() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center" }} >
            <h1>
                سامانه ردیف
            </h1>
            <span style={{ margin: "10px" }} onClick={() => navigate("/abfa/login")}>
                آبفا
            </span >
            <span style={{ margin: "10px" }}>
                تانک
            </span >
            <span style={{ margin: "10px" }}>
                سامانه آهن
            </span >
        </div>
    )
}

export default Companies;