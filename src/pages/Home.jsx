import { useEffect } from "react";
import { useRecipes } from "../store/store";
import Card from "../components/Card";

const Home = () => {
  const {
    recipes,
    fetch,
    setSelected,
    selectedRecipes,
    deleteSelected,
    loadMore,
  } = useRecipes();
  useEffect(() => {
    fetch();
  }, [fetch]);

  const deleteRecipes = () => {
    deleteSelected();
    loadMore();
  };
  return (
    <>
      <input type="text" />
      {selectedRecipes?.length ? (
        <div className="container mx-auto px-6">
          <button onClick={deleteRecipes}>Delete</button>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap container mx-auto gap-5 p-6">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} setSelected={setSelected} />
        ))}
      </div>
    </>
  );
};

export default Home;
