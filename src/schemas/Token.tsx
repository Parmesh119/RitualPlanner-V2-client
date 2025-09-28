export type TUserJwtInformation = {
    sub: string
    userId: string
    iat: number
    exp: number
}

export type TRefreshTokenRequest = {
    refreshToken: string
}