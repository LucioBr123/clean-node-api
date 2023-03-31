import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedToppology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
