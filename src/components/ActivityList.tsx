import { Dispatch, useMemo } from "react";
import { Activity } from "../types";

import { FaEdit, FaTimes } from "react-icons/fa";
import { categories } from "../data/categories";
import { ActivityActions } from "../reducers/activity-reducer";

type ActivityListProps = {
	activities: Activity[];
	dispatch: Dispatch<ActivityActions>
};

const ActivityList = ({ activities, dispatch }: ActivityListProps) => {
	/* Comprobamos que hay actividades agregadas */
	const isEmpyActivities = useMemo(() => activities.length === 0, [activities]);

	/* Cambiamos el numero de la categoría, según su nombre  */
	const categoryName = useMemo(
		() => (category: Activity["category"]) =>
			categories.map((cat) => (cat.id === category ? cat.name : "")),

		[activities]
	);

	return (
		<div className="p-5 space-y-3  bg-white dark:bg-gray-800 rounded-lg shadow sm:h-[370px] sm:overflow-scroll scrollbar-hide mb-10">
			< h2 className="text-xl font-bold text-center text-slate-600 dark:text-white" >
				Comida y Actividades
			</h2 >

			{
				isEmpyActivities ? (
					<p className="my-5 text-center text-gray-600" >
						No hay actividades aún...
					</p>
				) : (
					activities.map((activity) => (
						<div
							key={activity.id}
							className="flex justify-between px-5 py-0 pb-2 bg-gray-100 rounded-lg shadow-md dark:bg-slate-200 md:px-6 "
						>
							<div className="relative">
								<p
									className={`absolute text-white top-0.5 -left-8 font-bold uppercase px-3 text-[10px] py-1 rounded-md shadow-md ${activity.category === 1 ? "bg-lime-500 dark:bg-lime-600" : "bg-orange-500 dark:bg-orange-600"}`}
								>
									{categoryName(activity.category)}
								</p>
								<p className="mt-6 text-sm font-bold">{activity.name}</p>
								<p
									className={`font-black text-sm mt-1 sm:text-lg md:-mt-2 w-44  ${activity.category === 1 ? "text-lime-500" : "text-orange-600"}`}
								>
									{activity.calories} <span>Calorías</span>
								</p>
							</div>
							<div className="flex items-center gap-5 mt-3">
								<button onClick={() => dispatch({ type: 'set-activity', payload: { id: activity.id } })}>
									<a href="#form"><FaEdit className="w-5 h-5 text-gray-800" /></a>
								</button>
								<button onClick={() => {
									return dispatch({ type: "delete-activity", payload: { id: activity.id } });
								}}>
									<FaTimes className="w-5 h-5 text-red-500" />
								</button>
							</div>
						</div>
					))
				)}
		</div >
	);
};

export default ActivityList;
