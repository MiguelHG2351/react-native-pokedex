import Config from "react-native-config";

export async function getPokemonAPI(endpoint) {
    try {
        const url = `${Config.API_URL}/pokemon?limit=20&offset=0"`
        const response = await fetch(endpoint || url);
        const data = await response.json();
        return data

    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByURL(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(err) {
        throw err;
    }
}
