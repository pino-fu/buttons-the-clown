import { Clowns } from "./clowns.js"
import { fetchGetBookingRequest, fetchGetClowns, fetchGetCompletions } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")


const render = () => {
  fetchGetBookingRequest()
  .then(()=> fetchGetClowns())
  .then(()=> fetchGetCompletions())
  .then(
    () => {
      mainContainer.innerHTML = Clowns()
    }
  )
}

render()


mainContainer.addEventListener("stateChanged", customEvent => {
  render()
})