import { useAppDispatch } from "../../app/hooks";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import sidebarStyles from "./Sidebar.module.scss";
import { search } from "../Filters/filters-slice";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={sidebarStyles.container}>
      <Search onChange={(e) => dispatch(search(e.target.value))} />
      <Filters />
    </div>
  );
};

export default Sidebar;
