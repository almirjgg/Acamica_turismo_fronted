// function probando(){
// fetch('http://localhost:3000/packs')
// .then(res => res.json())
// .then(data => {
//     data.forEach(element => {
//         const {id, imagen, descripcion, titulo, precio} = element;
//         const img = document.getElementById('pack-img');
//         img.setAttribute('src', imagen);
//         const title = document.getElementById('pack-title');
//         title.innerHTML = titulo;
//         const desc = document.getElementById('pack-desc');
//         desc.innerHTML = descripcion;
//         const pack_id = document.getElementById('pack-id');
//         pack_id.innerHTML = id;
//         const price = document.getElementById('pack-precio');
//         price.innerHTML = precio;
//     });
// })
// }

// probando()

const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
   e.preventDefault();
    const usuario = e.target[0].value;
    const contrasenia = e.target[1].value;
    const data = {
        username: usuario,
        password: contrasenia
    }
     fetch('http://localhost:3000/user/login', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => console.log(res));
})