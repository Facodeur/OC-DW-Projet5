"use strict";var contenuePanier=document.getElementById("stock-panier"),prixTotalPanier=0;function displayPanier(){prixTotalPanier=0,contenuePanier.innerHTML='<div class="border-bottom mb-4">\n        <h4 class="col-4 font-weight-bold">Votre panier</h4>\n    </div>';var e=getPanier(),a=!0,t=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var s=r.value,o=s.prix/100,l=o*s.count;prixTotalPanier+=l;var d='<div class="row border-bottom mb-4">\n                    <div class="col-md-3">\n                            <img id="image" src="'.concat(s.img,'" class="card-img mb-3" alt="photo ').concat(s.name,'">\n                    </div>\n                    <div class="col-md-3">\n                        <h5 class="card-title">').concat(s.name,'</h5>\n                        <p class="card-text">').concat(s.vernis,'</p>\n                        <p class="card-text">').concat(o.toFixed(2),'€</p>\n                    </div>\n                    <div class="d-flex flex-row">\n                        <span onclick="pushOneItem(event.currentTarget)" data-id="').concat(s.id,'" data-vernis="').concat(s.vernis,'" aria-label="ajoute"><i class="fas fa-plus-circle"></i></span>\n                        <p class="card-text">').concat(s.count,'</p>\n                        <span onclick="removeOneItem(event.currentTarget)" data-id="').concat(s.id,'" data-vernis="').concat(s.vernis,'" aria-label="diminu"><i class="fas fa-minus-circle"></i></span>\n                    </div>\n                    <div class="col-md-2">\n                        <p class="card-text prix-total">').concat(l,' €</p>\n                        <button onclick="removeItem(event.currentTarget)" data-id="').concat(s.id,'" data-vernis="').concat(s.vernis,'" type="button" class="close" aria-label="Close">\n                            <i class="fas fa-trash-alt"></i>\n                        </button>\n                    </div>\n                </div>');contenuePanier.innerHTML+=d}}catch(e){t=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(t)throw n}}checkPanierVide(),displayPrixTotal(),showTotalInPanier()}function removeItem(e){var a=getPanier(),t=e.dataset.id,n=e.dataset.vernis,r=a.filter(function(e){if(e.id!=t||e.vernis!=n)return!0});savePanier(r),displayPanier()}function displayPrixTotal(){var e=document.querySelector(".prix"),a=document.querySelector(".total-prix");e.textContent=prixTotalPanier+"€",a.textContent=prixTotalPanier+"€",console.log(prixTotalPanier)}function checkPanierVide(){0===prixTotalPanier&&(contenuePanier.innerHTML='<div class="text-center">\n            <h2>Votre panier est vide</h2>\n        </div>',document.getElementById("total-form").classList.add("d-none"),localStorage.removeItem("panier"))}function pushOneItem(e){addOrRemoveOneItem(e,!0)}function removeOneItem(e){addOrRemoveOneItem(e,!1)}function addOrRemoveOneItem(e,a){var t=getPanier(),n=e.dataset.id,r=e.dataset.vernis,i=!0,s=!1,o=void 0;try{for(var l,d=t[Symbol.iterator]();!(i=(l=d.next()).done);i=!0)panierItem=l.value,panierItem.id==n&&panierItem.vernis==r&&(a?panierItem.count++:1<panierItem.count&&panierItem.count--)}catch(e){s=!0,o=e}finally{try{i||null==d.return||d.return()}finally{if(s)throw o}}savePanier(t),displayPanier()}displayPanier();var formCommand=document.getElementById("form"),btnCommand=document.getElementById("command");btnCommand.addEventListener("click",function(){formCommand.classList.remove("d-none"),btnCommand.classList.add("d-none")});var panier=getPanier(),products=[];panier.forEach(function(e){products.push(e.id),console.log("dans le forEach",e.id)}),console.log("produits = ",products);var form=document.getElementById("form-command"),btnValidCommand=document.getElementById("btn-valid-command");btnValidCommand.addEventListener("click",submitOrder),form.addEventListener("change",validInput);var emailRegex=new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$","g"),nameRegex=new RegExp("^[a-zA-Z '.-]*$"),addressRegex=new RegExp("^[a-zA-Z0-9 ]{0,10}[ -']{0,1}[a-zA-Z]+");function validInput(){var e=form.email.nextElementSibling,a=form.firstName.nextElementSibling,t=form.lastName.nextElementSibling,n=form.address.nextElementSibling,r=form.city.nextElementSibling;return form.lastName.value?(nameRegex.test(form.lastName.value)?(t.innerHTML="valide",t.classList.remove("text-danger"),t.classList.add("text-success")):(t.innerHTML="format non valide",t.classList.remove("text-success"),t.classList.add("text-danger")),form.firstName.value?(nameRegex.test(form.firstName.value)?(a.innerHTML="valide",a.classList.remove("text-danger"),a.classList.add("text-success")):(a.innerHTML="format non valide",a.classList.remove("text-success"),a.classList.add("text-danger")),form.address.value?(addressRegex.test(form.address.value)?(n.innerHTML="valide",n.classList.remove("text-danger"),n.classList.add("text-success")):(n.innerHTML="format non valide",n.classList.remove("text-success"),n.classList.add("text-danger")),form.city.value?(addressRegex.test(form.city.value)?(r.innerHTML="valide",r.classList.remove("text-danger"),r.classList.add("text-success")):(r.innerHTML="format non valide",r.classList.remove("text-success"),r.classList.add("text-danger")),form.email.value?void(emailRegex.test(form.email.value)?(e.innerHTML="email valide",e.classList.remove("text-danger"),e.classList.add("text-success")):(e.innerHTML="format email non valide",e.classList.remove("text-success"),e.classList.add("text-danger"))):e.innerHTML="Veuillez renseigner votre email"):r.innerHTML="Veuillez renseigner la ville"):n.innerHTML="Veuillez renseigner votre adresse"):a.innerHTML="Veuillez renseigner votre prénom"):t.innerHTML="Veuillez renseigner votre nom"}function submitOrder(e){var a;e.preventDefault(),nameRegex.test(form.lastName.value)&&nameRegex.test(form.firstName.value)&&addressRegex.test(form.address.value)&&addressRegex.test(form.city.value)&&emailRegex.test(form.email.value)&&(a={method:"POST",body:JSON.stringify({contact:{firstName:form.firstName.value,lastName:form.lastName.value,address:form.address.value,city:form.city.value,email:form.email.value},products:products}),headers:{"Content-type":"application/json; charset=UTF-8"}},fetch("http://localhost:3000/api/furniture/order",a).then(function(e){return e.ok?e.json():Promise.reject(e.status)}).then(function(e){var a='\x3c!-- Modal --\x3e\n        <div class="modal fade" id="modalConfirm" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n            <div class="modal-dialog modal-dialog-centered" role="document">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h5 class="modal-title" id="exampleModalLongTitle">Confirmation de commande</h5>\n                        <button onclick="pageAccueil()" type="button" class="close" data-dismiss="modal" aria-label="Close">\n                            <span aria-hidden="true">&times;</span>\n                        </button>\n                    </div>\n                    <div class="modal-body">\n                        <p>Nous vous remercions de votre commande N°<strong>'.concat(e.orderId,"</strong> d'un montant de <strong>").concat(prixTotalPanier,' €</strong>. Nous vous tiendrons informé par e-mail \n                        lorsque les articles de votre commande auront été expédiés.</p>\n                        <p>Au plaisir de vous revoir bientôt.</p>\n                    </div>\n                    <div class="modal-footer">\n                        <button onclick="pageAccueil()" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>');document.querySelector(".container").innerHTML=a,$("#modalConfirm").modal("show"),localStorage.clear(),console.log(e)}).catch(function(e){return console.log("Erreur message : ".concat(e))}))}function pageAccueil(){document.location.href="index.html"}