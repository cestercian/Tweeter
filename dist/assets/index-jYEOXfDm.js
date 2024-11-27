import{v4 as c}from"https://jspm.dev/uuid";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const a=[{handle:"@TrollBot66756542 💎",profilePic:"images/troll.jpg",likes:27,retweets:10,tweetText:`Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,replies:[],isLiked:!1,isRetweeted:!1,uuid:"4b161eee-c0f5-4545-9c4b-8562944223ee"},{handle:"@Elon ✅",profilePic:"images/musk.png",likes:6500,retweets:234,tweetText:"I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀",replies:[{handle:"@TomCruise ✅",profilePic:"images/tcruise.png",tweetText:"Yes! Sign me up! 😎🛩"},{handle:"@ChuckNorris ✅",profilePic:"images/chucknorris.jpeg",tweetText:"I went last year😴"}],isLiked:!1,isRetweeted:!1,uuid:"3c23454ee-c0f5-9g9g-9c4b-77835tgs2"},{handle:"@NoobCoder12",profilePic:"images/flower.png",likes:10,retweets:3,tweetText:"Are you a coder if you only know HTML?",replies:[{handle:"@StackOverflower ☣️",profilePic:"images/overflow.png",tweetText:"No. Obviosuly not. Go get a job in McDonald's."},{handle:"@YummyCoder64",profilePic:"images/love.png",tweetText:"You are wonderful just as you are! ❤️"}],isLiked:!1,isRetweeted:!1,uuid:"8hy671sff-c0f5-4545-9c4b-1237gyys45"}],d=document.getElementById("tweet-input");document.addEventListener("click",function(i){i.target.dataset.like?u(i.target.dataset.like):i.target.dataset.retweet?f(i.target.dataset.retweet):i.target.dataset.reply?p(i.target.dataset.reply):i.target.id==="tweet-btn"?g():i.target.id==="reply-btn"&&w()});function u(i){const e=a.filter(function(l){return l.uuid===i})[0];e.isLiked?e.likes--:e.likes++,e.isLiked=!e.isLiked,n()}function f(i){const e=a.filter(function(l){return l.uuid===i})[0];e.isRetweeted?e.retweets--:e.retweets++,e.isRetweeted=!e.isRetweeted,n()}function p(i){document.getElementById(`replies-${i}`).classList.toggle("hidden")}function g(){d.value&&(a.unshift({handle:"@Yash",profilePic:"images/scrimbalogo.png",likes:0,retweets:0,tweetText:d.value,replies:[{handle:"@TomCruise ✅",profilePic:"images/tcruise.png",tweetText:"Yes! Sign me up! 😎🛩"}],isLiked:!1,isRetweeted:!1,uuid:c()}),n(),d.value="")}function w(){document.querySelectorAll('[id^="tweet-reply-"]').forEach(e=>{if(e.value){const l=e.dataset.tweetId;a.find(t=>t.uuid===l).replies.push({handle:"@Yash",profilePic:"images/scrimbalogo.png",tweetText:e.value}),n(),e.value=""}})}function m(){let i="";return a.forEach(function(e){let l="";e.isLiked&&(l="liked");let r="";e.isRetweeted&&(r="retweeted");let t="";e.replies.length>0&&e.replies.forEach(function(s){t+=`
                    <div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src="${s.profilePic}" class="profile-pic" alt="">
                                <div>
                                    <p class="handle">${s.handle}</p>
                                    <p class="tweet-text">${s.tweetText}</p>
                                </div>
                            </div>
                    </div>
                    `}),i+=`
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${e.profilePic}" class="profile-pic" alt="">
                    <div>
                        <p class="handle">${e.handle}</p>
                        <p class="tweet-text">${e.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment-dots"
                                data-reply="${e.uuid}"
                                ></i>
                                ${e.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart ${l}"
                                data-like="${e.uuid}"
                                ></i>
                                ${e.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet ${r}"
                                data-retweet="${e.uuid}"
                                ></i>
                                ${e.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
                <div class="hidden" id="replies-${e.uuid}">
                    ${t}
                    <span class="reply-detail">
                         <label for="tweet-reply"></label><textarea placeholder="Wanna Reply?" id="tweet-reply"></textarea>
                    </span>
                    <span class="reply-detail">
                         <button id="reply-btn">Reply</button>
                    </span>
                </div> 
                 
            </div>
        `}),i}function n(){document.getElementById("feed").innerHTML=m()}n();
