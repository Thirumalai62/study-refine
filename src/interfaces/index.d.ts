export interface ICategory {
    id: number;
    title: string;
}

export interface ITags {
    id: number;
    title: string;
}
export interface IPost {
    id: number;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    createdAt: string;
    category: { id: number };
}

export interface IUsers {
    id: number;
    firstName: string;
    email: string;
    lastName: string;
    // status: boolean;
}
