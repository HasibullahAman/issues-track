import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';

const NabBar = () => {
    return (
        <nav className='flex space-x-6 border-b mb-5 px-4 h-14 items-center'>
            <Link href="/"><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                <li><Link className='text-zinc-500 hover:text-zinc-800' href="/">Dashbord</Link></li>
                <li><Link href="/">Issues</Link></li>
            </ul>
        </nav>
    )
}

export default NabBar
      