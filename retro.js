
let posts = async() => {
    let res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts?category=Comedy')
    let data = await res.json()
    let allData = data.posts
    allPosts(allData)
}

let allPosts = (allData) => {
    allData.forEach(postSetup => {
        console.log(postSetup)
        let postContainer = document.getElementById('post-container')
        let createPosts = document.createElement('div')
        createPosts.innerHTML = `
        <div>
        <div class="flex bg-[#F3F3F5] p-2 lg:p-9 rounded-2xl gap-2 lg:gap-12 mb-5">
                  <div>
                    <div class="flex items-start">
                   <div class="bg-slate-400 p-4 rounded-[10px]">
                    <img src="Frame profail.png" alt="">
                   </div>
                   <div>
                   <img id="active" class=" -translate-x-2 -translate-y-1" src="Status-red.png" alt="">
                   </div>

                   <div id="unactive" class="hidden">
                    <img class=" -translate-x-2 -translate-y-1" src="Status.png" alt="">
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

       let unactive = document.getElementById('unactive')
       let active = document.getElementById('active')
       if(postSetup.isActive){
        unactive.classList.remove('hidden')
        active.classList.add('hidden')
       }
       else{
        unactive.classList.add('hidden')
        active.classList.remove('hidden')
       }

    });
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
}
posts()