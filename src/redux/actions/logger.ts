export const logger = {
    info: (...args: any) => console.log('[INFO]', ...args),
    success: (...args: any) => console.log('[SUCCESS]', ...args),
    error: (...args: any) => console.log('[ERROR]', ...args)
}