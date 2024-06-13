type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  
};
function Button({
  color = "white",
  bgColor = "darkOrange",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`text-${color} bg-${bgColor} border-darkOrange flex h-14 w-full items-center justify-center gap-2 rounded-sm border-2 border-solid font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
