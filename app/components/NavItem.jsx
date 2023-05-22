import Link from "next/link";
const NavItem = ({ label, route, active }) => {
  return (
    <Link href={route}>
      <p className={`nav__item ${active ? "active" : ""}`}>{label}</p>
    </Link>
  );
};

export default NavItem;
