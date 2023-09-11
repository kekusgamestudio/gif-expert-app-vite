export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ category }&api_key=kA6koZRdPXKeWEa3Zxw5l2A1Coct8nGm`;
  const resp = await fetch(url);

  const { data = [] } = await resp.json();
  //console.log(data);

  const gifs = data.map( (img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  console.log(gifs);
}

