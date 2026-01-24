"use client"
import { reValidateData } from '@/lib/action'
import { useRefetchQueries } from '@/lib/react-query'
import React, { useTransition } from 'react'

const TestButton = () => {
    const {refetchQueries} = useRefetchQueries()
    const handleRevalidate = async() =>{
      refetchQueries("fetch-posts-data")
    }
    const [isPending, startTransition] = useTransition();
    return (
        <button onClick={
            () => {
                startTransition(async () => {
                    await handleRevalidate()
                })
            }
        }>
            {isPending ? "Loading..." : "TestButton"}
        </button>
    )
}

export default TestButton