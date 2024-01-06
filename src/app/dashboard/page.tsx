import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { getServerSession } from "next-auth"

export default async function page() {
    // const session = await getServerSession(authOptions)
    // console.log(session)
    return (
        <div>
            {/* <Profile data={session?.user} /> */}
            <p>Profile page</p>
        </div>
    )
}
