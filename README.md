# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```
# Twitter Clone

This is a **Twitter Clone** application built using vanilla JavaScript. The app simulates the core functionalities of Twitter, allowing users to tweet, like, retweet, and reply to posts. It's a simple, interactive project aimed at practicing DOM manipulation, event handling, and dynamic content rendering.

---

## Features

### Core Functionality
1. **Tweet Creation**:
   - Users can write and post tweets.
   - Tweets are added to the top of the feed.

2. **Like & Unlike**:
   - Click the heart icon to like or unlike a tweet.
   - The like count updates dynamically.

3. **Retweet & Undo Retweet**:
   - Retweet a post to increment the retweet count.
   - Undo a retweet to decrement the count.

4. **Reply to Tweets**:
   - Click the reply icon to toggle the reply section.
   - Add replies to specific tweets, which are displayed in a nested format under the parent tweet.

### Dynamic Rendering
- All interactions dynamically update the content on the page without refreshing.
- User data is handled using a mock database (`tweetsData`).

---

## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Libraries**: 
  - [UUID](https://jspm.dev/uuid): Used for generating unique IDs for tweets.
- **Mock Data**: Stored in `tweetsData` (an array of tweet objects).

---

## File Structure

```
.
├── index.html         # Main HTML file
├── style.css          # CSS file for styling
├── app.js             # Main JavaScript logic
├── data.js            # Mock tweet data
├── images/            # Profile pictures and assets
└── README.md          # Project documentation
```

---

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/twitter-clone.git
   cd twitter-clone
   ```

2. **Set Up the Project**:
   - Make sure you have an internet connection for the UUID library.
   - Place the `index.html`, `app.js`, and `style.css` files in the same directory.

3. **Run the Project**:
   - Open the `index.html` file in your browser.

---

## How to Use

1. **Tweet**:
   - Enter text into the tweet input field and click "Tweet" to post.
2. **Like or Retweet**:
   - Click the heart icon to like or unlike a tweet.
   - Click the retweet icon to retweet or undo the retweet.
3. **Reply**:
   - Click the reply icon on a tweet to reveal the reply section.
   - Enter a reply and click the "Reply" button.

---

## Example Code Snippets

### Example Tweet Object:
```javascript
{
    handle: '@Yash',
    profilePic: 'images/scrimbalogo.png',
    tweetText: 'This is a sample tweet!',
    likes: 0,
    retweets: 0,
    replies: [
        {
            handle: '@TomCruise ✅',
            profilePic: 'images/tcruise.png',
            tweetText: 'Yes! Sign me up! 😎🛩',
        }
    ],
    isLiked: false,
    isRetweeted: false,
    uuid: 'unique-id-string'
}
```

---

## Future Improvements

1. **User Authentication**:
   - Add a login/logout system with user-specific tweets.
2. **Persistent Data**:
   - Use local storage or a database to save tweets and replies.
3. **Enhanced UI**:
   - Improve styling with animations and transitions.
4. **Additional Features**:
   - Add hashtags, mentions, and trending topics.

---

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Contributions are always welcome!

---

Enjoy exploring the Twitter Clone! 😊
