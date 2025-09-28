interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({ value, onChange }: Props) => {
  return (
    <div className="d-flex gap-3 justify-content-center mb-4">
      <label>
        <input
          type="radio"
          name="category"
          value="silence"
          checked={value === "silence"}
          onChange={(e) => onChange(e.target.value as "silence")}
          className="me-1"
        />
        Silence
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="noise"
          checked={value === "noise"}
          onChange={(e) => onChange(e.target.value as "noise")}
          className="me-1"
        />
        Noise
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="all"
          checked={value === "all"}
          onChange={(e) => onChange(e.target.value as "all")}
          className="me-1"
        />
        All
      </label>
    </div>
  );
};

export default CategoryFilter;
