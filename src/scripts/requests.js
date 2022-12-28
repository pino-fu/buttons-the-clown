import { getRequests, fetchDeleteRequest, fetchPostCompletedBooking, getClowns, getCompletions } from "./dataAccess.js";


const requestString = (request) => {
    const clowns = getClowns()

    const dateStringLong = new Date(request.when)
    const dateString = dateStringLong.toLocaleDateString("en-US", {})

    return `<li class="description">
    ${request.parent} is booked for ${request.count} kids on ${dateString}
    <select id="clowns">
    <option>Select a Clown</option>
    ${
        clowns.map(
            clown => {
               return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
    }
    </select>
    <button class="request__delete" id="deny--${request.id}">Deny</button>
    </li>`
}






export const Requests = () => {
    const requestsToBeInChronoOrder = getRequests()
    const chronoRequests = requestsToBeInChronoOrder.sort(
        (a, b) => Number(a.when) - Number(b.when),
    )


    return `<ul>
            ${chronoRequests.map(requestString).join("")
        }
            </ul>
            `
}



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", 
    (click) => {

        if (click.target.id.startsWith("deny--")) {
            const [, requestId] = click.target.id.split("--")
            fetchDeleteRequest(parseInt(requestId))
        }
    }
)


mainContainer.addEventListener("change", // creates new booking object
    (event) => {
        if (event.target.id.startsWith("clowns")) {
            const [requestId, clownId] = event.target.value.split("--")

            const dateCompleted = new Date().toDateString()

            const completedBooking = {
                requestNumber: requestId,
                clownNumber: clownId,
                date: dateCompleted
            }
            fetchPostCompletedBooking(completedBooking)
        }
    }
)



export const Completions = () => { // creates html list of completed bookings 
    const completed = getCompletions()

    return completed.map(
            (complete) => {
                return `<li>Booking #${complete.id} was completed on ${complete.date}</li>`
            }
    ).join("")
}