const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;

export const leerProductosAPI = async () => {
    try {
      const resp = await fetch(URL_Productos);
      const listaProductos = await resp.json();
      return listaProductos;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerProductoAPI = async (id) => {
    try {
      const resp = await fetch(URL_Productos + "/" + id);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };