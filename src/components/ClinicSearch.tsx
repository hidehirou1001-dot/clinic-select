"use client";

import { useState } from "react";
import { clinicsData } from "@/data/clinics";
import ClinicCard from "@/components/ClinicCard";
import SearchForm from "@/components/SearchForm";
import { Department, FeatureKeyword } from "@/types/clinic";

export default function ClinicSearch() {
    const [draftDepartments, setDraftDepartments] = useState<Department[]>([]);
    const [draftFeatures, setDraftFeatures] = useState<FeatureKeyword[]>([]);

    const [activeDepartments, setActiveDepartments] = useState<Department[]>([]);
    const [activeFeatures, setActiveFeatures] = useState<FeatureKeyword[]>([]);

    const handleSearch = () => {
        setActiveDepartments(draftDepartments);
        setActiveFeatures(draftFeatures);
    };

    const toggleDepartment = (dep: Department) => {
        setDraftDepartments(prev =>
            prev.includes(dep) ? prev.filter(d => d !== dep) : [...prev, dep]
        );
    };

    const toggleFeature = (feat: FeatureKeyword) => {
        setDraftFeatures(prev =>
            prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]
        );
    };

    const filteredClinics = clinicsData.filter(clinic => {
        const matchDep = activeDepartments.length === 0 ||
            activeDepartments.some(dep => clinic.departments.includes(dep));

        const matchFeat = activeFeatures.length === 0 ||
            activeFeatures.every(feat => clinic.features.includes(feat));

        return matchDep && matchFeat;
    });

    return (
        <>
            <SearchForm
                draftDepartments={draftDepartments}
                draftFeatures={draftFeatures}
                onToggleDepartment={toggleDepartment}
                onToggleFeature={toggleFeature}
                onSearch={handleSearch}
            />
            <section>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b-2 border-primary pb-3 gap-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        病院一覧
                        {(activeDepartments.length > 0 || activeFeatures.length > 0) && (
                            <span className="text-sm font-normal text-gray-500 ml-3">
                                (絞り込み結果)
                            </span>
                        )}
                    </h2>
                    <span className="text-lg text-gray-600 font-bold bg-gray-100 px-4 py-2 rounded-full shadow-sm">
                        該当 <span className="text-primary text-3xl mx-1">{filteredClinics.length}</span> 件
                    </span>
                </div>

                {filteredClinics.length > 0 ? (
                    <div className="space-y-6">
                        {filteredClinics.map(clinic => (
                            <ClinicCard key={clinic.id} clinic={clinic} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-10 text-center rounded-xl border border-gray-200">
                        <p className="text-2xl text-gray-600 font-bold mb-3">条件に一致する病院が見つかりませんでした。</p>
                        <p className="text-gray-500 text-lg">条件を変更して、再度検索してください。</p>
                    </div>
                )}
            </section>
        </>
    );
}
