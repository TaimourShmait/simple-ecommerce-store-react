interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      className="form-control p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search Products..."
    />
  );
};

export default SearchBar;
