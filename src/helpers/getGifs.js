export const getGifs = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OQ1lc15CW55TpU3SF0s614GoLzu8uzyf`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(data => {
        return {
            id: data.id,
            title: data.title,
            url: data.images?.downsized_medium.url
        }
    })
    
    return gifs
}
