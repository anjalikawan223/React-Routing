import { Link } from "react-router-dom";

export function Contact() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-4 text-3xl font-bold text-slate-900">Contact</h1>
            <p className="text-lg text-slate-600">A separate page component gives you another route to practice with.</p>
            <Link className="font-medium text-indigo-600 hover:text-indigo-800" to="/">Return to Home Page</Link>
        </section>
    )
}