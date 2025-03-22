'use client'
import { API_URL } from '@/constants';
import { useMutation } from '@tanstack/react-query';
import { signIn, useSession } from 'next-auth/react';

const GoogleSignIn = () => {
    const { data: session } = useSession();

    const { isPending: isPendingCreateWallet, mutateAsync: mutateAsyncCreateWallet } = useMutation({
        mutationFn: async () => {
            const req = await fetch(API_URL + "/create-wallet", {
                method: "POST",
            })
            const res = await req.json();
            return res;
        }
    })

    const { isPending, mutateAsync } = useMutation({
        mutationFn: () => signIn("google")
    })

    return (
        <div className='flex items-center justify-end p-10'>
            {!session ? (
                <button
                    disabled={isPending}
                    onClick={() => mutateAsync()}
                    className="bg-gradient-to-r from-blue-500  cursor-pointer to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                    {isPending ? "Signing..." : "Sign in with Google"}
                </button>

            ) : (
                <button
                    disabled={isPendingCreateWallet}
                    onClick={() => mutateAsyncCreateWallet()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                    {isPendingCreateWallet ? "Creating..." : "Create Wallet"}

                </button>
            )}
        </div>
    )
}

export default GoogleSignIn