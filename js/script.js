const listItem = document.querySelectorAll(".header-menu-item");
listItem.forEach((item) => {
    item.addEventListener("click", function () {
        document
            .querySelector(".header-menu-item.active")
            .classList.remove("active");
        item.classList.add("active");
    });
});
