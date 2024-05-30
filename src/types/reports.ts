export type Part = {
    part_number: string;
    category: string;
    supplier: string;
    status: string;
    message: string;
}

export type ApiResponse = {
    success: boolean;
    parts: Part[];
    message?: string;
}