import Link from 'next/link'
import { MultiStepModal } from '../../../multi-step-modal'

const Navbar = () => {
    return (
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            zkConfide
                        </span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#problem" className="hover:text-purple-400 transition-colors">
                        Problem
                    </a>
                    <a href="#solution" className="hover:text-purple-400 transition-colors">
                        Solution
                    </a>
                    <a href="#comparison" className="hover:text-purple-400 transition-colors">
                        Comparison
                    </a>
                    <a href="#changes" className="hover:text-purple-400 transition-colors">
                        What We Changed
                    </a>
                </div>
                <MultiStepModal />
            </div>
        </nav>
    )
}

export default Navbar