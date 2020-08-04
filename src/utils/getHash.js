const getHash = () => 
        location.hash.slice(1)
        .toLocaleLowerCase().split('/')[1]||'/'  /* Obtener el hash y pasarle valores */
/* Es necesario parsear el hash */

export default getHash