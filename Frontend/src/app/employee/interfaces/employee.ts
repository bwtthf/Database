import { Timestamp } from 'rxjs';

export interface Ishift {
    id: number
    date: Date
    start_time: string
    end_time: string
}

export interface IshiftAvailable {
    id: number
    name: string
}