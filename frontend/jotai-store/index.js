import { atom } from 'jotai';





export const signupFlowAtom = atom({
    email: "",
    password:'',
    fullname:'',
    confirmpassword:'',
})

export const locationAtom = atom({
    latitude: 0,
    longitude: 0
})

export const currentUserAtom = atom(null)

export const pinAtom = atom("")