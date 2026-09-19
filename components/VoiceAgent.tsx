"use client";
import {useRef,useState} from "react";
import {RealtimeAgent,RealtimeSession} from "@openai/agents/realtime";
export default function VoiceAgent({instructions,onTranscript}:{instructions:string;onTranscript?:(text:string)=>void}){
 const [status,setStatus]=useState("idle");const session=useRef<RealtimeSession|null>(null);
 async function start(){setStatus("connecting");const token=await fetch("/api/realtime-token",{method:"POST"}).then(r=>r.json());if(!token.value){setStatus("error");return}
 const agent=new RealtimeAgent({name:"MBA GD Moderator",instructions});
 const s=new RealtimeSession(agent,{model:"gpt-realtime-2.1"});
 s.on("error",()=>setStatus("error"));session.current=s;
 await s.connect({apiKey:token.value});setStatus("connected");
 }
 function stop(){session.current?.close();session.current=null;setStatus("idle")}
 return <div><button className="btn" onClick={status==="connected"?stop:start}>{status==="connected"?"Stop voice agent":"Start voice agent"}</button><span className="pill">{status}</span></div>
}