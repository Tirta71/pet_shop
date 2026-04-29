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

    return (
        <div className="min-h-screen flex flex-col items-center justify-center 
            bg-gradient-to-b from-blue-950 via-blue-900 to-black p-8">

            {/* GRID */}
            <div className="grid grid-cols-4 gap-6">

                {pets.map((pet) => (
                    <div key={pet.id} className="w-[125px] group">

                        <div className={`rounded-xl overflow-hidden 
                            bg-blue-700 shadow-lg transition duration-300 
                            hover:scale-105 ${getGlow(pet.tag)}`}>

                            {/* TOP */}
                            <div className="relative h-[75px] flex items-center justify-center 
                                bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">

                                {/* shine */}
                                <div className="absolute inset-0 bg-gradient-to-tr 
                                    from-white/20 via-transparent to-transparent opacity-40" />

                                <img
                                    src={pet.img}
                                    alt="pet"
                                    className="w-16 h-16 object-contain drop-shadow-xl 
                                    group-hover:scale-110 transition"
                                />

                                <p className="absolute bottom-1 text-white text-xs font-extrabold 
                                    drop-shadow-md">
                                    {pet.weight}
                                </p>
                            </div>

                            {/* DIVIDER */}
                            <div className="h-[1px] bg-white/10" />

                            {/* BOTTOM */}
                            <div className="bg-white py-1.5 text-center">

                                <p className="text-[11px] leading-tight">
                                    <span className={`font-extrabold ${getColor(pet.tag)}`}>
                                        {pet.tag}
                                    </span>
                                </p>

                                <p className="text-[11px] font-extrabold text-gray-800 tracking-wide">
                                    {pet.price}
                                </p>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* BUTTON */}
            <div className="flex gap-6 mt-5">

                <button className="flex flex-col items-center gap-1 
                    bg-gradient-to-r from-blue-500 to-blue-700 
                    text-white px-5 py-2 rounded-lg font-bold shadow 
                    hover:scale-105 active:scale-95 transition text-sm">

                    <span>JOKO MUTASI VENOM</span>

                    <span className="flex items-center gap-1 text-xs">
                        150
                        <img src={token} alt="Token" className="w-4 h-4" />
                    </span>

                </button>

                <button className="flex flex-col items-center gap-1 
                    bg-gradient-to-r from-blue-500 to-blue-700 
                    text-white px-5 py-2 rounded-lg font-bold shadow 
                    hover:scale-105 active:scale-95 transition text-sm">

                    <span>1100 TOKEN</span>
                    <span className="text-xs text-blue-200">20KAK</span>

                </button>

            </div>

        </div>
    );
}