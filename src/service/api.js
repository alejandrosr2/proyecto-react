const getDataApi = async() => {
    const dataApi = await fetch("https://jellybellywikiapi.onrender.com/api/recipes/");
    const recipes = await dataApi.json();
    return recipes;
};

const api = {
    getDataApi,
}

export default api;