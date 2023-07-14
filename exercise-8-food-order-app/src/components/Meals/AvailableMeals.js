import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://rule-engine-front-default-rtdb.firebaseio.com/meals.json"
      )

      if (!response.ok) new Error("Something went wrong");
      const data = await response.json();
      setLoadedMeals(Object.values(data));
    };

    fetchMeals().catch(error=>{
      setHttpError(error.message)
    }).finally(()=>{
      setIsLoading(false);
    });


  }, []);

  if (isLoading) {
    return (
      <section className={classes["meals-loading"]}>
        <p>Loading</p>
      </section>
    );
  }


  if (httpError) {
    return (
      <section className={classes["meals-error"]}>
        <p>{httpError.message}</p>
      </section>
    );
  }

  const mealsList = loadedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
