const descriptions = [
    {
        name: "Forest",
        class: "forest",
        type: "productivity",
        description: "Forest is an app designed to help you stay focused on your work, not your phone. It is incredibly helpful for knocking out homework, responding to emails, and even spending time with friends without getting distracted. With Forest, users plant digital trees by setting a timer, but if they leave the app before the timer expires, their tree will die!",
        imageSrc: "./styles/forest.png",
        imageAlt: "forest-logo"
    },
    {
        name: "Notion",
        class: "notion",
        type: "productivity",
        description: "Notion is a productivity and note-taking web application developed by Notion Labs, Inc. It is an online-only organizational tool. It is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.",
        imageSrc: "./styles/notion.png",
        imageAlt: "notion-logo"
    },
    {
        name: "Family Search",
        class: "family-search",
        type: "gospel",
        description: "Family search is a full-featured genealogy app to add to, edit, and share your family story. With some awesome areas that allow you to capture important family events as they happen, see how you are related to other users and discover more about your heritage.",
        imageSrc: "./styles/familysearch.png",
        imageAlt: "familysearch-logo"
    },
    {
        name: "Gospel Living",
        class: "gospelliving",
        type: "gospel",
        description: "The Gospel Living app focuses on living a Christ-centered life. You will discover inspiring content like music, videos, images, activities, and goal ideas. And you can create personal goals, plan activities, set reminders, record your impressions, or message your quorum, class, friends, and family.",
        imageSrc: "./styles/living.png",
        imageAlt: "gospelliving-logo"
    }
    // {
    //     name: "yeaah",
    //     class: "yeah",
    //     type: "productivity",
    //     description: "wiiii",
    //     imageSrc: "./styles/forest.png",
    //     imageAlt: "forest-logo"
    // },
    // {
    //     name: "and another one bites the dust",
    //     class: "but why can i not conquer love",
    //     type: "productivity",
    //     description: "wiiii",
    //     imageSrc: "./styles/forest.png",
    //     imageAlt: "forest-logo"
    // }

]


const categorySelector = document.querySelector('#category');

function changeCategory() {
    const category = categorySelector.value;
    console.log(`The selected category is: ${category}`);
    
    const startApps = descriptions.filter(app => app.type === category)

    displayApp(startApps);
    
}
categorySelector.addEventListener('change', changeCategory);

const container = document.querySelector("#subpage-apps");

function appTemplate(app, index) {
    return `
        <div class=${app.class}>
                    <img src=${app.imageSrc} alt=${app.imageAlt} class="clickableImage" data-text="text${index}">
                    <h2>${app.name}</h2>
                    <p id="text${index}" class="hide text">${app.description}</p>
        </div>`
}

function displayApp(descriptions) {
    container.innerHTML = " ";

    descriptions.forEach((app, index) => {
        if (!document.querySelector(`.${app.class}`)) {
            container.innerHTML += appTemplate(app, index);
        }
    });

}
changeCategory();

container.addEventListener("click", function (event) {
    if (event.target.classList.contains("clickableImage")) {
        let textId = event.target.getAttribute("data-text")
        let text = document.getElementById(textId);
        text.style.display = text.style.display === "none" ? "block" : "none";
    }
});