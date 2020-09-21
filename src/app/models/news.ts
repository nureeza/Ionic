export interface Source {
    id?: any;
    name: string;
}
export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}
export interface News {
    status: string;
    totalResults: number;
}
// export interface News{
//     id:any;
//     status:string;
//     totalResults:number;
//     articles:string;
//     name:string;
//     author:string;
//     title:string;
//     description:string;
//     url:string;
//     urlToImage:string;
//     publishedAt:Date;
//     content:string;
//     source:string;
// }
