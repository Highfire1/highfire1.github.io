function createSidebar() {
    console.log("Creating sidebar")

    let bar = document.createElement("div")
    bar.id = "sidebar"

    document.body.prepend(bar)
}

// ADD NEW POSTS HERE
posts = [
    {"Welcome!": "posts/post1.html"},
    {"About": "posts/post3.html"},
    {"Geopolitics" : "posts/post4.html"},
    {"Volcano Profile" : "posts/post5.html"},
    {"Taipei 101" : "posts/post6.html"},
    {"Age of ||||||" : "posts/post7.html"},
    {"☕" : "posts/post8.html"},
    {"thermocline!" : "posts/post9.html"},
    {"blue gold notes" : "posts/post10.html"},
    {"bodies of water" : "posts/post11.html"},
    {"remembrance day 🎖" : "posts/post12.html"},
    {"an interlude 🌧️" : "posts/post13.html"},
    {"five themes of geography" : "posts/post14.html"},
    {"Cloud Seeding." : "./custom/seed/seed.html"},
    {"testing..." : "./custom/shop/shop.html"},
    {"BINGO" : "./custom/bingo/bingo.html"},
]

//let button = document.getElementById("toggleSidebar")
//button.addEventListener("click", toggleSidebar)


function toggleSidebar() {
    sidebar = document.getElementById("sidebar")

    // TODO: make this smoother
    if (sidebar.clientWidth != 0) {
        // hide
        document.getElementById("toggleSidebar").src = "assets/expand.png"
        sidebar.classList.remove("show")
        sidebar.classList.add("hide")
        console.log("hiding")
    } else {
        // show
        document.getElementById("toggleSidebar").src = "assets/collapse.png"
        sidebar.classList.remove("hide")
        sidebar.classList.add("show")
        console.log("showing")
    }
}


function populateSidebar() {
    let sidebar = document.getElementById("sidebar")

    for (var i = posts.length - 1; i >= 0; i--) {
        let postName = Object.keys(posts[i])
        let postLink = Object.values(posts[i])

        let post = document.createElement("a")
        post.textContent = postName
        post.id = postLink
        post.classList.add("postTitle")

        post.addEventListener("click", function() {
            let cururl = window.location.href
            cururl = cururl.slice(0, cururl.lastIndexOf("/posts"))

            console.log(cururl)
            console.log(post.id)

            window.location.href = cururl + "/" + post.id
        })

        sidebar.append(post)
    }
}






window.onload = (event) => {
    createSidebar() 
    populateSidebar()
};