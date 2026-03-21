export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8 text-center mt-auto border-t border-gray-200">
            <div className="container mx-auto px-4">
                <p className="mb-3 text-base md:text-lg">高齢者の方にも分かりやすい病院選びをサポートします</p>
                <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} ClinicSelect. All rights reserved.</p>
            </div>
        </footer>
    );
}
