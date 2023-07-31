import { PostDetailsRender, CommentsRender } from "./postDetailsRender.js";
import { CommentsData } from "./data.js";
var commentsData = new CommentsData();
var commentsRender = new CommentsRender(commentsData.createComments);
var postDetails = new PostDetailsRender();
