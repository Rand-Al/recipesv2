import { useEffect } from "react";
import { useRecipes } from "../store/store";
import Card from "../components/Card";

const Home = () => {
  const { recipes, fetch, setSelected } = useRecipes();
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <>
      <div className="flex flex-wrap container mx-auto gap-5 p-6">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} setSelected={setSelected} />
        ))}
      </div>
    </>
  );
};

export default Home;
