// Alertas
import PropTypes from "prop-types";
import { CircleAlert, CircleCheck, Info, CircleX, X } from "lucide-react"; // Íconos de alerta
import { useState } from "react";

const variantStyles = {
  success: {
    icon: CircleCheck,
    bg: "bg-green-100",
    text: "text-green-800",
  },
  error: {
    icon: CircleX,
    bg: "bg-red-100",
    text: "text-red-800",
  },
  warning: {
    icon: CircleAlert,
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
  info: {
    icon: Info,
    bg: "bg-blue-100",
    text: "text-blue-800",
  },
};

const Alert = ({ variant = "info", title, message, dismissible = false }) => {

  const [visible, setVisible] = useState(true);
  const { icon: Icon, bg, text } = variantStyles[variant];

  if (!visible) return null;

  return (
    <div className={`relative flex items-start gap-3 p-4 rounded-lg ${bg} ${text}`}>
      <Icon className="w-5 h-5 mt-1 shrink-0" />
      <div>
        {title && <h4 className="font-semibold">{title}</h4>}
        <p className="text-sm">{message}</p>
      </div>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className={`absolute top-2 right-2 p-1 cursor-pointer`}
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(["success", "error", "warning", "info"]),
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
};

export default Alert;