"use client"
import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: CSS module without type declarations
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-4'>
            <TextField.Root placeholder="Issue Title" />
            <SimpleMDE placeholder='Description is here!' />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage
