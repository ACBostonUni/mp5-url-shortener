"use server"
import getCollection, {URL_COLLECTION} from "../../db";

export default async function putDataToDb(


    alias: string,
    url: string,


):Promise<boolean> {

    console.log("Creating new key val URL pair")
    // Need to check if it is a valid URL

    // Create a basic fetch and then the response for
    // await fetch, inside the then, if response status == 200
    // If URL doesn't return the 200 invalid

    const valid = await fetch(url).then((response) => response.ok)// => means taking the left as the input produce what's on the right
                                                                                                // response.ok looks inside the package and grabs that attribute
        //                                                                                      (response is a parameter a temp variable to recieve the fetch package)
        .catch(() => false); // If fetch crashes on garbage input, catch the error and set valid to false;

    if (!valid){
        return false; // invalid URL

    }

    // Key value pair call it whatever, as long as it is standard
    // key is alias and data is url
    const objectToInsert = {
        alias: alias, 
        longUrl: url,

    }

    console.log("shortening...");
    const urlCollection = await getCollection(URL_COLLECTION); // Fetch the collection
    const res = await urlCollection.insertOne(objectToInsert); // Put the key value into the Db

    if (!res.acknowledged){

        throw new Error("Insert to DB failed");
    } else {

        console.log("Insert Successfully");
        return true; //successful insert
    }


}