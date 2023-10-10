import Icon from "./Icon";
import Search from "./Search";

function Header() {
  return (
    <>
      <div className="bg-gray-50 px-2 py-4 text-center text-2xl font-semibold capitalize">
        Firebase Contact app
      </div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <Search />
        <Icon />
      </div>
    </>
  );
}

export default Header;
