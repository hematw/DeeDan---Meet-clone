import deedanLogo from "../assets/deedan_logo.png"
import { Link } from "react-router-dom"
import { MdSupportAgent } from "react-icons/md";
import { GoReport } from "react-icons/go";

export default function Header() {
    return (
        <header className="flex justify-between items-center mx-10 my-5 px-6 shadow-xl shadow-gray-400 rounded-lg bg-gray-200 border-yellow-400 border-2">
            <Link to=".">
                <img
                    src={deedanLogo}
                    alt=""
                    className="w-48"
                />
            </Link>

            <nav className="flex gap-10 text-2xl">
                <a href="#">
                    <MdSupportAgent />
                </a>
                <a href="#">
                    <GoReport />
                </a>

            </nav>

        </header>
    )
}