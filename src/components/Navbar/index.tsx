import GoogleSignIn from '@/app/components/GoogleSignIn'

const Navbar = () => {
    return (
        <div className='flex items-center justify-end'>
            <GoogleSignIn />
        </div>
    )
}

export default Navbar