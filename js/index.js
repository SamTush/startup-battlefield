const featuredSpeakers = document.querySelector('.featured-speakers');
const speakerSection = document.createElement('div');
class Speakers {
    constructor(name, title, about) {
        this.name = name;
        this.title = title;
        this.about = about;
    }
}

const speaker1 = new Speakers(
    'Yochai Benkler',
    'Founder & Managing Partner, Cowboy Ventures',
    'Founding Partner at Cowboy Ventures, a team that backs seed-stage technology companies.',
);

const speaker2 = new Speakers(
    'Kanyi Maqubela',
    'Managing Partner, Kindred Ventures',
    'Kanyi is a Managing Partner at Kindred Ventures, an early stage venture fund investing in mission-driven technology companies at the earliest stages.',
);

const speaker3 = new Speakers(
    'RJ Scaringe',
    'Founder & CEO, Rivian',
    'RJ started Rivian to combine his love for cars with his desire to leave the world better for the generations who inherit it.',
);

const speaker4 = new Speakers(
    'Serena Williams',
    'Founding & Managing Partner, Serena Ventures',
    'As a world-class athlete, businesswoman, philanthropist and mother, Serena Williams knows what it takes to win',
);

speakerSection.innerHTML = `
    <h3 class="d-flex justify-content-center">Featured Speakers</h3>
    <hr class="first">
    <div class="featured-grid">
        <div class="row mt-5 mt-lg-0">
            <div class="col col-4">
                <img src="/dist/images/Aileen-Lee.webp" alt="featured speaker" srcset="">
            </div>
            <div class="col col-8">
                <h4>${speaker1.name}</h4>
                <p class="title">${speaker1.title}</p>
                <hr class="hr">
                <p>
                    ${speaker1.about}
                </p>
            </div>
        </div>
        <div class="row mt-1 mt-lg-0">
            <div class="col col-4">
                <img src="/dist/images/Kanyi-Maqubela1.webp" alt="featured speaker" srcset="">
            </div>
            <div class="col col-8">
                <h4>${speaker2.name}</h4>
                <p class="title">${speaker2.title}</p>
                <hr>
                <p>
                    ${speaker2.about}
                </p>
            </div>
        </div>
    </div>
    <div class="second-half">
    </div>
    <div class="d-grid gap-2 mobile-hidden">
        <button class="btn btn-outline-secondary more" type="button">
            MORE
            <span style="font-size: 1.1em; color: Tomato;">
                <i class="fa-solid fa-angle-down ps-3"></i>
            </span>
        </button>
    </div>
`

featuredSpeakers.appendChild(speakerSection);
const featuredSpeakersTwo = document.querySelector('.second-half');
const featuredSpeakersGridTwo = document.createElement('div');
featuredSpeakersGridTwo.style.display = 'none';
featuredSpeakersGridTwo.classList.add('featured-grid-two-more');
featuredSpeakersGridTwo.innerHTML = `
    <div class="featured-grid featured-grid-two">
        <div class="row">
            <div class="col col-4">
                <img src="/dist/images/RJ-Scavinge.webp" alt="featured speaker" srcset="">
            </div>
        <div class="col col-8">
            <h4>${speaker3.name}</h4>
            <p class="title">${speaker3.title}</p>
            <hr>
            <p>
                ${speaker3.about}
            </p>
        </div>
        </div>
        <div class="row mt-4 mt-lg-0">
        <div class="col col-4">
            <img src="/dist/images/Serena-Williams.webp" alt="featured speaker" srcset="">
        </div>
        <div class="col col-8">
            <h4>${speaker4.name}</h4>
            <p class="title">${speaker4.title}</p>
            <hr>
            <p>
                ${speaker4.about}
            </p>
        </div>
        </div>
    </div>
`

featuredSpeakersTwo.appendChild(featuredSpeakersGridTwo);


const buttonMore = document.querySelector('.more');

function more() {
    if (featuredSpeakersGridTwo.style.display === 'none') {
        featuredSpeakersGridTwo.style.display = 'block';
        buttonMore.innerHTML = `
            LESS
            <span style="font-size: 1.1em; color: Tomato;">
                <i class="fa-solid fa-angle-up ps-3"></i>
            </span>
        `
    } else {
        featuredSpeakersGridTwo.style.display = 'none';
        buttonMore.innerHTML = `
        MORE
        <span style="font-size: 1.1em; color: Tomato;">
            <i class="fa-solid fa-angle-down ps-3"></i>
            </span>
        `
    }
}

buttonMore.addEventListener('click', more);