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
            <span className="text-bankGradient">{user}</span>
          )}
        </h1>
        <p className="header-box-subtitle text-4xl">{subtitle}</p>
      </header>
    </div>
  );
};

export default HeaderBox;
