export const getNormalizeAddress = (accounts: string[]) => {
    return accounts[0] ? accounts[0].toLowerCase() : null
}

export const shorten = (account: string) => {
    return `${account.slice(0, 2)}...${account.slice(-2)}`
}