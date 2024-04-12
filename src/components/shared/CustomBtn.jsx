'use client'
import React from 'react'
import { Button } from '../ui/button'
 
export default function CustomBtn({title,link, style}) {
  return (
    <Button onClick={() => window.location.href= link} className={`bg-white hover:bg-primary/30 bg-primary ${style}`}>{title}</Button>
  )
}
