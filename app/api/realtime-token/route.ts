import {NextResponse} from "next/server";
export async function POST(){
 if(!process.env.OPENAI_API_KEY)return NextResponse.json({error:"OPENAI_API_KEY is not configured"},{status:503});
 const r=await fetch("https://api.openai.com/v1/realtime/client_secrets",{method:"POST",headers:{"Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({session:{type:"realtime",model:"gpt-realtime-2.1"}})});
 if(!r.ok)return NextResponse.json({error:"Could not create realtime client token"},{status:r.status});
 const data=await r.json();return NextResponse.json({value:data.value});
}