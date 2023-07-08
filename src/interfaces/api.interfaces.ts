export interface Neo {
    id: string;
    name: string;
    // добавь здесь другие свойства, которые тебе нужны
}

export interface NeoState {
    data: Neo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
