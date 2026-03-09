const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
})


// const colorButton = document.querySelector("#color_Button");

// const color1 = ["#336699", "#4D4D4D", "#FF99CC", "#FFEAD0", "#6CD4FF"];
// const color2 = ["#09579D", "#333333", "#E97D84", "#CDF7F6", "#8FB8DE"];

// let vez = 2;
// let color;
// colorButton.addEventListener("click", () => {
//     // Acessa o :root, entra nos estilos e substitui o valor da variável
//     if (vez === 1) {
//         color = color1;
//         document.querySelector("#cor").textContent = "Cor 1";
//         vez = 2;
//     }
//     else {
//         color = color2;
//         document.querySelector("#cor").textContent = "Cor 2";
//         vez = 1;
//     }


//     document.documentElement.style.setProperty('--primary-color', color[0]);
//     document.documentElement.style.setProperty('--secondary-color', color[1]);
//     document.documentElement.style.setProperty('--accent-color', color[2]);
//     document.documentElement.style.setProperty('--text-color', color[1]);
//     document.documentElement.style.setProperty('--bg-color', color[3]);


// })
