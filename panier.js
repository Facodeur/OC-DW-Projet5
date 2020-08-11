let contenuePanier = document.getElementById('stock-panier');

for (let key in localStorage) {
    if(!localStorage.hasOwnProperty(key))
    continue

    let cardPanier = key.split('-');
    cardPanier[3] = parseInt(cardPanier[3]);
    let prixTotalArticle = cardPanier[3] * localStorage.getItem(key);
    
    let articlePanier = 
    `<div class="border-bottom mb-4">
            <div class="row">
              <div class="col-md-2">
                    <img id="image" src="${cardPanier[2]}" class="card-img mb-3" alt="photo ${cardPanier[0]}">
              </div>
              <div class="col-md-2 ml-3">
                    <h5 class="card-title">${cardPanier[0]}</h5>
                </div>
                <div class="col-md-2 ml-1">
                    <p class="card-text">${cardPanier[1]}</p>
                </div>
                <div class="col-md-2 ml-1">
                    <p class="card-text">${cardPanier[3]}€</p>
                </div>
                <div class="col-md-1 ml-1">
                    <p class="card-text">${localStorage.getItem(key)}</p>
                </div>
                <div class="col-md-2 ml-1">
                    <p class="card-text">${prixTotalArticle} €</p>
                    <button id="delete" onclick="deleteItem()" type="button" class="close" aria-label="Close">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
              </div>
            </div>
          </div>`;   
    contenuePanier.innerHTML += articlePanier;
    console.log(localStorage.getItem(key));
    console.log("ici-------", cardPanier);
};

function deleteItem(){
    for(let i = 0; i < localStorage.length; i++){
        let local = localStorage.key(i);
        localStorage.removeItem(local);
        console.log("--------",local)
    }
};

function panierVide(){
    if(localStorage.length === 0){
        let message = 
        `<div class="text-center">
            <h2>Votre panier est vide</h2>
        </div>`;
        contenuePanier.innerHTML = message;
    }
};
panierVide();
    
    
    