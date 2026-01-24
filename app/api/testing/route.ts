import { NextResponse } from "next/server"

export const GET = async ()=>{
    await  new Promise((reslove)=> setTimeout(reslove,500))
    return NextResponse.json({
        data:[
            {
                title:"titkle onw"
            },
            {
                title:"titkle two"
            },
            {
                title:"titkle three"
            },
            {
                title:"titkle four"
            }
        ],
        mesage:"fetch"
    })
}