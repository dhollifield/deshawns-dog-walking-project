import { getPets, getWalkers, getCitiesForWalker } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
    let petWalker = ''

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const cities = getCitiesForWalker(currentPetWalker.id).join(', ')
        console.log(cities)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cities}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

