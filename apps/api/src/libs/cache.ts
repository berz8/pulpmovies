import { createClient } from "redis";

export default class RedisCache {
  private client;

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL,
    }).on("error", (err) => console.log("Redis Client Error", err));
    this.client.connect();
  }

  async set(
    key: string,
    value: string,
    duration: number = 86400,
  ): Promise<void> {
    await this.client.set(key, value, {
      EX: duration,
    });
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async delete(key: string): Promise<void> {
    await this.client.del(key);
  }
}
