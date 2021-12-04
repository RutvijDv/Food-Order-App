import mealsImage from "./../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of meals" />
      </div>
    </>
  );
};

export default Header;
