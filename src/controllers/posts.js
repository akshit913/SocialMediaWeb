const { Posts,Users } = require('../db/models')


async function createNewPost(userId, title, body) {
    const post = Posts.create({
        title,
        body,
        userId
    })
    return post
}

async function showAllPosts(query) {
    // TODO: Handle query params
    const posts = await Posts.findAll({
        include:[ Users ]
    })

    return posts
}

module.exports = {
    createNewPost,
    showAllPosts
}


//test

// async function task() {
//     // console.log(await createNewPost(1,'Sample post', 'Body of the post goes here'))
//     const posts = await showAll()
//     for(let p of posts) {
//         console.log(`${p.title}\n${p.body}\n`)
//     }
// }

// task()