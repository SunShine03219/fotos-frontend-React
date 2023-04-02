import { MainButton } from "../MainButton";
import { Link } from "react-router-dom";

export function MainActionButtons({ tableName, buttonLink, buttonTitle }) {
  if (tableName === "Optimized") return null;

  return (
    <Link to={buttonLink}>
      <MainButton title={buttonTitle} />
    </Link>
  );
}
