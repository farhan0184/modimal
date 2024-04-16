import { create } from "zustand"
import { persist } from 'zustand/middleware'

export const isLogin = false


export const  userStore = create(persist((set)=>({
    isLogin: false,
    setIsLogin: () => {
        set((state)=>({isLogin: !state.isLogin}))
    },
    logout: () => set({isLogin: false}),
}),{
    name: 'isLogin',
}))