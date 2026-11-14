// Code for contacting the MONGOClient
import {MongoClient, Db, Collection} from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
    throw new Error('MongoDB URI env var is undefined.');

}

const DatabaseName = "URI-Shortener-Database"
export const URL_COLLECTION = "url-collection";

let client: MongoClient| null = null;

let db: Db |null = null;

async function connect():Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
    }
    return client.db(DatabaseName);
}

export default async function getCollection(
    collectionName: string,
): Promise<Collection>{
    if (!db){
        db = await connect();
    }
    return db.collection(collectionName);
}