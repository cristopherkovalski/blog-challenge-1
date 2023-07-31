import { PostDetailsRender, CommentsRender } from "./postDetailsRender.js";
import { CommentsData } from "./data.js";

const commentsData = new CommentsData();
const commentsRender = new CommentsRender(commentsData.createComments);
const postDetails = new PostDetailsRender();
