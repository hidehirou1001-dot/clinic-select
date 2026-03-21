export type Department =
    | "内科"
    | "小児科"
    | "外科"
    | "整形外科"
    | "眼科"
    | "耳鼻咽喉科"
    | "皮膚科"
    | "歯科"
    | "胃腸内科"
    | "循環器内科"
    | "歯科口腔外科";

export type FeatureKeyword =
    | "駐車場あり"
    | "駅近(徒歩5分以内)"
    | "バリアフリー"
    | "女性医師在籍"
    | "土曜診療あり"
    | "日曜・祝日診療あり"
    | "オンライン診療対応"
    | "キッズスペースあり"
    | "予防接種対応";

export interface Clinic {
    id: string;
    name: string;
    address: string;
    phone: string;
    departments: Department[];
    features: FeatureKeyword[];
    description: string;
    imageUrl?: string;
    websiteUrl?: string;
}
