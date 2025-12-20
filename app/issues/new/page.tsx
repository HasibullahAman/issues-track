"use client"
import { TextArea, TextField, Button } from '@radix-ui/themes'


const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-4'>
            <TextField.Root placeholder="Issue Title" />
            <TextArea placeholder="Describe the issue here..." />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage
