export class Post {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    //comments: Array<Comments>;

    constructor(id: number, title: string, imageUrl: string, body: string, /*comments: Array<Comments>*/) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
        //this.comments = comments;

    }
}