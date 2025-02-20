const Button = ({ className, href, onClick, children, px, white }) => {
  // Base button styles
  const classes = `inline-flex items-center justify-center h-10 transition-colors ${
    px || "px-6"
  } ${
    white
      ? "bg-white text-black border border-black"
      : "bg-black text-white border border-transparent"
  } ${className || ""} rounded-md`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
