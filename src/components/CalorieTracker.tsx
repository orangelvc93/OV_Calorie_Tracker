import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
    activities: Activity[]
}
const CalorieTracker = ({ activities }: CalorieTrackerProps) => {

    /* Calcular el total de calorías consumidas */
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities]);

    /* Calcular el total de calorías quemadas */
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities]);

    /* Calcular la diferencia de calorías */
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities]);

    return (
        <>
            <h2 className="text-xl font-bold text-center text-white ">
                Resumen de Calorías
            </h2>
            <div className="flex justify-center mt-3 sm:mt-1 sm:gap-x-28 gap-x-10">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text="Consumidas"
                />
                <CalorieDisplay
                    calories={caloriesBurned}
                    text="Quemadas"
                />
                <CalorieDisplay
                    calories={netCalories}
                    text="Diferencia"
                />
            </div>
        </>
    );
}

export default CalorieTracker;
