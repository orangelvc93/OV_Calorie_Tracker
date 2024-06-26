
type CalorieDisplayProps = {
    calories: number,
    text: string,
}

const CalorieDisplay = ({ calories, text }: CalorieDisplayProps) => {
    return (
        <p className="grid grid-cols-1 font-bold text-center text-white rounded-full">
            <span className="text-3xl font-black text-orange-500">{calories}</span>
            {text}
        </p>
    );
}

export default CalorieDisplay;
