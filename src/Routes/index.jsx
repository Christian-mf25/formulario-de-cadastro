import { Switch, Route, useHistory } from "react-router-dom"
import Login from "../Pages/Login"
import Home from "../Pages/Home"

import { useState } from "react"

const Routes = () => {

	const history = useHistory()
	const [newUser, setNewUser] = useState()

	const handleForm = (data) => {
		history.push(`/home/${data.name}`)
		console.log(data)
		setNewUser(data)
	}

	return (
		<Switch>

			<Route exact path="/">
				<Login handleForm={handleForm} />
			</Route>

			<Route exact path="/home/:name">
				<Home newUser={newUser} />
			</Route>

		</Switch>
	)
}

export default Routes