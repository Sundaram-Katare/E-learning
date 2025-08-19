import { useNavigate } from "react-router-dom";

const CategoryCard = ({ color, icon, text, route }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`cursor-pointer border p-4 m-3 sm:m-5 flex flex-col items-center justify-between 
            text-center text-white font-semibold max-w-sm sm:max-w-md max-h-[180px] rounded-2xl 
            text-xl sm:text-2xl shadow-md shadow-yellow-500/50 h-full bg-gradient-to-br ${color} 
            hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out`}
            onClick={() => navigate(route)}
        >
            <div className="mb-3 text-4xl sm:text-5xl">{icon}</div>
            <h2 className="mb-2 truncate w-full">{text}</h2>
            <hr className="w-full border-t border-white/40" />
        </div>
    );
};

export default CategoryCard;
