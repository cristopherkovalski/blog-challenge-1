export class Comments {
    id: number;
    postId: number;
    user: string;
    email: string;
    body: string;

    constructor(id: number, postId: number, user: string, email: string, body: string) {
        this.id = id;
        this.postId = postId;
        this.user = user;
        this.email = email;
        this.body = body;

    }

}