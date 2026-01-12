const posts = [
  {
    id: 1,
    title: "ხელოვნური ინტელექტის მომავალი 2026 წელს",
    date: "8 იანვარი",
    author: "ნინო გელაშვილი",
    category: "AI",
    image: "img/jackson-sophat-TQ3SgrW9lkM-unsplash.jpg",
    content: `
      <p>2026 წელს ხელოვნური ინტელექტი კიდევ უფრო ინტეგრირდება ჩვენს ყოველდღიურ ცხოვრებაში. ტექნოლოგია აღწევს ისეთ სფეროებში, როგორიცაა მედიცინა, განათლება და ტრანსპორტი.</p>

      <h2>ძირითადი ტენდენციები</h2>
      <p>AI აგენტები, ავტომატიზაცია და პერსონალიზაცია იქნება წამყვანი მიმართულებები. ველოდებით უფრო ჭკვიან ასისტენტებს, რომლებიც რთულ ამოცანებს ადამიანის ჩარევის გარეშე გადაჭრიან.</p>

      <blockquote>
        AI არ ჩაანაცვლებს ადამიანს — ის ჩაანაცვლებს მათ, ვინც AI-ს არ იყენებს.
      </blockquote>

      <p>მნიშვნელოვანია ეთიკა და მონაცემთა უსაფრთხოება, რადგან ტექნოლოგიის განვითარებასთან ერთად იზრდება რისკებიც.</p>
    `,
  },

  {
    id: 2,
    title: "Web Development-ის ახალი სტანდარტები",
    date: "7 იანვარი",
    author: "გიორგი ბერიძე",
    category: "Web",
    image: "img/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg",
    content: `
      <p>2026 წელს ვებ დეველოპმენტი ხდება უფრო სწრაფი და ეფექტური. ბრაუზერების შესაძლებლობები იზრდება, რაც დეველოპერებს ახალ ჰორიზონტებს უხსნის.</p>
      
      <h2>რა იცვლება?</h2>
      <p>Web Components, performance-first მიდგომა და AI tooling უკვე სტანდარტად იქცა. ფრეიმვორკები, როგორიცაა React და Vue, კიდევ უფრო იხვეწება სერვერული რენდერინგის (SSR) კუთხით.</p>

      <p>მომხმარებლები ითხოვენ მყისიერ რეაქციას და ანიმაციებით დატვირთულ ინტერფეისებს, რაც optimization-ს კრიტიკულად მნიშვნელოვანს ხდის.</p>
    `,
  },

  {
    id: 3,
    title: "კიბერუსაფრთხოება დღევანდელ სამყაროში",
    date: "6 იანვარი",
    author: "ანა ქავთარაძე",
    category: "Security",
    image: "img/anton-maksimov-5642-su-qM37iptlCNY-unsplash.jpg",
    content: `
      <p>კიბერუსაფრთხოება დღეს უფრო მნიშვნელოვანია, ვიდრე ოდესმე. ციფრული ტრანსფორმაციის პარალელურად, ჰაკერული შეტევები უფრო დახვეწილი ხდება.</p>

      <h2>მთავარი საფრთხეები</h2>
      <p>Phishing, ransomware და მონაცემთა გაჟონვა კვლავ რჩება მთავარ გამოწვევად. კომპანიები გადადიან "Zero Trust" არქიტექტურაზე.</p>

      <blockquote>
        უსაფრთხოება არ არის პროდუქტი, ეს არის პროცესი.
      </blockquote>

      <p>უსაფრთხოება იწყება განათლებით — თანამშრომლების ტრენინგი ხშირად საუკეთესო დაცვაა.</p>
    `,
  },

  {
    id: 4,
    title: "Cloud Computing-ის ახალი ეპოქა",
    date: "5 იანვარი",
    author: "დავით მესხი",
    category: "Cloud",
    image: "img/christina-wocintechchat-com-m-glRqyWJgUeY-unsplash.jpg",
    content: `
      <p>ღრუბლოვანი ტექნოლოგიები ბიზნესის განუყოფელი ნაწილი გახდა. 2026 წელს ჩვენ ვხედავთ მასიურ გადასვლას Hybrid და Multi-cloud სტრატეგიებზე.</p>

      <h2>Serverless არქიტექტურა</h2>
      <p>სერვერების მართვის გარეშე აპლიკაციების გაშვება (Serverless) დეველოპერებს საშუალებას აძლევს, ფოკუსირდნენ კოდზე და არა ინფრასტრუქტურაზე. ეს ამცირებს ხარჯებს და ზრდის სისწრაფეს.</p>

      <p>Edge Computing ასევე იკრებს ძალას, რაც მონაცემების დამუშავებას მომხმარებელთან უფრო ახლოს ხდის.</p>
    `,
  },

  {
    id: 5,
    title: "მობილური აპლიკაციების დიზაინი",
    date: "4 იანვარი",
    author: "მარიამ ლომიძე",
    category: "Design",
    image: "img/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg",
    content: `
      <p>მობილური აპლიკაციების ბაზარი უკიდურესად კონკურენტულია. კარგი UI/UX დიზაინი ხშირად განსაზღვრავს აპლიკაციის წარმატებას.</p>

      <h2>2026 წლის ტენდენციები</h2>
      <p>მინიმალიზმი, "Dark Mode" და ჟესტებზე დაფუძნებული ნავიგაცია კვლავ აქტუალურია. ასევე, დიდი ყურადღება ექცევა მიკრო-ინტერაქციებს, რომლებიც ინტერფეისს უფრო ცოცხალს ხდის.</p>

      <blockquote>
        დიზაინი არ არის მხოლოდ ის, თუ როგორ გამოიყურება ნივთი, არამედ ის, თუ როგორ მუშაობს ის.
      </blockquote>

      <p>მომხმარებლის გამოცდილების (UX) გაუმჯობესება პირდაპირ კავშირშია მომხმარებლის შენარჩუნებასთან.</p>
    `,
  },

  {
    id: 6,
    title: "Blockchain და კრიპტოვალუტები",
    date: "3 იანვარი",
    author: "ლევან ჯიქია",
    category: "Blockchain",
    image: "img/jj-ying-8bghKxNU1j0-unsplash.jpg",
    content: `
      <p>Blockchain ტექნოლოგია გასცდა კრიპტოვალუტების ფარგლებს და რეალური გამოყენება ჰპოვა ფინანსებში, ლოჯისტიკასა და ციფრულ იდენტიფიკაციაში.</p>

      <h2>დეცენტრალიზებული ფინანსები (DeFi)</h2>
      <p>ტრადიციული ბანკების გარეშე ფინანსური ოპერაციების განხორციელება სულ უფრო პოპულარული ხდება. Smart Contract-ები უზრუნველყოფენ ტრანზაქციების ავტომატურ და უსაფრთხო შესრულებას.</p>

      <p>მომავალში მოსალოდნელია ბლოკჩეინის ინტეგრაცია სამთავრობო სერვისებშიც, რაც გაზრდის გამჭვირვალობას.</p>
    `,
  },
];

const params = new URLSearchParams(window.location.search);
const postId = Number(params.get("id"));

const post = posts.find((p) => p.id === postId);
const postContainer = document.getElementById("post");

if (!post) {
  postContainer.innerHTML = "<h2>სტატია ვერ მოიძებნა</h2>";
} else {
  postContainer.innerHTML = `
    <img class="post-cover" src="${post.image}" alt="">
    <h1 class="post-title">${post.title}</h1>

    <div class="post-meta">
      <span>${post.date}</span>
      <span>ავტორი: ${post.author}</span>
      <span>კატეგორია: ${post.category}</span>
    </div>

    <div class="post-content">
      ${post.content}
    </div>
  `;

  const sidebarContainer = document.getElementById("sidebar-news");

  const otherPosts = posts.filter((p) => p.id !== postId).slice(0, 3);

  otherPosts.forEach((p) => {
    sidebarContainer.innerHTML += `
      <a href="post.html?id=${p.id}" class="sidebar-card">
        <img src="${p.image}" alt="" class="sidebar-img">
        <div class="sidebar-info">
          <h4>${p.title}</h4>
          <span class="date">${p.date}</span>
        </div>
      </a>
    `;
  });
}
