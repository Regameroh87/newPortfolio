'use server'
import { redirect } from "next/navigation"

export const SendEmail = async (formData:FormData) => {

    const propsMail = Object.fromEntries(formData.entries())
    console.log(propsMail)

redirect('/')


}
