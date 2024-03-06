// import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
// import Wishlist from '@/components/Wishlist'
// import { getServerSession } from 'next-auth';

// export default async function page() {
//     const session = await getServerSession(authOptions);
//     const { token } = session as any
//     const res = await fetch(`${process.env.BACKEND_URL}/api/wishlist`, {
//         headers: {
//             'authorization': token
//         },
//         cache: 'no-cache'
//     })
//     const data = await res.json()
//     console.log(data)
//     return (
//         <div>
//             <Wishlist data={data?.data} />
//         </div>
//     )
// }
