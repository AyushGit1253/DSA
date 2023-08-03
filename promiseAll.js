const posts=[]
let lastActivity=''
function creatPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve()
        },1000)
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            lastActivity= new Date().toLocaleTimeString()
            resolve()
        },1000)
    })
}

function deleteLastPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                var popped=posts.pop()
                resolve(popped)
            }
            else{
                reject("ERROR")
            }
        })
    })
}

let createPostPromise=creatPost(['Post1'])
let createPostPromise1=creatPost(['Post2'])

let lastActivityPromise=updateLastUserActivityTime()

Promise.all([createPostPromise,createPostPromise1,lastActivityPromise]).then(()=>{
    console.log(posts)
    console.log(lastActivity)
    return deleteLastPost()
}).then((deletePost)=>{
    console.log(deletePost)
    console.log(posts)
}).catch((error)=>{
    console.log(error)
})