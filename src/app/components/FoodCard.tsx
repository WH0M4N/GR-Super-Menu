import { Food } from "@/data/mockData";
import CustomCard from "./shared/CustomCard";

const FoodCard = ({ food, foodIdx }: { food: Food; foodIdx: number }) => {
  return <CustomCard cardItem={food} idx={foodIdx} />;
};

export default FoodCard;
