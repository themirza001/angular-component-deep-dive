export interface Ticket {
    id: string;
    title: string;
    text: string
    status: 'open' | 'closed'
}

export interface NewTicket {
    title: string;
    text: string
}