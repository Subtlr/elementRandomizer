const elementList = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen",
    "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur",
    "Chlorine", "Argon", "Potassium", "Calcium", "Iron", "Copper", "Zinc", "Silver",
    "Gold", "Mercury", "Lead", "Tin", "Nickel", "Chromium", "Manganese", "Uranium"
]

let elementDescription = document.querySelector(".element-description")
let elementImage = document.querySelector(".element-image")
let title = document.querySelector(".element-name")

let button = document.getElementById("randomizer-btn")


function getNewElement () {
    let rng = Math.floor(Math.random() * elementList.length);

    console.log(elementList[rng])

    let result = elementData[elementList[rng]];
    let atomTitle = elementList[rng];

    console.log(result)

    return { result, title: atomTitle };
}

button.addEventListener("click", () => {
    let { result: newElement, title: elementTitle }= getNewElement();

    imageFile = "./imgs/" + newElement.image;

    title.textContent = elementTitle;
    elementDescription.textContent = newElement.description;
    elementImage.setAttribute("src", imageFile);
})

button.addEventListener('mouseover', () => {
    button.classList.add('animation-hover');
});

button.addEventListener('mouseout', () => {
    button.classList.remove('animation-hover')
})