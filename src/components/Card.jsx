/* eslint-disable react/prop-types */
import s from "../assets/Card.module.css";
const Card = ({ recipe, setSelected }) => {
  const selected = recipe.isSelected;
  const onSetSelect = (recipe, e) => {
    e.preventDefault();
    setSelected(recipe);
  };
  return (
    <div
      onContextMenu={(e) => onSetSelect(recipe, e)}
      key={recipe.id}
      className={`${s.card} ${selected ? s.selected : ""}`}
    >
      <div className={s.imgWrapper}>
        <img className={s.img} src={recipe.image_url} alt="" />
      </div>
      <h2 className={s.title}>{recipe.name}</h2>
      <p className={s.description}>{recipe.description}</p>
      <button>Click Me</button>
    </div>
  );
};

export default Card;
