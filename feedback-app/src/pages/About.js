import { Link } from "react-router-dom"
import { Card } from "../components/shared/Card"

export const About =()=>{
    return(
        <Card>
            <div className="about">
             <h1>About This Project</h1>
             <p>This is a React app to leave feedback for a product or service</p>
            </div>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </Card>
    )
}