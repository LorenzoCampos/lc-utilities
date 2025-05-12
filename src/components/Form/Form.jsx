import { useState } from "react";
import PropTypes from "prop-types";
import { LoaderCircle, Eye, EyeOff } from "lucide-react"; // Íconos de carga y ojo

const Form = ({ fields, onSubmit, submitText = "Enviar" }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado
  const [passwordVisibility, setPasswordVisibility] = useState({}); // Estado para visibilidad de contraseñas
  const [previews, setPreviews] = useState({}); // Estado para previsualizaciones

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    if (type === "file" && files[0]) {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });

      // Generar previsualización
      if (file.type === "application/pdf") {
        setPreviews({
          ...previews,
          [name]: URL.createObjectURL(file), // URL para PDF
        });
      } else if (file.type.startsWith("image/")) {
        setPreviews({
          ...previews,
          [name]: URL.createObjectURL(file), // URL para imágenes
        });
      } else {
        setPreviews({
          ...previews,
          [name]: null, // No soportado
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? e.target.checked : e.target.value,
      });
    }
  };

  const togglePasswordVisibility = (name) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach(({ name, label, required }) => {
      if (required && !formData[name]) {
        newErrors[name] = `El campo ${label} es obligatorio.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Si no hay errores, retorna true.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true); // Activar estado de envío
      try {
        await onSubmit(formData); // Esperar a que se complete el envío
      } finally {
        setIsSubmitting(false); // Desactivar estado de envío
      }
    }
  };

  const handleFileClick = (name) => {
    document.getElementById(name).click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-lg space-y-4 p-4 bg-amber-700 shadow-lg rounded-lg"
    >
      {fields.map(({ label, name, type, options, placeholder, required }) => (
        <div key={name} className="flex flex-col">
          <label className="font-semibold">{label}</label>
          {type === "select" ? (
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="border rounded p-2"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : type === "checkbox" ? (
            <input
              type="checkbox"
              name={name}
              checked={formData[name]}
              onChange={handleChange}
              className="w-5 h-5 mt-1"
            />
          ) : type === "file" ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id={name}
                  name={name}
                  onChange={handleChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => handleFileClick(name)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
                >
                  Seleccionar archivo
                </button>
                {formData[name] && (
                  <span className="text-green-700 text-md ml-2">
                    {formData[name].name}
                  </span>
                )}
              </div>
              {previews[name] && (
                <div className="mt-2">
                  {formData[name]?.type === "application/pdf" ? (
                    <embed
                      src={previews[name]}
                      type="application/pdf"
                      className="w-full h-64 border rounded"
                    />
                  ) : (
                    <img
                      src={previews[name]}
                      alt={`Previsualización de ${name}`}
                      className="max-w-xs max-h-40 border rounded"
                    />
                  )}
                </div>
              )}
            </div>
          ) : type === "password" ? (
            <div className="relative">
              <input
                type={passwordVisibility[name] ? "text" : "password"}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="border rounded p-2 w-full"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility(name)}
                className="absolute right-2 top-2.5 text-gray-100 cursor-pointer"
              >
                {passwordVisibility[name] ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          ) : (
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="border rounded p-2"
            />
          )}
          {errors[name] && (
            <span className="text-red-500 text-sm p-0.5">{errors[name]}</span>
          )}
        </div>
      ))}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer flex items-center justify-center"
          disabled={isSubmitting} // Deshabilitar botón mientras se envía
        >
          {isSubmitting ? (
            <LoaderCircle className="animate-spin w-5 h-5" />
          ) : (
            submitText
          )}
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "select",
        "checkbox",
        "date",
        "file", // Soporte para "file"
      ]).isRequired,
      options: PropTypes.arrayOf(PropTypes.string), // Solo para select
      placeholder: PropTypes.string,
      required: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
};

export default Form;