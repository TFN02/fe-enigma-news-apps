export interface IArticles {
    source: {id: string, name:  string},
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string | Date,
    content: string
}

export interface IResNews {
    data: IArticles[] | null;
    pending: boolean;
    isEmpty: boolean;
}