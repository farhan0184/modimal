import { create } from "zustand"
import { persist } from 'zustand/middleware'

export const isLogin = false


export const  userStore = create(persist((set)=>({
    isLogin: window.localStorage.getItem('isLogin')|| false,
    setIsLogin: (state) => {
        set((state)=>({isLogin: state.isLogin}))
    },
    logout: () => set({isLogin: false}),
}),{
    name: 'isLogin',
}))