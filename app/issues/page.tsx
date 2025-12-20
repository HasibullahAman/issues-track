import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const IssuesPpage = () => {
    return (
        <div className='mx-7'>
            <Button><Link href="/issues/new">New Issue</Link></Button>
        </div>
    )
}

export default IssuesPpage
