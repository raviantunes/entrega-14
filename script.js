const data = [
    {
    "id": 1,
    "etiqueta": "Motores Elétricos",
    "img_src": "./imgsEntrega25/antiexplosivo.jpg",
    "name": "Motor Elétrico à Prova de Explosão W22Xdb IE2 5.5 kW 2P 50Hz",
    "description": "Representa o que há de mais moderno para o acionamento de equipamentos em ambientes de atmosferas explosivas. Assegura altos níveis de rendimento, baixa manutenção e segurança.",
    "value": "R$2300.00"
    },

    {
    "id": 2,
    "etiqueta": "Motores Elétricos",
    "img_src": "./imgsEntrega25/bombamonobloco.jpg",
    "name":"W22 Bomba Monobloco JM IR3 Premium 60cv 60Hz",
    "description": "Os motores W22 Bomba Monobloco JM possuem curta extensão do eixo, o que limita a vibração e o movimento radial, e, portanto, proporciona maior vida útil da vedação.",
    "value": "R$1900.00"
    },

    {
    "id": 3,
    "etiqueta": "Motores Elétricos",
    "img_src": "./imgsEntrega25/MKT_WMO_EU_IMAGE_3PHASE_W22_RAL5009_143_B35T_NEMAPREMIUM_1200Wx1200H.jpg",
    "name": "W22 NEMA Premium Efficiency 1 HP 4P 60Hz Com Pés",
    "description": "Carcaça de ferro fundido, flexibilidade de forma construtiva, pés maciços e inteiriços e níveis de ruído e temperatura de operação reduzidos.",
    "value": "R$1200.00"
    },

    {
    "id": 4,
    "etiqueta": "Disjuntores",
    "img_src": "./imgsEntrega25/WDC_Disjuntor_ACW101_1200Wx1200H.jpg",
    "name": "Disjuntor ACW101H-ETS40-3",
    "description": "Os disjuntores em caixa moldada da linha ACW são equipamentos para proteção de circuitos elétricos, manobra e proteção de motores.",
    "value": "R$135.00"
    },

    {
    "id": 5,
    "etiqueta": "Home",
    "img_src": "./imgsEntrega25/camerainterna.jpg",
    "name": "Câmera Interna Wi-fi WHOME",
    "description": "Monitore o que acontece dentro dos espaços internos e proteja o seu patrimônio e quem você ama. Com campo de visão panorâmica de 355° e visão angular de 100°.",
    "value": "R$240.00"
    },

    {
    "id": 6,
    "etiqueta": "Home",
    "img_src": "./imgsEntrega25/interruptorrefinatto.webp",
    "name": "Interruptor Refinatto LED Dourado",
    "description": "A Refinatto é uma linha modular feita para inspirar a sua natureza, com a funcionalidade e exclusividade que você precisa e merece.",
    "value": "R$70.00"
    }
]


function createProductCard(){
    
    for(let i=0; i<data.length; i++){
        
        const divCards = document.getElementById("divCards");
        
        const prodCard = document.createElement("div");
        prodCard.classList.add("cardProd");
        prodCard.id = data[i].id;
        divCards.appendChild(prodCard);
        
        const labelHolderDiv = document.createElement("div");
        labelHolderDiv.classList.add("labelDiv");
        prodCard.appendChild(labelHolderDiv);
        
        const prodLabel = document.createElement("label");
        prodLabel.classList.add("classTag");
        prodLabel.innerText = data[i].etiqueta;
        labelHolderDiv.appendChild(prodLabel);
        
        const prodFigure = document.createElement("figure");
        prodCard.appendChild(prodFigure);
        
        const prodImg = document.createElement("img");
        prodImg.classList.add("productImg");
        prodImg.src = data[i].img_src;
        prodFigure.appendChild(prodImg);
        
        const prodTitle = document.createElement("h3");
        prodTitle.classList.add("prodName");
        prodTitle.innerText = data[i].name;
        prodCard.appendChild(prodTitle);
        
        const descrip = document.createElement("p");
        descrip.classList.add("prodDescr");
        descrip.innerText = data[i].description;
        prodCard.appendChild(descrip);
        
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("price");
        priceSpan.innerText = data[i].value;
        prodCard.appendChild(priceSpan);
        
        const addToCartButton = document.createElement("button");
        addToCartButton.type = "button";
        addToCartButton.classList.add("addToCart");
        addToCartButton.innerText = "Adicionar ao carrinho";
        addToCartButton.addEventListener("click", function(event){
            let id = event.target.parentNode;
            createShopCartItem(id.id);
        });
        prodCard.appendChild(addToCartButton);
        
        const vitrine = document.querySelector(".mainSection");
        vitrine.appendChild(prodCard);
        
    }
}

createProductCard();



function createShopCartItem(product){
    document.querySelector("#emptyCart").style.display = "none";
    document.querySelector("#adicioneItens").style.display = "none";

    const shopCartUl = document.getElementById("prodList");
    
    const prodLi = document.createElement("li");
    prodLi.id = `${product}x`;
    shopCartUl.appendChild(prodLi);

    const shopCartElemDiv = document.createElement("div");
    prodLi.appendChild(shopCartElemDiv);

    const prodImg = document.createElement("img");
    prodImg.src = data[parseInt(product-1)].img_src;
    shopCartElemDiv.appendChild(prodImg);

    const prodTitle = document.createElement("h3");
    prodTitle.innerText = data[parseInt(product-1)].name;
    shopCartElemDiv.appendChild(prodTitle);

    const price = document.createElement("span");
    price.innerText = data[parseInt(product-1)].value;
    shopCartElemDiv.appendChild(price);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeFromCart");
    removeButton.innerText = "Remover";
    removeButton.addEventListener("click", function(event){
        let id = event.target.parentNode.parentNode;
        removing(id.id);
    });
    shopCartElemDiv.appendChild(removeButton);    
}

function removing(event){
    let getElement = `${event}`
    let removable = document.getElementById(`${event}`);
    let mainDiv = document.getElementById("prodList");
    mainDiv.removeChild(removable);    
}

