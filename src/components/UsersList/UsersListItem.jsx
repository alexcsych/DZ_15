import { FaTrash } from "react-icons/fa";

function UsersListItem(props) {
  const {
    selectUser,
    user: { id, isSelected, firstName, lastName, link, imgSrc, isMale, age },
  } = props;

  const inlineStyle = {
    backgroundColor: isSelected ? (isMale ? "aqua" : "violet") : "transparent",
  };

  return (
    <li style={inlineStyle} onClick={() => selectUser(id)}>
      <img src={imgSrc} alt={firstName}></img>
      <div className="info">
        <h3>
          {firstName} {lastName}
        </h3>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
        <p>{age}</p>
      </div>
      <button
        onClick={(e) => {
          e.target.closest("li").remove();
        }}
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default UsersListItem;
