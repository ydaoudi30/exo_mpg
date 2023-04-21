import { ConnectOptions } from 'couchbase'
export const port: number = 3000
export const clusterConnStr: string = 'couchbase://localhost'
export const username: string = 'admin'
export const password: string = 'monpetitgazon'
export const bucketName: string = 'mpg'
export const connectOptions: ConnectOptions = {
    username: username,
    password: password,
    configProfile: 'wanDevelopment'
  }