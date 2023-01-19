export interface AdminSchema {
    id: string,
    email: string,
    password: string,
}

export interface ActionSchema {
    id: string,
    title: string,
    description: string,
    participants: Array<String>,
    places: Number,
    address: string,
    date: string,
    time: string
}