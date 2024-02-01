'use client'
import React from 'react'
import {NextUIProvider} from "@nextui-org/react";

const NextUiProvide = ({children}) => {
  return (
    <NextUIProvider>
    {children}

    </NextUIProvider>
  )
}

export default NextUiProvide