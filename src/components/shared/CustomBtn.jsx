'use client'
import React from 'react'
import { Button } from '../ui/button'
 
export default function CustomBtn({title,link, style}) {
  return (
    <Button onClick={() => window.location.href= link} className={` hover:bg-primary/60  ${style}`}>{title}</Button>
  )
}
