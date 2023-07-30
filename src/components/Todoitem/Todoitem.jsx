export const TodoInput = ({ title, id, onChange }) => {
  return (
    <div className="w-64">
      <label>{title}</label>
      <input data-testid={id} className="w-full h-12 pl-2 border border-gray-400 rounded-lg" onChange={onChange} />
    </div>
  );
};

export const TodoButton = ({ title, id }) => {
  return (
    <button type="submit" data-testid={id} className={title === "추가" ? "todoButton" : "buttonStyle"}>
      {title}
    </button>
  );
};
