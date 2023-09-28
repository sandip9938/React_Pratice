import conf from '../conf'
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client()
    databasees
    bucket
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            // Set project ID to use for the current session
            .setProject(conf.appwriteProjectId)
        this.databasees = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({ tittle, slug, content, featureImage, status, userid }) {
        try {
            return await this.databasees.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featureImage,
                    status,
                    userid

                }

            )
        } catch (error) {
            console.log("Appwrite servive :: createpost :: error", error)
        }
    }
    async updatPost(slug, { tittle, content, featureImage, status }) {
        try {
            return await this.databasees.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featureImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite servive :: createpost :: error", error)
        }
    }
    async deletePost(slug) {
        try {
            await this.databasees.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite servive :: createpost :: error", error)
        }
    }
    async getPost(slug) {
        try {
            return await this.databasees.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )


        } catch (error) {
            console.log("Appwrite servive :: createpost :: error", error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databasees.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite servive :: createpost :: error", error)
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId, 
               ID.unique(),
               file,
            )
        } catch (error) {
            console.log("Appwrite servive :: createpost :: error",error)
            return false
        }
    }
    async deletefile(fileId){
try {
    await  this.bucket.deleteFile(
        conf.appwriteBucketId ,
        fileId,
    )
} catch (error) {
    console.log("Appwrite servive :: createpost :: error",error)
    return false
}
    }
    getFilepreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}
const service = new Service()
export default service 