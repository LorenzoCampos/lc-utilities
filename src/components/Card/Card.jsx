import PropTypes from "prop-types";

const Card = ({ title, subtitle, image, icon: Icon, content, actions }) => {
  return (
    <div className="bg-amber-500 shadow rounded-lg overflow-hidden">
      {/* Imagen o Icono */}
      {image ? (
        <img src={image} alt={title} className="w-full h-52 object-cover" />
      ) : Icon ? (
        <div className="w-full h-48 flex items-center justify-center bg-gray-100">
          <Icon className="w-12 h-12 text-gray-500" />
        </div>
      ) : null}

      {/* Contenido principal */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {subtitle && <h3 className="text-gray-700 text-sm">{subtitle}</h3>}
        <div className="mt-2 text-gray-700">{content}</div>
        {actions && <div className="mt-4 flex gap-2">{actions}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.elementType, // Ícono opcional
  content: PropTypes.node.isRequired,
  actions: PropTypes.node,
};

export default Card;