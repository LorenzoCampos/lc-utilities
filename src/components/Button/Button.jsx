import PropTypes from "prop-types";
import { LoaderCircle } from "lucide-react"; // Ícono de carga

const Button = ({ variant = "primary", size = "md", icon: Icon, loading, disabled, onClick, children, title, type = "button" }) => { // Agregamos 'type' con valor predeterminado
  const baseStyles = "flex items-center justify-center gap-2 font-medium rounded-lg transition cursor-pointer";
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-amber-600 text-white hover:bg-amber-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
  };
  const disabledStyles = loading || disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type} // Atributo 'type' al botón
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles}`}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {loading ? (
        <LoaderCircle className="animate-spin w-5 h-5" />
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.elementType,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Validacion del atributo 'type'
  children: PropTypes.node,
};

export default Button;
