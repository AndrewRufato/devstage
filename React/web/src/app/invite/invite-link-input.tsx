'use client'

import { Link, Copy } from "lucide-react";
import { IconButton } from "../components/icon-button";
import { InputRoot, Inputicon, Inputfield } from "../components/input";

interface InviteLinkInputProps{
    inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps){
    function copyInviteLink(){
        navigator.clipboard.writeText(inviteLink)
    }
    return(
        <InputRoot>
            <Inputicon>
                <Link className='size-5'/> 
            </Inputicon>
            <Inputfield readOnly defaultValue={inviteLink}/>
            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5'/>
            </IconButton>
        </InputRoot>
    )
}