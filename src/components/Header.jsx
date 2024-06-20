import { MdSupportAgent } from "react-icons/md";
import { GoReport } from "react-icons/go";

export default function Header() {
    return (
        <header className="flex mt-5 justify-between items-center mx-10 px-6 py-4 shadow-md shadow-gray-400 rounded-lg bg-white border-yellow-400 border-2">
            <a
                className="flex items-center text-3xl font-bold"
                href="#">
                <img
                    src='images/deedan_logo.png'
                    alt=""
                    className="w-14 mr-4"
                />
                DiDAAR
            </a>

            <nav className="flex items-center gap-10 text-2xl">
                <a
                    href="#"
                    className="p-3 rounded-full hover:bg-gray-200 transition-all ease-linear duration-150"
                >
                    <MdSupportAgent />
                </a>
                <a
                    href="#"
                    className="p-3 rounded-full hover:bg-gray-200 transition-all ease-linear duration-150"
                >
                    <GoReport />
                </a>
                <a
                    href="#"
                    className=""
                >
                    <img
                        src="./images/avatar.png"
                        alt=""
                        className="w-10 rounded-full  border-yellow-400 border-4"
                    />
                </a>
            </nav>

        </header>
    )
}