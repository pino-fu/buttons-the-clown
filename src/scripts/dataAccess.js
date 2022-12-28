const applicationState = {
    clowns: [],
    requests: [],
    completions: []
}


const API = "http://localhost:8088" 



export const fetchPostBookingRequest = (bookingRequest) => {
    const mainContainer = document.querySelector("#container")

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingRequest)
    } 

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const fetchPostCompletedBooking = (completedBooking) => {
    const mainContainer = document.querySelector("#container")

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedBooking)
    } 

    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



export const fetchGetBookingRequest = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (requests) => {
            applicationState.requests = requests
        }
    )
}

export const getRequests = () => {
    return [...applicationState.requests]
}


export const fetchGetClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
        })
}

export const getClowns = () => {
    return [...applicationState.clowns]
}


export const fetchGetCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completions) => {
                applicationState.completions = completions
            }
        )
}

export const getCompletions = () => {
    return [...applicationState.completions]
}



export const fetchDeleteRequest = (id) => {
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}