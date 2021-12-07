import { useEffect, useState } from "react";
import Card from "./../UI/Card";
import classes from "./AvaiableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(
        "https://react-http-eb504-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push(responseData[key]);
      }

      setMealData(loadedData);
      setIsLoading(false);
    };

    fecthData().catch((err) => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  const mealList = mealData.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content;

  if (isError) {
    content = (
      <Card>
        <p>Something went wrong</p>
      </Card>
    );
  } else if (isLoading) {
    content = (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  } else {
    content = <Card>{mealList}</Card>;
  }

  return <section className={classes.meals}>{content}</section>;
};

export default AvailableMeals;
