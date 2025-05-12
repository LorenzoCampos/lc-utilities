import PropTypes from "prop-types";
import { CircleCheck, CircleX, CircleAlert, Info, X } from "lucide-react"; // Íconos de alerta
import { useState, useEffect } from "react";

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

const Toast = ({ toasts: initialToasts = [] }) => {
  const [toasts, setToasts] = useState(initialToasts);
  const [removing, setRemoving] = useState({}); // Estado para controlar los toasts en proceso de eliminación

  useEffect(() => {
    setToasts(initialToasts);
  }, [initialToasts]);

  const removeToast = (id) => {
    // Marcar el toast como en proceso de eliminación
    setRemoving((prev) => ({ ...prev, [id]: true }));

    // Esperar a que termine la animación antes de eliminarlo del estado
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      setRemoving((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }, 300); // Duración de la animación (0.3s)
  };

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), 5000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts]);

  return (
    <div className="fixed top-5 right-5 space-y-2 z-50">
      {toasts.map(({ id, type, title, message }) => {
        const { icon: Icon, bg, text } = variantStyles[type] || variantStyles.info;

        return (
          <div
            key={id}
            className={`relative flex items-start gap-3 p-4 rounded-lg shadow-lg ${bg} ${text} w-80 ${
              removing[id] ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
            {Icon && <Icon className="w-5 h-5 mt-1 shrink-0" />}
            <div>
              {title && <h4 className="font-semibold">{title}</h4>}
              <p className="text-sm">{message}</p>
            </div>
            <button
              onClick={() => removeToast(id)}
              className="absolute top-2 right-2 p-1 cursor-pointer rounded transition"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

Toast.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
      title: PropTypes.string,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default Toast;
