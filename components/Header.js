import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Hey there, <span>User</span>!
          </h1>  
    </div>
  );
}
