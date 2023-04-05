import { MainButton } from "../MainButton";
import { Link } from "react-router-dom";

export function MainActionButtons({ buttonLink, buttonTitle, refreshData, onRefreshData }) {
  if (refreshData) {
    return (
      <div>
        <MainButton title={buttonTitle} onClick={onRefreshData} />
      </div>
    );
  }

  return (
    <Link to={buttonLink}>
      <MainButton title={buttonTitle} />
    </Link>
  );
}
