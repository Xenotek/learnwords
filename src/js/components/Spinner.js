import React from "react"
import { SingleComponentPage } from '../helpers'

let Spinner = () => (
        <div className="spinner">
            spinner...
        </div>
)

Spinner = SingleComponentPage({})(Spinner)

export default Spinner
