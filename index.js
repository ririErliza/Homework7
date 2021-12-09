
window.onload = function() {
    createSlot()
}


const createSlot = function() {
    let bingoContainerNode = document.getElementById("bingo-container")

    let slotInBingo = 77

    for (let slotNumber = 1; slotNumber <= slotInBingo; slotNumber++) {

        let newSlotNode = document.createElement("div")
        newSlotNode.innerText = slotNumber
        newSlotNode.classList.add("slot")

        newSlotNode.addEventListener("click", selectSlot)

        bingoContainerNode.appendChild (newSlotNode)

    }
}

const selectSlot = function (e) {

    const clickedSlotNode = e.target

    clickedSlotNode.classList.add("selected")

}