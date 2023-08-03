/* console.log('Person1 shows ticket')
console.log('Person2 shows ticket')

const movie= async ()=>{
    const wifebringsTicket= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        })
        //husband tells ticketChecker that wife comes with ticket in 3 sec
    },3000)

    const husbandbringsPopcorn= new Promise((resolve, reject)=>{
        resolve('popcorns')
    })

    const husbandbringsButter =new Promise((resolve, reject)=>{
        resolve('butter')
    })

    let ticket= await wifebringsTicket
    console.log('wife: i have', ticket)
    console.log('husband: lets go in')
    console.log('wife:im hungry')
    console.log('ok i will get popcorns')

    let popcorn= await husbandbringsPopcorn
    console.log('husband:i have the', popcorn)
    console.log('wife: ineed butter on',popcorn)

    let butter= await husbandbringsButter
    console.log('husband: i added', butter)
    console.log('wife:getting late lets go in')

    return ticket//async returns a promise that is ticket here
}

movie().then((m)=>{
    console.log("person 3 shows",m)
})

console.log('person 4 shows ticket')
console.log('person 5 shows ticket')


 */
//using promise.all
console.log('Person1 shows ticket')
console.log('Person2 shows ticket')

/* const movie= async ()=>{
    const wifebringsTicket= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        })
        //husband tells ticketChecker that wife comes with ticket in 3 sec
    },3000)

    const husbandbringsPopcorn= new Promise((resolve, reject)=>{
        resolve('popcorns')
    })

    const husbandbringsButter =new Promise((resolve, reject)=>{
        resolve('butter')
    })

    let ticket= await wifebringsTicket
    console.log('wife: i have', ticket)
    console.log('husband: lets go in')
    console.log('wife:im hungry')
    console.log('ok i will get popcorns')

    let popcorn= await husbandbringsPopcorn
    console.log('husband:i have the', popcorn)
    console.log('wife: ineed butter on',popcorn)

    let butter= await husbandbringsButter
    console.log('husband: i added', butter)
    console.log('wife:getting late lets go in')

    let [tic,pop,but]=await Promise.all([ticket,popcorn,butter])
    console.log(tic,pop,but)

    return ticket//async returns a promise that is ticket here
}

movie().then((m)=>{
    console.log("person 3 shows",m)
})

console.log('person 4 shows ticket')
console.log('person 5 shows ticket') */

//previous task conv to async

const posts = [];
let lastActivity = '';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createPost(post) {
    await delay(1000);
    posts.push(post);
}

async function updateLastUserActivityTime() {
    await delay(1000);
    lastActivity = new Date().toLocaleTimeString();
}

async function deleteLastPost() {
    await delay(1000);
    if (posts.length > 0) {
        return posts.pop();
    } else {
        throw new Error("ERROR: ARRAY IS EMPTY");
    }
}

async function main() {
    try {
        const createPostPromise1 = createPost(['Post1']);
        const createPostPromise2 = createPost(['Post2']);
        const lastActivityPromise = updateLastUserActivityTime();

        await Promise.all([createPostPromise1, createPostPromise2, lastActivityPromise]);

        console.log(posts);
        console.log('Last seen:', lastActivity);

        const deletedPost = await deleteLastPost();
        console.log('Deleted Post:', deletedPost);
        console.log(posts);
        console.log('Last seen:', lastActivity);
    } catch (error) {
        console.log(error.message);
    }
}

main();
