const populateBlog = () => {
  const blogList = document.querySelector(".blog-list");
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json.forEach((post) => {
        const blog = {
          title: post.title,
          year: post.userId,
          type: post.id,
          text: post.body,
        };
        const { title, year, type, text } = blog;
        if (type <= 10) {
          const addBlogpost = () => {
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
            blogpostTitle.textContent = title;
            blogpostYear.textContent = year;
            blogpostType.textContent = type;
            blogpostText.textContent = text;
            return blogpostElement;
          };
          const attachBlogpost = (post) => {
            blogList.prepend(addBlogpost(post));
          };
          attachBlogpost(post);
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
populateBlog();
