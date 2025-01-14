export type TImageAsset = {
  public_id: string
  secure_url: string
  optimizeUrl: string
}

export type TCategory = {
  name: string
  image: TImageAsset
  text?: string
}
