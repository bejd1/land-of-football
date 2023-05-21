import "./BurgerMenu.css";

interface BurgerMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  menuToggle: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuToggle }) => {
  return (
    <div className="burger-menu" onClick={menuToggle}>
      <div className="burger-menu-top"></div>
      <div className="burger-menu-center"></div>
      <div className="burger-menu-bottom"></div>
    </div>
  );
};
