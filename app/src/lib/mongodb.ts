import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Check if we're in build/SSG mode
const isBuildTime = process.env.NODE_ENV === 'production' && !uri;

if (!uri && !isBuildTime) {
  throw new Error('Please add your Mongo URI to .env.local as MONGODB_URI');
}

if (isBuildTime) {
  // During build, provide a dummy promise that will never resolve
  // This allows the build to complete, but the API will fail gracefully
  clientPromise = new Promise(() => {});
} else if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri!);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri!);
  clientPromise = client.connect();
}

export default clientPromise;

// Helper to get database instance
export async function getDb() {
  if (isBuildTime) {
    throw new Error('MongoDB not configured at build time');
  }
  const client = await clientPromise;
  return client.db('ouirise');
}

// Helper for Witness logs (opt-in only)
export async function logWitness(data: {
  message: string;
  email?: string;
  name?: string;
  timestamp: Date;
}) {
  if (isBuildTime) {
    console.log('Build time - skipping witness log:', data);
    return { acknowledged: true, buildTime: true };
  }
  const db = await getDb();
  return db.collection('witness_logs').insertOne(data);
}
