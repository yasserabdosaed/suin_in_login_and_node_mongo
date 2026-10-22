  import {NextResponse} from "next/server";
  import clientPromise from "@/lib/mongodb";

  export async function GET(){
    try{
          const client = await clientPromise;
  await client.db("admin").command({ ping:1});


  return NextResponse.json({
    success: true,
    message : "نجح الاتصال ",
  }); 
    }

  catch(error){
    console.error("____________________________",error.message)
  

  return NextResponse.json({
    success:false,
    message : "فشل الاتصال ",
  },
   {status:500}
)
  }
 
}
  
  
 
