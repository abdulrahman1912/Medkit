import { atom } from 'jotai';





export const signupFlowAtom = atom(null)

export const locationAtom = atom({
    latitude: 0,
    longitude: 0
})

export const currentUserAtom = atom(null)

export const pinAtom = atom("")