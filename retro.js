
let posts = async(categoryName) => {
    let loading = document.getElementById('loading')
    loading.classList.remove('hidden')
    let res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    let data = await res.json()
    let allData = data.posts
    allPosts(allData)
}

let allPosts = (allData) => {
    allData.forEach(postSetup => {
        console.log(postSetup)
        loadingTime()
        let postContainer = document.getElementById('post-container')
        let createPosts = document.createElement('div')
        createPosts.innerHTML = `
        <div>
        <div class="flex flex-col md:flex-row bg-[#F3F3F5] p-5 lg:p-9 rounded-2xl gap-2 lg:gap-12 mb-5">
                   <div>
                   <div class="flex items-start">
                  
                   <div class="indicator">
                   <span id="status" class="indicator-item badge badge-secondary  bg-red-500 border-white"></span>
                   <div class="grid bg-base-300 place-items-center">
                   <img class="w-20" src=${postSetup.image} alt="">
                   </div>
                 </div>
           
                   

                   <div id="active" class="hidden">
                    <img  class="-translate-x-2 -translate-y-1" src="Status.png" alt="">
                   </div>
                </div>
                </div>
    
                   <div class="space-y-2">
                     <div class="flex gap-6">
                        <p class="text-[#12132D99] font-semibold"># ${postSetup.category}</p>
                        <p class="text-[#12132D99] font-semibold">Author : ${postSetup.author.name}</p>
                     </div>
                     <h4 class="text-[20px] font-semibold">${postSetup.title}</h4>
                    <p class="text-[#12132D99] pb-5 lg:w-[75%]">${postSetup.
                        description
                        }</p>
                   
                    <div class="flex justify-between items-center border-dashed border-t-2 border-gray-300 pt-5">
                        <div class="flex gap-2 lg:gap-8">
                            <p class="flex gap-3 items-center text-[#12132D99]"> <img src="com.png" alt="">${postSetup.
                                comment_count
                                }</p>
                        <p class="flex gap-3 items-center text-[#12132D99]"> <img src="tabler-icon-eye.png" alt=""> ${postSetup.view_count}</p>
                        <p class="flex gap-3 items-center text-[#12132D99]"> <img src="tabler-icon-clock-hour-9.png" alt=""> ${postSetup.posted_time}min</p>
                        </div>
    
                         <div>
                            <button onclick="postBtn('${postSetup.title}','${postSetup.view_count}')">
                                <img src="btn-img.png" alt="">
                            </button>
                         </div>
                    </div>
    
                   </div>
                </div>
        </div>
        `
        postContainer.appendChild(createPosts)

       let status = document.getElementById('status')
       
     
    });
}



let loadingTime = () => {
    setTimeout(() => {
        let loading = document.getElementById('loading')
        loading.classList.add('hidden')
    },)
}

let postBtn = (title,view) => {
    let titlesContainer = document.getElementById('titles')
    let showTitles = document.createElement('div')
    showTitles.innerHTML = `
    <div  class="flex bg-white p-3 rounded-2xl gap-6">
    <p class="font-semibold">${title}</p>
    <p class="flex gap-2 items-center text-[#12132D99]"> <img src="tabler-icon-eye.png" alt=""> ${view}</p>
   </div> 
    `
    titlesContainer.appendChild(showTitles)
    count()
}



let counting = 1
let count = () => {
    let countNum = document.getElementById('count')
    let countInner = countNum.innerText
    let countConvertNum = parseInt(countInner)
    let countNumber = countConvertNum + counting
    countNum.innerText = countNumber
    
}

let searchBtn = () => {
    let searchInput = document.getElementById('search-input')
    let categoryName = searchInput.value
    posts(categoryName)
    let postContainer = document.getElementById('post-container')
    postContainer.innerHTML = ''

}

let latestPosts = async() => {
    let res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    let data =await res.json()
    allLatestCart(data)
}  
let  allLatestCart = (data) => {
    data.forEach(latestPostsSetup => {
        let latestCard = document.getElementById('latest-card')
        let createlatestCard = document.createElement('div')
        createlatestCard.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src=${latestPostsSetup.cover_image} alt="Shoes" /></figure>
            <div class="card-body space-y-3">
            <h1 class="text-[16px] text-[#12132D99]"><i class="fa-solid fa-calendar-days mr-2"></i> ${latestPostsSetup.author?.posted_date?`${latestPostsSetup.author?.posted_date}`:"No publish date"}</h1>
              <h2 class="font-bold leading-6 text-[20px]">${latestPostsSetup.title}</h2>
              <p class="text-[16px] text-[#12132D99]">${latestPostsSetup.
                description}</p>
              <div class=" flex gap-3">
                <div>
                <img class="rounded-full w-[50px]" src=${latestPostsSetup.profile_image} alt="">
                </div>
                <div>
                  <p class="text-[16px] font-bold">${latestPostsSetup.author.name}</p>
                  <p class="text-[#12132D99]">${latestPostsSetup.author.designation?`${latestPostsSetup.author.designation}`:"Unknown"}</p>
                </div>
              </div>
            </div>
          </div>
        `
        latestCard.appendChild(createlatestCard)
    });
  }
latestPosts()
posts('comedy')
