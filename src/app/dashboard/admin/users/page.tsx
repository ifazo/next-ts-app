// import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
// import UserTable from '@/components/UserTable'
// import { getServerSession } from 'next-auth';

// export default async function page() {
//     const session = await getServerSession(authOptions);
//     const {token} = session as any
//     const res = await fetch(`${process.env.BACKEND_URL}/api/users`, {
//         headers: {
//             'authorization': token,
//         },
//         cache: 'no-cache',
//     })
//     const data = await res.json()
//     // console.log(data)
//     return (
//         <div>
//             <UserTable data={data?.data} />
//         </div>
//     )
// }
