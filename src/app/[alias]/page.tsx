export const instant = false;
import { redirect } from "next/navigation";
import fetchDataFromDb from "@/app/fetchDatafromDb";

export default async function Redirect({params,}: {
    params: Promise<{ alias: string }>;
}) {
    const { alias } = await params;
    const redirectUrl = await fetchDataFromDb(alias);

    if (redirectUrl !== null) {

        redirect(redirectUrl);
    } else {
        console.log(`Redirect URL: ${redirectUrl}`);
        redirect("https://mp5-url-shortener-gold.vercel.app/Not_Found");
    }
}