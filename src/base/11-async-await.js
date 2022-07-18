/*const getImagenPromesa =() => new Promise (resolve => resolve('https://www.udemy.com/'));
getImagenPromesa().then(console.log);*/

const getImagen = async() => { 
    try {
        const apiKey = 'DxoqgHqYrj1YJoxknXWHdbSWQ423Sx55';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const  { url }  = data.images.original; 
        const img =  document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(data);
    } catch (error) {
        console.error(error);
    }   

}
getImagen();