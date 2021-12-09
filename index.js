



const createSlot = function() {
    let bingoContainerNode = document.getElementById("bingo-container")

    let slotInBingo = 77

    for (let slotNumber = 1; slotNumber <= slotInBingo; slotNumber++) {

        let newSlotNode = document.createElement("div")
        newSlotNode.innerText = slotNumber
        newSlotNode.classList.add("slot")

        bingoContainerNode.appendChild (newSlotNode)

    }
}

window.onload = function() {
    createSlot()
}