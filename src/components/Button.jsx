import PropTypes from 'prop-types';

const ButtonPrimary = ({
                           href,
                           target = '_self',
                           label,
                           icon,
                           classes = '' // Valor predeterminado para evitar errores si no se proporciona `classes`
                       }) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-primary ${classes}`} // Usando plantilla de cadena para concatenar correctamente
            >
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </button>
        );
    }
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
};


const ButtonOutline = ({
                           href,
                           target = '_self',
                           label,
                           icon,
                           classes = '' // Valor predeterminado para evitar errores si no se proporciona `classes`
                       }) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes}`} // Usando plantilla de cadena para concatenar correctamente
            >
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </button>
        );
    }
};

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
};


export {
    ButtonPrimary,
    ButtonOutline
};