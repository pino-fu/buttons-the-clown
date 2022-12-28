import { BookingForm } from "./bookingForm.js"
import { Requests, Completions } from "./requests.js"


export const Clowns = () => {
    return `
    <h1>Down to Clown</h1>
    <section class="bookingRequestForm">
        ${BookingForm()}
    </section>

    <section class="bookingRequests">
        <h2>Bookings</h2>
        ${Requests()}
    </section>

    <section class="completed">
        <h2>Completed Bookings</h2>
        ${Completions()}
        </section>
    `
}