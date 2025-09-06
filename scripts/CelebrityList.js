import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (clickEvent) => {
    const clickedCelebrity = clickEvent.target

    if (clickedCelebrity.dataset.type === "celebrity") {
        window.alert(`${clickedCelebrity.innerText} is a ${clickedCelebrity.dataset.sport} star`)
    }
})