import React from "react";
const HeaderBox: React.FC<HeaderBoxProps> = ({
  type,
  title,
  user,
  subtitle,
}) => {
  return (
    <div>
      <header className="home-header">
        <h1 className="header-box-title">
          {" "}
          {title}
          {type === "greeting" && (
            <span className="color-bank-gradient">{user}</span>
          )}
        </h1>
        <p className="header-box-subtitle">{subtitle}</p>
      </header>
    </div>
  );
};

export default HeaderBox;
