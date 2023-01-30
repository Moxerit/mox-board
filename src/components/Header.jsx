import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="ml-5 mt-5 mb-10">
      <p className="text-gray-400 dark:text-white">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">
        {title}
      </p>
    </div>
  );
};

export default Header;
