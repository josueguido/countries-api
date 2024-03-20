import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function ThemeColor(props) {
  // Desestructuramos la prop 'children' del objeto 'props'
  const { children } = props;

  // Estado para controlar el tema (light/dark)
  const [theme, setTheme] = useState(() => {
    // Inicializamos el tema basándonos en las preferencias del usuario
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  });

  // Efecto para actualizar las clases del HTML cuando cambia el tema
  useEffect(() => {
    // Toggle la clase 'dark' en el elemento HTML basado en el tema actual
    document.querySelector('html').classList.toggle('dark', theme === "dark");
  }, [theme]);

  // Función para cambiar el tema
  const handleChangeTheme = () => {
    // Cambiamos el tema inverso al tema actual
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Renderizamos el componente con el tema actual y un botón para cambiar el tema
    <div className={`theme-${theme}`}>
      {children}
      <button
        onClick={handleChangeTheme}
      >
      </button>
    </div>
  );
}

ThemeColor.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeColor;

