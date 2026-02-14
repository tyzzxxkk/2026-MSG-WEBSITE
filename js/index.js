const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 200,
  loopAdditionalSlides: 3,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const awards = [
  { title: "학생 스마트기기 활용 학습 사례 공모전 금상", date: "2025.10.31", source: "서울특별시교육청" },
  { title: "학생 마음건강 컨텐츠 공모전 대상", date: "2025.10.22", source: "SK 플래닛(주)" },
  { title: "MOS 월드 챔피언쉽 장려상", date: "2025.07.21", source: "YBM" },
  { title: "창의 아이디어 경진대회 은상", date: "2025.07.02", source: "미림마이스터고" },
  { title: "미림 해커톤 우수상", date: "2024.10.19", source: "미림마이스터고" },
  { title: "뉴미디어디자인 어워드", date: "2024.10.04", source: "미림마이스터고" },
  { title: "창의 아이디어 경진대회 금상", date: "2024.07.08", source: "미림마이스터고" },
  { title: "창의 아이디어 경진대회 은상", date: "2024.07.08", source: "미림마이스터고" },
  { title: "App Jam 장려상", date: "2024.06.23", source: "SK 플래닛(주)" },
  { title: "APP JAM 우수상", date: "2024.04.21", source: "SK 플래닛(주)" }
];

function populateAwards() {
  const tableBody = document.getElementById("awardTable");
  awards.forEach(award => {
      let title = award.title;

      const highlightColor = "#B3A0FF";
      const highlightKeywords = ["장려상","대상","2위, 3위","우수상", "가작상", "금상", "은상", "동상"];
      
      highlightKeywords.forEach(keyword => {
          if (title.includes(keyword)) {
              title = title.replace(
                  keyword,
                  `<span style="color: ${highlightColor}; font-weight: bold;">${keyword}</span>`
              );
          }
      });

      let row = document.createElement("tr");
      row.innerHTML = `<td>${title}</td><td>${award.date}</td><td>${award.source}</td>`;
      tableBody.appendChild(row);
  });
}


// 실행
populateAwards();