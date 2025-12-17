"use client"
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NabBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

    const links = [
        { name: 'Dashboard', href: "/" },
        { name: 'Issues', href: "/issues" },
    ]
    return (
        <nav className="flex space-x-6 border-b mb-5 px-4 h-14 items-center">
            <Link href="/" className="text-xl"><AiFillBug /></Link>
            <ul className="flex space-x-6">
                {links.map(link => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={classnames(
                                {
                                    'text-zinc-900': link.href === currentPath,
                                    'text-zinc-500': link.href !== currentPath
                                },
                                'hover:text-zinc-800 transition-colors'
                            )}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav >
    );
}

export default NabBar
