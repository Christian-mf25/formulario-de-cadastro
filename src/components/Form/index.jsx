import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import "./style.css"

const Form = ({ handleForm }) => {


	const schema = yup.object().shape({
		name: yup.string().required("Campo obrigatório"),
		email: yup.string().email("Email inválido").required("Campo obrigatório"),
		password: yup.string().min(8, "Mínimo de 8 dígitos")
			.matches(
				/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				"Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
			).required("Campo obrigatório"),
		confirm_password: yup.string().oneOf([yup.ref("password"), null], "Senhas devem ser iguais")

	})

	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

	return (

		<div id="container">
			<h3 className="title">Cadastre-se e encontre sua rota!</h3>
			<form
				onSubmit={handleSubmit(handleForm)}
				className="form-style">

				<div className="input-style">
					<TextField
						label="Nome"
						variant="filled"
						size="small"
						color="info"
						margin="normal"
						{...register("name")}
						error={!!errors.name}
						helperText={errors.name?.message} />

					<TextField
						label="Email"
						variant="filled"
						size="small"
						color="info"
						margin="normal"
						{...register("email")}
						errors={!!errors.email}
						helperText={errors.email?.message} />

					<TextField
						label="Senha"
						type="password"
						variant="filled"
						size="small"
						color="info"
						margin="normal"
						{...register("password")}
						error={!!errors.password}
						helperText={errors.password?.message} />

					<TextField
						label="Confirmar Senha"
						type="password"
						variant="filled"
						size="small"
						color="info"
						margin="normal"
						{...register("confirm_password")}
						error={!!errors.confirm_password}
						helperText={errors.confirm_password?.message} />
				</div>


				<Button
					variant="contained"
					type="submit"
					color="info">
					Cadastrar
				</Button>
			</form>

		</div>
	)
}

export default Form