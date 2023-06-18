import { atom } from 'jotai';





export const signupFlowAtom = atom({
    email: "",
    password:'',
    fullname:'',
    confirmpassword:'',
})

export const otpAtom = atom(null)

export const currentUserAtom = atom(null)

export const cartatom = atom([])

export const pinAtom = atom("")