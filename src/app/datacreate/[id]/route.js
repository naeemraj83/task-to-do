import { connectDB } from "@/lib/connectDB"

export const POST = async(request)=>{
    const creating = await request.json()
    const db = await connectDB()
    const createCollection =db.collection("create")
    try {
       const create = await createCollection.insertOne(creating) 
       return Response.json({message:"create data successfully"})
    } catch (error) {
        console.log(error);
    }
}