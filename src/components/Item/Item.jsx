export const Input = ({ title, id, onChange }) => {
  return (
    <div className="w-64">
      <label>{title}</label>
      <input type={id.includes("email") ? "email" : "password"} data-testid={id} className="w-full h-12 pl-2 border border-gray-400 rounded-lg" onChange={onChange} />
    </div>
  );
};

export const Button = ({ title, id, onClick, active }) => {
  return (
    <button type="submit" data-testid={id} className={`${title === "추가" ? "todoButton" : "buttonStyle"} ${active ? "bg-green-500" : "bg-gray-400"}`} onClick={onClick}>
      {title}
    </button>
  );
};
