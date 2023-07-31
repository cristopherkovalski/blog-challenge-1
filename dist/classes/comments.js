var Comments = /** @class */ (function () {
    function Comments(id, postId, user, email, body) {
        this.id = id;
        this.postId = postId;
        this.user = user;
        this.email = email;
        this.body = body;
    }
    return Comments;
}());
export { Comments };
