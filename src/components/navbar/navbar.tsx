import Link from 'next/link'
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('token');
        router.push('/')
    }
    return (
        <div className="bg-gray-400  dark:bg-gray-800 shadow-xl">
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Yuk</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                    <div className="text-sm lg:flex-grow text-white ">
                        <Link
                            href="/dashboard"
                        >
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-6 hover:bg-indigo-300">
                                Home
                            </a>
                        </Link>
                        <Link
                            href="/configure"
                        >
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-6 hover:bg-indigo-300">
                                Configure
                            </a>
                        </Link>
                        <Link
                            href="/log"
                        >
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-6 hover:bg-indigo-300">
                                Log
                            </a>
                        </Link>
                        <div className="flex float-right">
                            <button onClick={logout}>
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-6 hover:bg-indigo-300">
                                    Logout
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;