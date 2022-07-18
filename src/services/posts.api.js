import axios from "axios";

export async function newPost(contents, userId, files = '') {
    const response = await axios.post(
        'http://localhost:8080/api/posts',
        {
            "contents": contents,
            "files": files,
            "likes": 0,
            "owner": `/api/users/${userId}`
        }
    );

    return response.data;
}