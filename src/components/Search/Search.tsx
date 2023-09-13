import searchStyles from "./Search.module.scss";

const Search = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={searchStyles.container}>
      <h3>Search</h3>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default Search;
