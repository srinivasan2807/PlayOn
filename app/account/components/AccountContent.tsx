"use client"
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AccountContent = () => {
    const router = useRouter();
    const { isLoading, user } = useUser();

    const [loading, setloading] = useState(false)
    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/')
        }
    }, [isLoading, user, router])

    
    return (
        <div>AccountContent</div>
    )
}

export default AccountContent