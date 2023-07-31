var Post = /** @class */ (function () {
    //comments: Array<Comments>;
    function Post(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
        //this.comments = comments;
    }
    return Post;
}());
export { Post };
