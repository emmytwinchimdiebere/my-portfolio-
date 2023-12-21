'use client'


import { Info } from "lucide-react"
import { RefreshCcw } from 'lucide-react';

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

    console.log(error)
  return (
    <html>
      <body>
       <div className="h-screen w-screen text-2xl">
       <h2 className="font-bold  tracking-wide flex flex-row gap-2">Something went wrong! <Info className=" animate-ping" /></h2>
        <button className="bg-blue-900 hover:bg-blue-600 hover:scale-105 flex flex-row gap-3 transition text-white" onClick={() => reset()}>Try again <RefreshCcw className=" animate-spin"/>  </button>
       </div>
      </body>
    </html>
  )
}