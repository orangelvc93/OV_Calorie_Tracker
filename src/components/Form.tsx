import { ChangeEvent, FormEvent, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

/* Componentes de terceros */
import { v4 as uuidv4 } from "uuid";

const initialState: Activity = {
	id: uuidv4(),
	category: 1,
	name: "",
	calories: 0,
};
const Form = () => {
	/* Iniciamos el estado para guardar los valores del form =====
    ============================================================== */
	const [activity, setActivity] = useState<Activity>(initialState);

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
	};

	return (
		<form
			className="p-5 space-y-5 bg-white rounded-lg shadow"
			onSubmit={handleSubmit}
		>
			{/* Categorías ===========================================
            ======================================================== */}
			<div className="grid grid-cols-1 gap-3">
				<label
					htmlFor="category"
					className="font-bold text-lime-900"
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
			<div className="grid grid-cols-1 gap-3">
				<label
					htmlFor="name"
					className="font-bold text-lime-900"
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
			<div className="grid grid-cols-1 gap-3">
				<label
					htmlFor="calories"
					className="font-bold text-lime-900"
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

			<input
				type="submit"
				value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
				className="w-full p-2 font-bold text-white uppercase bg-gray-800 rounded-md cursor-pointer hover:bg-slate-900 disabled:opacity-25 "
				disabled={!isValidActivity()}
			/>
		</form>
	);
};

export default Form;
