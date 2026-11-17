import { NextResponse } from "next/server";
import fetchDatafromDb from "../fetchDatafromDb";

// Used GET because Nextjs understands that this i sa handler for incoming HTTP requests
export async function GET(req: Request, {params}:{params: Promise<{alias: string}>}
) {
    const {alias} = await params;

    const redirectURL: string | null = await fetchDatafromDb(alias);

    if (redirectURL !== null) {
        return NextResponse.redirect(redirectURL);
    } else {
        return NextResponse.redirect("https://webtools-mp5.vercel.app/Not_Found")
    }
}