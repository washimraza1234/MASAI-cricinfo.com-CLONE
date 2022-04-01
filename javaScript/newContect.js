function News(img, heading, para) {
    this.img = img
    this.heading = heading
    this.para = para
}
// ../image/csk.jpg
var arr = []
let news1 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/337100/337177.6.jpg", "Fleming on dew: 'At no stage did CSK feel comfortable'", "Coach says he is proud of how long they were able to stay in the game in 'tough condition'")
let news2 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/337100/337113.6.jpg", "'No fear' Ecclestone dreaming of her first world cup title", "Tournament's leading wicket-taker says if England play their best they can beat Australia in the final on sunday")
let news3 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/337100/337166.6.jpg", "Do players trust data insights? Not as much as analysts and coaches might want", "Cricketers are now incoreasingly exposed to numbers, but many factors still hold them back from wholehearted acceptance")
let news4 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/337100/337141.6.jpg", "Elgar, Bavuma fifties put SA in front on seesawing day", "After a century opening stand , Bangladesh hit back in the middle session")


arr = [news1, news2, news3, news4]

//console.log(arr)


arr.forEach(el => {
    let newsContent = document.getElementById('newsContent')
    let newsInner = document.createElement('div')
    newsInner.innerHTML = `<div class="newsInner">
    <div style="width: 500px;padding: 10px 22px;">
        <img style="width: 500px; margin: 10px auto;border-radius: 7px;" src="${el.img}" alt="">
        <a class="a_hover" style="color: black;font-size: 1.5rem;text-decoration: none;font-weight: bold;box-sizing: border-box"
            href="">${el.heading}</a>
        <P style="margin-bottom: 10px;">${el.para}</P>
    </div>
</div>`

    newsContent.appendChild(newsInner)
})