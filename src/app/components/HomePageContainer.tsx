import Floors from "./Floors";

const HomePageContainer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "20px", margin: 0 }}>!خوش اومدی</p>
      <p style={{ fontSize: "20px", margin: 0 }}>
        اول کدوم منو رو میخوای ببینی؟
      </p>
      <Floors />
    </div>
  );
};

export default HomePageContainer;
