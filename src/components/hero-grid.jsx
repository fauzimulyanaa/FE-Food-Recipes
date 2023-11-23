import image1 from "../assets/img/card-1.png";
import image2 from "../assets/img/card-2.png";
import image3 from "../assets/img/card-3.png";
import image4 from "../assets/img/card-4.png";
import image5 from "../assets/img/card-5.png";
import image6 from "../assets/img/card-6.png";
import Card from "./elements/card";
import "../assets/css/app.css";
import Tagline from "./elements/tagline";

export default function Cards() {
  return (
    <div className="popular-grid">
      <Tagline tagline="Popular Recipe" />
      <div className="row">
        <Card cardImage={image1} cardTitle="Chiken Kare" FoodTitle="food-name" />
        <Card cardImage={image2} cardTitle="Bomb Chicken" FoodTitle="food-name" />
        <Card cardImage={image3} cardTitle="Banana Smothie Pop" FoodTitle="food-name-1" />
        <Card cardImage={image4} cardTitle="Coffe Lava Cake" FoodTitle="food-name" />
        <Card cardImage={image5} cardTitle="Sugar Salmon" FoodTitle="food-name" />
        <Card cardImage={image6} cardTitle="Indian Salad" FoodTitle="food-name" />
      </div>
    </div>
  );
}
