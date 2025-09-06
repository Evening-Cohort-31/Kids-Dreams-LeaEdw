import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (clickEvent) => {
    const clickedChild = clickEvent.target

    if (clickedChild.dataset.type === "child") {
        window.alert(`${clickedChild.innerText}'s wish is ${clickedChild.dataset.wish}`)
    }
})
