"use server"
import getCollection, {URL_COLLECTION} from "../../db";



export default async function fetchDataFromDb (redirectAlias: string):Promise<string | null> {

    const objectToFind = { // Package up the query
        alias: redirectAlias
    }

    const urlCollection = await getCollection(URL_COLLECTION); // grab the document collection we are querying
    const actualData = await urlCollection.findOne(objectToFind); // find the object

    return actualData ? actualData.longURL : null; // if actualData is not null return the longUrl we stored for that alias, otherwise return null
}