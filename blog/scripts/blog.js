const populateBlog = () => {
  const blogList = document.querySelector(".blog-list");
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json.forEach((post) => {
        if (post.id <= 10) {
          const addBlogpost = (post) => {
            // selecting DOM element's contents
            const blogpostTemplate =
              document.querySelector("#template").content;
            // copying DOM element's contents
            const blogpostElement = blogpostTemplate
              .querySelector(".blog-list__item")
              .cloneNode(true);

            // selecting parts of the new element
            const blogpostTitle = blogpostElement.querySelector(".blog__title");
            const blogpostYear = blogpostElement.querySelector(".blog__year");
            const blogpostType = blogpostElement.querySelector(".blog__type");
            const blogpostText =
              blogpostElement.querySelector(".blog__description");

            // giving values from API
            blogpostTitle.textContent = post.title;
            blogpostYear.textContent = post.userId;
            blogpostType.textContent = post.id;
            blogpostText.textContent = post.body;
            return blogpostElement;
          };
          const attachBlogpost = (post) => {
            blogList.prepend(addBlogpost(post));
          };
          attachBlogpost(post);
        }
      });
    });
};
populateBlog();
