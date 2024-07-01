import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 ">
            <Link href="/" className="font-bold text-xl">HarshilSharma</Link>
            <div className="flex justify-between gap-4">
                <Link href="#about" className="mx-2 text-primary">About</Link>
                <Link href="#projects" className="mx-2 text-primary">Projects</Link>
                <Link href="#contact" className="mx-2 text-primary">Contact</Link>
            </div>
            <ModeToggle></ModeToggle>
        </nav>
    );
}


export default Navbar;