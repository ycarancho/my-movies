import { Link } from "react-router-dom";

export const MovieItem = ({title, id}) => (
    <li>
        <Link to={`/details/${id}`}>{title}</Link>
    </li>
);