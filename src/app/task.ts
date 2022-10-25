export interface Task {
    _id: number,
    title?: string,
    date: string,
    image: string,
    cloudinaryId: string,
    location?: string,
    caption: string,
    user: string,
    state: string,
    minutes: number,
    taskType: string,
    createdAt: string
}