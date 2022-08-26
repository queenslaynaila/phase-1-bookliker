const bookUrl = "http://localhost:3000/books";
const userUrl = "http://localhost:3000/users";
const list = document.getElementById("list");
const showPanel = document.getElementById("show-panel");

const fetchBooks = async () => {
  let req = await fetch(bookUrl);
  let res = await req.json();
  // console.log(res)
  return res;
};
let title = document.createElement("h2");
showPanel.append(title);

let image = document.createElement("img");
showPanel.append(image);

let author = document.createElement("h4");
showPanel.append(author);

let description = document.createElement("p");
showPanel.append(description);

let ul = document.createElement("ul");
ul.id = "userLikeList";
showPanel.append(ul);

const getBookInfo = async () => {
  let bookInfo = await fetchBooks();
  bookInfo.forEach((book) => {
    let li = document.createElement("li");
    li.textContent = book.title;
    li.addEventListener("click", () => {
      title.textContent = book.title;
      image.src = book.img_url;
      description.textContent = book.description;
      author.textContent = book.author;

      let likeBtn = document.createElement("button");
      likeBtn.textContent = "LIKE";
      likeBtn.addEventListener("click", () => {
        if ((likeBtn.textContent = "LIKE")) {
          likeBtn.textContent = "UNLIKE";
        } else {
          likeBtn.textContent = "LIKE";
        }
      });
      showPanel.append(likeBtn);
      document.remove(likeBtn);
      console.log(book.users);
      const getUserLikes = async () => {
        let userInfo = await fetchBooks();
        // console.log(userInfo.users.username)
        userInfo.users.forEach((like) => {
          console.log(like.username);
          let li = document.createElement("li");
          li.textContent = like.username;
          ul.append(li);

          getUserLikes();
        });
      };
    });
    list.append(li);
  });
};

getBookInfo();
