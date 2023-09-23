const conf={
    appwriteUrl:String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId:(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteCollectionId:(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
    appwriteDatabaseId:(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteBucketId:(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
}


export  default conf