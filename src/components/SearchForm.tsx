"use client";

import { Department, FeatureKeyword } from "@/types/clinic";

const ALL_DEPARTMENTS: Department[] = [
    "内科", "小児科", "外科", "整形外科", "眼科", "耳鼻咽喉科", "皮膚科", "歯科", "胃腸内科", "循環器内科", "歯科口腔外科"
];

const ALL_FEATURES: FeatureKeyword[] = [
    "駐車場あり", "駅近(徒歩5分以内)", "バリアフリー", "女性医師在籍", "土曜診療あり", "日曜・祝日診療あり", "オンライン診療対応", "キッズスペースあり", "予防接種対応"
];

interface Props {
    draftDepartments: Department[];
    draftFeatures: FeatureKeyword[];
    onToggleDepartment: (dep: Department) => void;
    onToggleFeature: (feat: FeatureKeyword) => void;
    onSearch: () => void;
}

export default function SearchForm({
    draftDepartments,
    draftFeatures,
    onToggleDepartment,
    onToggleFeature,
    onSearch
}: Props) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-primary-light pb-2">
                条件をしぼりこむ
            </h2>

            <div className="space-y-8">
                <div>
                    <h3 className="font-bold text-xl text-gray-700 mb-4 flex items-center gap-2">
                        <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        診療科から選ぶ（複数選択可）
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {ALL_DEPARTMENTS.map(dep => (
                            <label key={dep} className={`flex items-center space-x-2 cursor-pointer px-4 py-3 rounded-lg border transition ${draftDepartments.includes(dep) ? 'bg-primary-light border-primary' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
                                <input
                                    type="checkbox"
                                    checked={draftDepartments.includes(dep)}
                                    onChange={() => onToggleDepartment(dep)}
                                    className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary focus:ring-2 cursor-pointer"
                                />
                                <span className="text-lg font-medium select-none">{dep}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-xl text-gray-700 mb-4 flex items-center gap-2">
                        <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        こだわり条件から選ぶ（すべて満たす）
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {ALL_FEATURES.map(feat => (
                            <label key={feat} className={`flex items-center space-x-2 cursor-pointer px-4 py-3 rounded-lg border transition ${draftFeatures.includes(feat) ? 'bg-primary-light border-primary' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
                                <input
                                    type="checkbox"
                                    checked={draftFeatures.includes(feat)}
                                    onChange={() => onToggleFeature(feat)}
                                    className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary focus:ring-2 cursor-pointer"
                                />
                                <span className="text-lg font-medium select-none">{feat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="pt-6 text-center">
                    <button
                        onClick={onSearch}
                        className="bg-primary hover:bg-primary-dark text-white font-bold text-2xl py-4 px-12 rounded-full shadow-lg transition w-full md:w-auto hover:-translate-y-1 transform"
                    >
                        この条件で検索する
                    </button>
                </div>
            </div>
        </div>
    );
}
