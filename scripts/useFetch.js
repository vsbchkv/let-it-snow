const useFetch = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    else {
        throw new Error(`Cannot get data from ${url} server response ${response.status}`);
    }
};

export { useFetch };