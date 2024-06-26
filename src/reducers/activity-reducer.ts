import { Activity } from "../types";

/* Creamos los "actions" del reducer */
export type ActivityActions =
	| { type: "save-activity"; payload: { newActivity: Activity } }
	| { type: "set-activity"; payload: { id: Activity["id"] } }
	| { type: "delete-activity"; payload: { id: Activity["id"] } }
	| { type: "restart-app" };

/* Creamos el type para el TypeScript y darle valores a las variables */
export type ActivityState = {
	activities: Activity[];
	activeId: Activity["id"];
};

/* Buscamos los datos del localStorage para convertirlos en datos utilizables */
const localStorageActivities = (): Activity[] => {
	const activities = localStorage.getItem("activities");
	return activities ? JSON.parse(activities) : [];
};

/* Agregamos el valor inicial para el reducer */
export const initialState: ActivityState = {
	activities: localStorageActivities(),
	activeId: "",
};

/* Creamos el reducer */
export const activityReducer = (
	state: ActivityState = initialState,
	action: ActivityActions
) => {
	switch (action.type) {
		case "save-activity":
			/* Creamos el código para manejar la lógica de guardar el state  */
			/* console.log(action.payload.newActivity); */

			let updatedActivities: Activity[] = [];

			/* Validamos antes que la actividad no exista para crear o actualizar la actividad */
			if (state.activeId) {
				updatedActivities = state.activities.map((activity) =>
					activity.id === state.activeId ? action.payload.newActivity : activity
				);
			} else {
				/* Agregamos una nueva actividad según lo enviado por el submit al state */
				updatedActivities = [...state.activities, action.payload.newActivity];
			}

			return {
				...state,
				activities: updatedActivities,
				activeId: "",
			};
		/* Editar una actividad ya existente */
		case "set-activity":
			console.log(action.payload.id);
			return {
				...state,
				activeId: action.payload.id,
			};

		case "delete-activity":
			return {
				...state,
				activities: state.activities.filter(
					(activity) => activity.id !== action.payload.id
				),
			};

		case "restart-app":
			return {
				activities: [],
				activeId: "",
			};
		default:
			return state;
	}
};
