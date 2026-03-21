import ClinicSearch from "@/components/ClinicSearch";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-primary-light rounded-xl shadow-sm mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 p-4">
          あなたにぴったりの<br className="md:hidden" />病院を見つけましょう
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
          愛媛県松山市の病院・クリニックを簡単に探せます。<br className="hidden md:block" />
          ご希望の条件にチェックを入れてください。
        </p>
      </section>

      <ClinicSearch />
    </div>
  );
}
