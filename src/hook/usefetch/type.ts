export type UseFetch<T, U> = [
    boolean,
    T | undefined,
    ErrorData | undefined,
    (url: string, body?: U | undefined) => void
]

export type ErrorData = {
    message: string
}