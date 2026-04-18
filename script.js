
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function() {



    const product = document.getElementById("product").value;
    const description = document.getElementById("description").value;
    const price = Number(document.getElementById("price").value);
    const image = document.getElementById("image").value.trim() || "https://i.pinimg.com/736x/02/24/38/0224383191ee771d2ef1ce48c314e627.jpg";
    const coupon = document.getElementById("coupon").value;
    
    

if (!product || !description || !price) {
    alert("Por favor completa los campos obligatorios");
    return;
}
    let finalPrice = price;

if (coupon === "DESC50") {
    finalPrice = price * 0.5;
}
    
    const card = document.createElement("div");
    card.classList.add("tarjeta");

    card.innerHTML = `
    <img src="${image}" width="150">
    <h3>${product}</h3>
    <p>${description}</p>
    <p>Precio final: $${finalPrice}</p>
    `;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";

    deleteBtn.addEventListener("click", function () {
        card.remove();
    });

    card.appendChild(deleteBtn);

    const container = document.getElementById("productContainer");
    container.appendChild(card);

    document.getElementById("product").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("coupon").value = "";

});