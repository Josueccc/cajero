
/**
 * Cambia el componente principal de la página.
 * @param {string} component - El nombre del componente a cargar.
 * @param {Array<Object>} eventListeners - Array de objetos con los eventos a agregar a los elementos del componente.
 */
export function changeComponent(component, eventListeners) {
    var componentContainer = document.getElementById("component-container");
    var url = "components/" + component + ".html";


    return fetch(url)
        .then((response) => response.text())
        .then((html) => {
            componentContainer.innerHTML = html;
            if (eventListeners) {
                eventListeners.forEach((listener) => {
                    document.getElementById(listener.element)?.addEventListener(listener.event, listener.function);
                });
            }
        })
        .catch((error) => {
            console.warn(error);
            componentContainer.innerHTML = "<p>Page not found</p>";
        });
}

