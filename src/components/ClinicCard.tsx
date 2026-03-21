import { Clinic } from "@/types/clinic";

interface Props {
    clinic: Clinic;
}

export default function ClinicCard({ clinic }: Props) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{clinic.name}</h3>
                    <p className="text-gray-600 font-medium text-lg">{clinic.address}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {clinic.departments.map(dep => (
                        <span key={dep} className="bg-primary-light text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold">
                            {dep}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-5">
                <p className="text-lg text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {clinic.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {clinic.features.map(feature => (
                    <span key={feature} className="bg-white text-gray-700 px-3 py-1 rounded border border-gray-300 text-sm font-medium">
                        {feature}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <span className="text-gray-500 font-bold ml-1">電話番号:</span>
                <span className="text-2xl font-bold text-gray-800 tracking-wider bg-primary-light/50 px-3 py-1 rounded">{clinic.phone}</span>
            </div>
        </div>
    );
}
