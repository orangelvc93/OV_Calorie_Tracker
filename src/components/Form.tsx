import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

/* Componentes de terceros */
import { v4 as uuidv4 } from "uuid";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

type FormProps = {
	dispatch: Dispatch<ActivityActions>;
	state: ActivityState;
};

const initialState: Activity = {
	id: uuidv4(),
	category: 1,
	name: "",
	calories: 0,
};

const
	Form = ({ dispatch, state }: FormProps) => {
		/* Iniciamos el estado para guardar los valores del form =====
		============================================================== */
		const [activity, setActivity] = useState<Activity>(initialState);

		/* Creamos un useEffect para detectar cambios y traernos los datos según el id seleccionado */
		useEffect(() => {
			if (state.activeId) {
				/* devuelte un arreglo pero al poner posicion [0] devuelve un objeto */
				const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
				setActivity(selectedActivity)
				/* console.log(state.activeId) */
			}
		}, [state.activeId])


		/* Guardamos los valores en el state de activity con cada cambio =====
		============================================================== */
		const handleChange = (
			e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
		) => {
			/* Si los campos son numéricos, arroja true */
			const isNumberField = ["category", "calories"].includes(e.target.id);

			setActivity({
				...activity,
				[e.target.id]: isNumberField ? +e.target.value : e.target.value,
			});
		};

		const isValidActivity = () => {
			/* devolvemos true o false de acuerdo a la condición */
			const { name, calories } = activity;
			return name.trim() !== "" && calories > 0;
		};

		/* COnfiguramos la acción al enviar los datos  */
		const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			dispatch({ type: "save-activity", payload: { newActivity: activity } });

			/* Limpiamos los inputs y el state luego de enviar los datos */
			setActivity({
				...initialState,
				/* llamamos a la función de nuevo para que genere un nuevo id  */
				id: uuidv4(),
			});
		};

		return (
			<form
				className="p-4 space-y-2 bg-white dark:bg-gray-800 rounded-lg shadow h-[370px]"
				onSubmit={handleSubmit}
			>
				{/* Categorías ===========================================
            ======================================================== */}
				<div className="grid grid-cols-1 gap-1">
					<label
						htmlFor="category"
						className="font-bold text-lime-900 dark:text-white"
					>
						Categoría:
					</label>
					<select
						id="category"
						value={activity.category}
						onChange={handleChange}
						className="w-full p-2 bg-white border rounded-lg border-slate-300 focus:outline-lime-900 text-lime-900"
					>
						{categories.map((category) => (
							<option
								key={category.id}
								value={category.id}
								className="text-lime-900"
							>
								{category.name}
							</option>
						))}
					</select>
				</div>

				{/* Actividad ===========================================
            ======================================================== */}
				<div className="grid grid-cols-1 gap-1">
					<label
						htmlFor="name"
						className="font-bold text-lime-900 dark:text-white"
					>
						Actividad:
					</label>
					<input
						type="text"
						id="name"
						value={activity.name}
						onChange={handleChange}
						placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
						className="w-full p-2 bg-white border rounded-lg border-slate-300 focus:outline-lime-900 text-lime-900"
					/>
				</div>

				{/* Calorías ===========================================
            ======================================================== */}
				<div className="grid grid-cols-1 gap-1 ">
					<label
						htmlFor="calories"
						className="font-bold text-lime-900 dark:text-white"
					>
						Calorías:
					</label>
					<input
						type="text"
						id="calories"
						value={activity.calories}
						onChange={handleChange}
						placeholder="Ej. 200 ó 600"
						className="w-full p-2 bg-white border rounded-lg border-slate-300 focus:outline-lime-900 text-lime-900"
					/>
				</div>

				{/* Botón para enviar datos ================================
            ======================================================== */}
				<div className="pt-5">
					<input
						type="submit"
						value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
						className="w-full p-2 font-bold text-white uppercase rounded-md cursor-pointer bg-slate-700 hover:bg-slate-900 disabled:opacity-25 dark:disabled:opacity-30"
						disabled={!isValidActivity()}
					/>

				</div>
			</form>
		);
	};

export default Form;
