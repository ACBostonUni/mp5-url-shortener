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
        redirect("url/Not_Found");
    }
}