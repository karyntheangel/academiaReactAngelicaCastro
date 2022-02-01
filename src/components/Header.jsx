import Buttons from "./Buttons";
const Header = () => {
  return (
    <div className="header">
      <h1>Bienvenido al contador hecho con React</h1>
      <h4>
        Este contador no admite numeros negativos
      </h4>
      <Buttons />
    </div>
  );
};

export default Header;
