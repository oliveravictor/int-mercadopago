var productos;
/* $(document).ready(function () {
    $.ajax({
        url: "./data.json", 
        dataType: "json",
        success: function(data) {
            productos = data;
            showCardsProducts(productos);
            
        }
    });
}); */

function getProducts(){
    fetch("./src/data.json")
    .then(res => res.json())
    .then(data => {
        productos = data;
        console.log(productos)
        showProducts(productos)
    })
}

getProducts()

//Muestra cards de productos en html
function showProducts(unidad){
    let acu = ``;
    for (let i = 0; i < unidad.length; i++) {
        acu += `
        <div class="card" style="width: 18rem;">
            <img src="${unidad[i].image}" class="card-img-top" alt="${unidad[i].title}">
            <div class="card-body">
                <div>
                    <span class="badge bg-warning text-dark">Primavera</span>
                </div>
                <h5 class="card-title">${unidad[i].title}</h5>
                <p class="card-text">${unidad[i].description}</p>
                <p class="card-text badge text-white bg-info card-price">$ ${unidad[i].price}</p>
                <a href="#" class="btn btn-outline-dark d-block">Comprar</a>
            </div>
        </div>
        `;
    }
    document.getElementById("productos").innerHTML = acu;
}
