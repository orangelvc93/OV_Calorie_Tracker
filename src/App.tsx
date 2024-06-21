import { useEffect, useState } from "react";

/* Importaciones de componentes externos */
import { FaMoon, FaSun } from "react-icons/fa";
import Form from "./components/Form";

function App() {
	/* Controlar el tema de la web ================================= 
	==============================================================*/

	const [theme, setTheme] = useState(() => {
		/* if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		} */
		return "light";
	});

	useEffect(() => {
		const html = document.documentElement;

		if (theme === "light") {
			html.classList.remove("dark");
			html.classList.add("light");
		} else {
			html.classList.remove("light");
			html.classList.add("dark");
		}
	}, [theme]);

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<>
			<header className="py-3 sm:py-4 bg-lime-600 md:px-5">
				<div className="flex flex-col items-center justify-center max-w-6xl mx-auto space-y-3 sm:space-y-0 sm:justify-between sm:flex-row">
					<h1 className="text-2xl font-bold text-white uppercase">
						Contador de Calorías
					</h1>
					<div className="flex items-center justify-center space-x-5">
						<button
							onClick={handleChangeTheme}
							className="text-2xl text-white"
						>
							{theme === "light" ? <FaMoon /> : <FaSun />}
						</button>
						<button className="px-4 py-2 font-bold text-white uppercase bg-gray-900 rounded-lg">
							Reiniciar App
						</button>
					</div>
				</div>
			</header>
			<main className="bg-lime-500">
				<div className="grid grid-cols-1 mx-auto lg:space-x-5 lg:max-w-6xl lg:grid-cols-2">
					<section className="px-3 pt-10 pb-5 ">
						<Form />
					</section>
				</div>
			</main>
		</>
	);
}

export default App;
