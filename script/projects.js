const pro = [
  {
    id: 1,
    title: "متجر سين",
    img: 'images/projects-images/1.png',
    text: 'المتكاملة التي تشمل كل ما تحتاجه للنجاح في عالم التجارة الرقمية. انضم إلى قائمة عملائنا المميزين وكن جزءًا من قصة نجاحنا المستمرة على منصتي سلة وزد',
    link: '',
    type: 'سلة'
  },
  {
    id: 2,
    title:  'شعار هاتف',
    img: 'images/projects-images/2.png',
    text: 'المتكاملة التي تشمل كل ما تحتاجه للنجاح في عالم التجارة الرقمية. انضم إلى قائمة عملائنا المميزين وكن جزءًا من قصة نجاحنا المستمرة على منصتي سلة وزد',
    link: '',
    type: 'سلة'
  },
    {
    id: 3,
    title: 'متجر أيواك',
    img: 'images/projects-images/3.png',
    text: 'المتكاملة التي تشمل كل ما تحتاجه للنجاح في عالم التجارة الرقمية. انضم إلى قائمة عملائنا المميزين وكن جزءًا من قصة نجاحنا المستمرة على منصتي سلة وزد',
    link: '',
    type: 'سلة'
  },
    {
    id: 4,
    title: 'متجر مدى الرفمية',
    img: 'images/projects-images/4.png',
    text: 'المتكاملة التي تشمل كل ما تحتاجه للنجاح في عالم التجارة الرقمية. انضم إلى قائمة عملائنا المميزين وكن جزءًا من قصة نجاحنا المستمرة على منصتي سلة وزد',
    link: '',
    type: 'سلة'
  },
    {
    id: 5,
    title: 'تناما للتقنية',
    img: 'images/projects-images/5.png',
    text: 'المتكاملة التي تشمل كل ما تحتاجه للنجاح في عالم التجارة الرقمية. انضم إلى قائمة عملائنا المميزين وكن جزءًا من قصة نجاحنا المستمرة على منصتي سلة وزد',
    link: '',
    type: 'سلة'
  },
]

function showData(rang) {
  let projects = document.getElementById('projects')

  for (var i = 0; i < rang; i++) {
    let project = `
    <div class="py-4 my-4">
      <div class="pro-card rounded-xl p-4">
        <p class="salla">${pro[i].type}</p>
        <img src="${pro[i].img}" alt="مشروع" class="rounded-xl">
        <div class="project-text rounded-xl p-3 backdrop-blur-xl bg-white/30 my-4 shadow-md">
          <h1 class="text-xl font-bold">${pro[i].title}</h1>
          <p>${pro[i].text}</p>
          <a href="${pro[i].link}" class="project-btn">
            <span>زيارة المتجر</span>
            <i class="fa-solid fa-eye  bg-red-300 text-white p-3.5 rounded-full"></i></a>
        </div>
      </div>
    </div>

  `;

    projects.innerHTML += project;
  }
}
showData(pro.length)