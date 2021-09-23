import "./style.css"
import { useHistory, useParams } from "react-router-dom"
import { Button } from "@material-ui/core"

const Home = ({ newUser }) => {

	const history = useHistory()
	const { name } = useParams()

	const handleClick = () => {
		history.push("/")
	}

	return (
		<section id="success">

			<div className="succes-container">
				<div className="text">
					<h2 className="name">
						Bem vindo, {newUser && newUser.name}
					</h2>
					<p>Cadastro concluído com sucesso</p>
				</div>

				<Button
					onClick={() => handleClick()}
					variant="contained"
					color="info"
					className="back-button" >
					Voltar
				</Button>
			</div>
		</section>
	)
}

export default Home