import { fetchPostBookingRequest } from "./dataAccess.js"


export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Name of Parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Name of Child</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Venue Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date Requested</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="headCount">Number of Children</label>
            <input type="number" name="headCount" class="input" />
        </div>
        <div class="field">
        <label class="label" for="duration">Duration</label>
        <input type="number" name="duration" class="input" />
    </div>    
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {

        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const address = document.querySelector("input[name='address']").value
        const date = document.querySelector("input[name='serviceDate']").value
        const headCount = document.querySelector("input[name='headCount']").value
        const duration = document.querySelector("input[name='duration']").value

        const dateString = new Date(date)
        const unixDate = dateString.getTime()


        const newBookingRequestObj = {
            parent: parentName,
            child: childName,
            location: address,
            when: unixDate,
            count: headCount,
            length: duration
        }
            fetchPostBookingRequest(newBookingRequestObj)
    }
})