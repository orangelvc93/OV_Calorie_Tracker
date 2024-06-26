import { useEffect, useMemo, useReducer, useState } from "react";

/* Importaciones de componentes externos */
import { FaMoon, FaSun } from "react-icons/fa";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {
	/* agregamos el reducer  */
	const [state, dispatch] = useReducer(activityReducer, initialState);
	/* console.log(state); */

	useEffect(() => {
		localStorage.setItem('activities', JSON.stringify(state.activities))
	}, [state.activities])



	/* Deshabilitar resetear app cuando no tenga actividades =======
	==============================================================*/
	const disabledRestartApp = () => useMemo(() => state.activities.length, [state.activities])



	/* Controlar el tema de la web ================================= 
	==============================================================*/
	const [theme, setTheme] = useState(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}
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
	/*  ================================= 
	==============================================================*/



	return (
		<>
			<header id="form" className="relative py-3 bg-lime-800 sm:py-2 dark:bg-lime-700 md:px-5">
				<div className="flex flex-col items-center justify-center max-w-5xl px-3 mx-auto space-y-3 sm:space-y-0 sm:justify-between sm:flex-row">
					<h1 className="text-lg font-bold text-white uppercase">
						Contador de Calorías
					</h1>
					<div className="flex items-center justify-center space-x-5">
						<button
							onClick={handleChangeTheme}
							className="text-2xl text-white"
						>
							{theme === "light" ? <FaMoon /> : <FaSun />}
						</button>
						<button
							disabled={!disabledRestartApp()}
							onClick={() => dispatch({ type: "restart-app" })} className="px-4 py-2 text-sm font-bold text-white uppercase bg-gray-900 rounded-lg disabled:opacity-15">
							Reiniciar App
						</button>
					</div>
				</div>
			</header>
			<main className="">
				<div className="grid grid-cols-1 mx-auto -mt-6 lg:space-x-1 lg:max-w-5xl lg:grid-cols-2">
					<section className="order-1 px-3 pt-10 mb-8 md:pb-5 md:mb-5">
						<Form
							dispatch={dispatch}
							/* Pasamos el state, ya que guarda las actividades y el activeId  */
							state={state}
						/>
					</section>
					<section className="order-3 px-3 pt-3 lg:order-2 sm:pt-10">
						<ActivityList activities={state.activities} dispatch={dispatch} />
					</section>
					{/* Calculadora de calorias */}
					<section className="order-2 py-3 -mt-5 bg-gray-800 sm:rounded-lg lg:col-span-2">
						<div className="max-w-4xl mx-auto">
							<CalorieTracker
								activities={state.activities}

							/>

						</div>
					</section>
				</div>
			</main>
		</>
	);
}

export default App;
