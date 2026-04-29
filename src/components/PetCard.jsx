import { pets } from "../data/pets";

export default function PetCard() {

    const token = "https://static.wikia.nocookie.net/growagarden/images/c/c2/Tradeticket.png";

    const getColor = (tag) => {
        if (tag === "VENOM") return "text-green-400";
        if (tag === "NIGHTMARE") return "text-red-400";
        if (tag === "EVERCHANTED") return "text-purple-400";
        if (tag === "MEGA") return "text-red-600";
        return "text-white";
    };

    const getGlow = (tag) => {
        if (tag === "VENOM") return "hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]";
        if (tag === "NIGHTMARE") return "hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]";
        if (tag === "EVERCHANTED") return "hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]";
        return "";
    };

    const order = ["VENOM", "NIGHTMARE", "EVERCHANTED", "MEGA"];

    const sortedPets = [...pets].sort(
        (a, b) => order.indexOf(a.tag) - order.indexOf(b.tag)
    );

    return (
        <div className="min-h-screen flex flex-col items-center justify-center 
            ">

            {/* GRID 4x2 */}
            <div className="grid grid-cols-4 gap-6">

                {sortedPets.map((pet) => (
                    <div key={pet.id} className="w-[125px] group">

                        <div className={`rounded-xl overflow-hidden 
                            bg-blue-700 shadow-lg transition duration-300 
                            hover:scale-105 ${getGlow(pet.tag)}`}>

                            {/* TOP */}
                            <div className="relative h-[75px] flex items-center justify-center 
                                bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">

                                <img
                                    src={pet.img}
                                    alt="pet"
                                    className="w-16 h-16 object-contain"
                                />

                                <p className="absolute bottom-1 text-white text-xs font-extrabold">
                                    {pet.weight}
                                </p>
                            </div>

                            {/* BOTTOM */}
                            <div className="bg-white py-1 text-center">
                                <p className={`text-[11px] font-extrabold ${getColor(pet.tag)}`}>
                                    {pet.tag}
                                </p>
                                <p className="text-[11px] font-extrabold text-gray-800">
                                    {pet.price}
                                </p>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* BUTTON */}
            <div className="flex gap-6 mt-5">

                <button className="w-[180px] flex flex-col items-center gap-1 
                    bg-gradient-to-r from-blue-500 to-blue-700 
                    text-white px-5 py-2 rounded-lg font-bold shadow 
                    hover:scale-105 transition text-sm">

                    <span>JOKO MUTASI </span>

                    <span className="flex items-center gap-1 text-sm">
                        VENOM 150
                        <img src={token} alt="Token" className="w-4 h-4" />
                    </span>

                </button>

                <button className="w-[180px] flex flex-col items-center gap-1 
                    bg-gradient-to-r from-blue-500 to-blue-700 
                    text-white px-5 py-2 rounded-lg font-bold shadow 
                    hover:scale-105 transition text-sm">

                    <span>1000 TOKEN 17KAK</span>
                    <span className="text-xs text-blue-200"></span>

                </button>

            </div>

        </div>
    );
}