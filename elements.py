import wikipedia
import json

popular_elements = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen",
    "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur",
    "Chlorine", "Argon", "Potassium", "Calcium", "Iron", "Copper", "Zinc", "Silver",
    "Gold", "Mercury", "Lead", "Tin", "Nickel", "Chromium", "Manganese", "Uranium"
]

element_dict = {}

for element in popular_elements:
    try:
        summary = wikipedia.summary(element, sentences=3)
    except wikipedia.exceptions.DisambiguationError as e:
        summary = f"Disambiguation error. Possible options: {', '.join(e.options[:3])}."
    except wikipedia.exceptions.PageError:
        summary = "Page not found."

    element_dict[element] = {
        "image": f"{element.lower()}.jpg",
        "description": summary
    }

# Write to file in JavaScript-friendly format
with open("elementDescriptions.js", "w", encoding="utf-8") as file:
    file.write("const elementData = ")
    json.dump(element_dict, file, indent=4, ensure_ascii=False)
    file.write(";")
