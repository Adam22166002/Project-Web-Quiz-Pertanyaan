const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

//SHOW MENU
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

//HIDE MENU
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

AOS.init();

//logo
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 1,
});
//nav menu
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 1,
  stagger: 0.3,
});

//toggle_btn
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 1,
});
// main heading
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 1,
});
//btn
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
//img
gsap.from(".responsive-img", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
//btn
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
//fasilitas
gsap.from(".fasilitas", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});
//tentang kami
gsap.from(".tentang", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
// kontak
gsap.from(".container-kontak", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
gsap.from(".title-tipe-rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
gsap.from(".tipe-rumah", {
  opacity: 0,
  y: 20,
  delay: 1.6,
  duration: 1,
});
gsap.from(".detail-tipe-rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
gsap.from(".blog", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});
gsap.from(".detail-blog", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 1,
});

//window shadow pada header nav
window.addEventListener("scroll", (event) => {
  const nav = document.querySelector(".header");
  if (window.scrollY >= 30) {
    nav.classList.add("shadow-header");
  } else {
    nav.classList.remove("shadow-header");
  }
});

// LOAD all TYPE RUMAH
const jsonData = {
  rumah: [
    {
      tipe: "A",
      gambar_rumah: "./img/house-1.png",
      nama: "Casa Verde",
      luas_bangunan: 120,
      luas_tanah: 200,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi:
        "Casa Verde, Rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga Anda.",
      harga: "700Jt-an",
      carport: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
    {
      tipe: "B",
      gambar_rumah: "./img/house-2.png",
      nama: "Sky Villa",
      luas_bangunan: 180,
      luas_tanah: 250,
      kamar_mandi: 3,
      kamar_tidur: 4,
      deskripsi:
        "Sky Villa, Rumah mewah dengan pemandangan yang menakjubkan. Dengan tiga kamar mandi dan empat kamar tidur, ini adalah tempat yang sempurna untuk hidup bergaya dan bersantai di atas langit biru.",
      harga: "800Jt-an",
      carport: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
    {
      tipe: "C",
      gambar_rumah: "./img/house-3.png",
      nama: "Lakeview Mansion",
      luas_bangunan: 220,
      luas_tanah: 300,
      kamar_mandi: 4,
      kamar_tidur: 5,
      deskripsi:
        "Lakeview Mansion, Rumah megah dengan pemandangan danau yang menakjubkan. Dengan empat kamar mandi dan lima kamar tidur, rumah ini menghadirkan keanggunan dan kenyamanan untuk gaya hidup bergengsi.",
      harga: "900Jt-an",
      carport: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
    {
      tipe: "D",
      gambar_rumah: "./img/house-4.png",
      nama: "Garden Retreat",
      luas_bangunan: 150,
      luas_tanah: 180,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi:
        "Garden Retreat, Rumah elegan dengan taman yang indah. Dua kamar mandi dan tiga kamar tidur memberikan keseimbangan sempurna antara keindahan alam dan kenyamanan rumah modern.",
      harga: "950Jt-an",
      carport: "1",
      denah_rumah: "./img/denah_rumah.jpg",
    },
  ],
};

// Function create HTML dynamically
function createHouseCard(house, index, isMobileView) {
  const isOdd = index % 2 === 1;

  const penjelasan = `
      <div class="col-md-6 mt-4 mb-4">
        <h2>${house.nama}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_bangunan}m²</h3>
              <p>Luas Bangunan</p>
            </div>
          </div>
          <div class="col-md-6 mb-3 ">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_tanah}m²</h3>
              <p>Luas Tanah</p>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-shower"></i>
              <h3>${house.kamar_mandi}</h3>
              <p>Kamar Mandi</p>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-bed"></i>
              <h3>${house.kamar_tidur}</h3>
              <p>Kamar Tidur</p>
          </div>
        </div>
        </div>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn mt-1" style="text-decoration:none; color:white;">
            Selengkapnya
        </a>
      </div>
    `;

  const gambar_rumah = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid" />
        </div>
    `;

  var html = "";
  if (isOdd) {
    html = gambar_rumah + penjelasan;
  } else {
    html = penjelasan + gambar_rumah;
  }

  if (isMobileView) {
    html = gambar_rumah + penjelasan;
  }

  return html;
}

function createTipeLain(house) {
  const item = `
    <div class="col-md-6 mt-4 mb-4">
      <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit:cover; object-position:bottom;" />
      <br><br>
      <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" style="text-decoration:none; color:#0097a7ff;">
        <h3 class="text-center">Rumah ${house.nama}</h3>
      </a>
    </div>
  `;

  return item;
}

// Load data into HTML (web view)
const rumahContainer = document.getElementById("rumahContainer");
if (rumahContainer != null) {
  jsonData.rumah.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, false);
    rumahContainer.innerHTML += houseCard;
  });
}

// Load data into HTML (mobile view)
const rumahContainerMobile = document.getElementById("rumahContainerMobile");
if (rumahContainerMobile != null) {
  jsonData.rumah.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, true);
    rumahContainerMobile.innerHTML += houseCard;
  });
}

// Load data tipe lain
const lihatTipeLain = document.getElementById("lihatTipeLain");
if (lihatTipeLain != null) {
  jsonData.rumah.forEach((house) => {
    const tipeCard = createTipeLain(house);
    lihatTipeLain.innerHTML += tipeCard;
  });
}

// LOAD DETAIL RUMAH
function filterRumahByTipe(tipe) {
  const filteredRumah = jsonData.rumah.find((rumah) => rumah.tipe === tipe);
  return filteredRumah || null;
}

var queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
var tipeRumahValue = searchParams.get("tipe_rumah");

// Load data in view html
if (tipeRumahValue != null && tipeRumahValue != "") {
  const filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase());

  if (filteredRumah == null) {
    console.log("Rumah not found");
  } else {
    const titleNamaRumah = document.getElementById("title-nama-rumah");
    if (titleNamaRumah)
      titleNamaRumah.innerText = "Rumah " + filteredRumah.nama;

    const gambarRumah = document.getElementById("gambar-rumah");
    if (gambarRumah) gambarRumah.src = filteredRumah.gambar_rumah;

    const deskripsiRumah = document.getElementById("deskripsi-rumah");
    if (deskripsiRumah) deskripsiRumah.innerText = filteredRumah.deskripsi;

    const hargaRumah = document.getElementById("harga-rumah");
    if (hargaRumah) hargaRumah.innerText = filteredRumah.harga;

    const luasBangunanRumah = document.getElementById("luas-bangunan-rumah");
    if (luasBangunanRumah)
      luasBangunanRumah.innerText = filteredRumah.luas_bangunan + "m²";

    const luasTanahRumah = document.getElementById("luas-tanah-rumah");
    if (luasTanahRumah)
      luasTanahRumah.innerText = filteredRumah.luas_tanah + "m²";

    const kamarMandiRumah = document.getElementById("kamar-mandi-rumah");
    if (kamarMandiRumah) kamarMandiRumah.innerText = filteredRumah.kamar_mandi;

    const kamarTidurRumah = document.getElementById("kamar-tidur-rumah");
    if (kamarTidurRumah) kamarTidurRumah.innerText = filteredRumah.kamar_tidur;

    const carportRumah = document.getElementById("carport-rumah");
    if (carportRumah) carportRumah.innerText = filteredRumah.carport;

    const denahRumah = document.getElementById("denah-rumah");
    if (denahRumah) denahRumah.src = filteredRumah.denah_rumah;
  }
}

// FORBLOG LOAD DATA
const blogData = [
  {
    id: 1,
    title:
      "Perumahan dengan hunian nyaman dan modern: Case Verde di MyProperti Residence",
    date: "21 Maret 2024, 09:00 AM",
    description:
      "Dalam dunia properti, terutama di industri perusahaan, kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban. salah satunya perumahan konsep tersebut adalah MyProperti residence dengan tipe hunian bernama Case Verde.",
    detail: "./content/blog-1.html",
    img_blog: "./img/house-1.png",
  },
  {
    id: 2,
    title:
      "Rumah Hunian Modern dengan Pemandangan Mengagumkan hanya di Sky Vill",
    date: "22 Maret 2024, 08:00 AM",
    description:
      "Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pesandangan yang menakjubkan. Ini bukan sekadar tempat tinggal, tetapi sebuah pengalaman hidup bergaya dan bersantai di atas langit biru..",
    detail: "./content/blog-2.html",
    img_blog: "./img/house-2.png",
  },
];

function generateBlogHTML(blogPost) {
  return `
  <div class="card mb-4">
    <div class="row">
      <div class="col-md-4">
        <img src="${blogPost.img_blog}" width="100%" height="100%" alt="Blog Image"/>
      </div>
      <div class="col-md-8 pt-4">
        <div>
          <h5>${blogPost.title}</h5>
          <div class="blog-date d-flex mt-1">
              <i class="fa fa-calendar me-2 mt-1"></i>
              <p>${blogPost.date}</p>
          </div>
          <p class="description-blog mt-1">${blogPost.description}</p>
          <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-readmore" style="color:white;">
            <i class="fa fa-book me-1 mb-2"></i> Read more
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
}

function generateLatestHTML(blogPost) {
  return `
  <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
     <p>${blogPost.title}</p>
     <div class="blog-date d-flex mt-1">
              <i class="fa fa-calender me-2 mt-1"></i>
              <p>${blogPost.date}</p>
          </div>
          <br>
  </a>
  `;
}

function renderBlogPosts(filteredBlogData, isiFiltered) {
  const blogContainer = document.getElementById("blogContainer");
  const latestBlogContent = document.getElementById("latestBlogContent");

  //render latest blog
  if (latestBlogContent != null) {
    //clear previcus content
    latestBlogContent.innerHTML = "";

    const lastTwoBlogPosts = blogData.slice(-2);
    lastTwoBlogPosts.forEach((blogPost) => {
      latestBlogContent.innerHTML += generateLatestHTML(blogPost);
    });
  }

  if (blogContainer == null) {
    return; //skipped
  }

  //clear provicus content
  blogContainer.innerHTML = "";

  //check filtering data
  if (isiFiltered) {
    if (filteredBlogData.length == 0) {
      const emptyStateDiv = document.createElement("div");
      emptyStateDiv.textContent = "No Blog post available";
      blogContainer.appendChild(emptyStateDiv);
    }
    filteredBlogData.forEach((blogPost) => {
      blogContainer.innerHTML = generateBlogHTML(blogPost);
    });
  } else {
    blogData.forEach((blogPost) => {
      blogContainer.innerHTML += generateBlogHTML(blogPost);
    });
  }
}

function searchBlog(input) {
  const searchTerm = input.value.toLowerCase();
  const filteredBlogData = [];
  blogData.filter((blogPost) => {
    if (blogPost.title.toLowerCase().includes(searchTerm));
    filteredBlogData.push(blogPost);
  });

  if (searchTerm != null && searchTerm != "" && searchTerm != undefined) {
    renderBlogPosts(filteredBlogData, true);
  } else {
    renderBlogPosts([], false);
  }
}

//reder blog post when page loads
window.onload = renderBlogPosts([], false);

// Get value from query params
const urlParams = new URLSearchParams(window.location.search);
var idBlogValue = urlParams.get("id");
if (idBlogValue != null && idBlogValue != "") {
  const filteredBlogData = getBlogById(parseInt(idBlogValue, 10));
  if (filteredBlogData != null && filteredBlogData != undefined) {
    document.getElementById("cardDetailImg").src = filteredBlogData.img_blog;
    document.getElementById("tgl-blog").innerText = filteredBlogData.date;
    document.getElementById("title-blog").innerText = filteredBlogData.title;

    loadDetailBlog(filteredBlogData.detail);
  } else {
    console.log("error on data id parameter: " + idBlogValue);
  }
}

function getBlogById(blogId) {
  return blogData.find((blog) => blog.id === blogId);
}

// Function for loading detail blog data
function loadDetailBlog(detailBlogURL) {
  const cardDetailBlog = document.getElementById("cardDetailBlog");
  if (!cardDetailBlog) {
    console.log("Elemen dengan id 'cardDetailBlog' tidak ditemukan.");
    return;
  }
  cardDetailBlog.src = detailBlogURL;
}
