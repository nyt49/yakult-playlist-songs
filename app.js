// ===== 歌單資料 =====
const songs = [
  { title: "愛ㄚ愛ㄚ", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "致愛", artist: "鹿晗", tags: ["中文", "鹿晗"] },
  { title: "我們的明天", artist: "鹿晗", tags: ["中文", "鹿晗"] },
  { title: "淋雨一直走", artist: "張韶涵", tags: ["中文", "張韶涵"] },
  { title: "愛情闖進門", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "Mr.Chu", artist: "Apink", tags: ["韓文"] },
  { title: "離開的一路上", artist: "理想混蛋", tags: ["中文"] },
  { title: "告白氣球", artist: "周杰倫", tags: ["中文"] },
  { title: "有點甜", artist: "汪蘇瀧 / BY2", tags: ["中文", "BY2", "汪蘇瀧"] },
  { title: "七彩的微風", artist: "真珠美人魚", tags: ["中文", "推薦"] },
  { title: "天空海", artist: "威神V", tags: ["中文", "威神V"] },
  { title: "愛不釋手", artist: "威神V", tags: ["中文", "威神V"] },
  { title: "這時煙火", artist: "威神V", tags: ["中文", "威神V"] },
  { title: "泡泡糖", artist: "NCT DREAM", tags: ["中文", "NCT DREAM"] },
  { title: "Love More", artist: "Bii 畢書盡", tags: ["中文"] },
  { title: "我們青春", artist: "李玉璽", tags: ["中文", "李玉璽"] },
  { title: "小城夏天", artist: "LBI利比", tags: ["中文"] },
  { title: "時間煮雨", artist: "郁可唯", tags: ["中文"] },
  { title: "一笑傾城", artist: "汪蘇瀧", tags: ["中文", "汪蘇瀧"] },
  { title: "寵愛", artist: "TFBOYS", tags: ["中文", "TFBOYS"] },
  { title: "青春修煉手冊", artist: "TFBOYS", tags: ["中文", "TFBOYS"] },
  { title: "我看過", artist: "周星星", tags: ["中文"] },
  { title: "女孩", artist: "韋禮安", tags: ["中文", "韋禮安"] },
  { title: "戀愛ing", artist: "五月天", tags: ["中文", "五月天"] },
  { title: "Honey", artist: "郭書瑤", tags: ["中文"] },
  { title: "Whatever", artist: "PiXXiE", tags: ["中文"] },
  { title: "座位", artist: "姚曉棠", tags: ["中文"] },
  { title: "我還是愛著你", artist: "MP魔幻力量", tags: ["中文", "MP魔幻力量"] },
  { title: "想見你", artist: "八三夭", tags: ["中文"] },
  { title: "如果可以", artist: "韋禮安", tags: ["中文", "韋禮安"] },
  { title: "Beatbox", artist: "NCT DREAM", tags: ["韓文", "NCT DREAM"] },
  { title: "湊熱鬧", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "喜歡你", artist: "陳潔怡", tags: ["中文"] },
  { title: "十二月的奇蹟", artist: "EXO", tags: ["中文", "EXO"] },
  { title: "Without you", artist: "NCT U", tags: ["韓文", "NCT DREAM"] },
  { title: "蝴蝶少女", artist: "EXO", tags: ["中文", "EXO"] },
  { title: "為心導航", artist: "EXO", tags: ["中文", "EXO"] },
  { title: "唯一", artist: "告五人", tags: ["中文"] },
  { title: "彼得潘", artist: "EXO", tags: ["中文", "EXO"] },
  { title: "歐若拉", artist: "張韶涵", tags: ["中文", "張韶涵"] },
  { title: "你並不懂我", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "新少女祈禱", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "你不會一輩子的愛上我", artist: "Tyson Yoshi", tags: ["中文"] },
  { title: "百年孤寂", artist: "王菲", tags: ["中文"] },
  { title: "日不落", artist: "蔡依林", tags: ["中文"] },
  { title: "囂張", artist: "en", tags: ["中文"] },
  { title: "有沒有", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "無垢", artist: "李浩瑋", tags: ["中文", "新歌", "李浩瑋"] },
  { title: "真心話", artist: "李浩瑋", tags: ["中文", "新歌", "李浩瑋"] },
  { title: "小幸運", artist: "田馥甄", tags: ["中文"] },
  { title: "星空", artist: "五月天", tags: ["中文", "五月天"] },
  { title: "童話", artist: "光良", tags: ["中文"] },
  { title: "天機", artist: "MP魔幻力量 / 阿信", tags: ["中文", "MP魔幻力量"] },
  { title: "勢在必行", artist: "陳勢安 / 畢書盡", tags: ["中文"] },
  { title: "初雪", artist: "EXO", tags: ["韓文", "EXO"] },
  { title: "心花開", artist: "李千娜", tags: ["台語"] },
  { title: "介意", artist: "白峻嘉", tags: ["中文"] },
  { title: "太陽與地球", artist: "盧廣仲", tags: ["中文"] },
  { title: "我喜歡你", artist: "芒果醬", tags: ["台語", "新歌"] },
  { title: "沒理由", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "雨愛", artist: "楊丞琳", tags: ["中文"] },
  { title: "舅媽", artist: "巴大雄", tags: ["中文", "推薦"] }
];

// ===== 計算所有歌手出現次數 =====
function getAllArtists() {
  const artistCount = {};
  songs.forEach(song => {
    song.tags.forEach(tag => {
      const nonArtistTags = ["中文", "台語", "韓文", "推薦", "新歌"];
      if (!nonArtistTags.includes(tag)) {
        artistCount[tag] = (artistCount[tag] || 0) + 1;
      }
    });
  });
  return Object.entries(artistCount)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}

// ===== 分離為 3 首以上的歌手和其他歌手 =====
function getArtistsByCategory() {
  const all = getAllArtists();
  const popular = all.filter(a => a.count >= 3);
  const others = all.filter(a => a.count < 3);
  return { popular, others };
}

// ===== 狀態：歌手選單是否展開 =====
let artistMenuExpanded = false;

// ===== 狀態 =====
let activeTags = new Set();
let searchQuery = "";

// ===== DOM 元素 =====
const songGrid = document.getElementById("songGrid");
const songCount = document.getElementById("songCount");
const clearBtn = document.getElementById("clearBtn");
const searchInput = document.getElementById("searchInput");
const activeFiltersLabel = document.getElementById("activeFiltersLabel");
const bubblesContainer = document.getElementById("bubblesContainer");

// ===== 建立香檳泡泡背景 =====
function createBubbles() {
  const emojis = ["🥂", "🥂", "🥂", "✨", "🫧", "🥂"];
  const animations = ["floatUp", "floatUpLeft", "floatUpSway"];
  const count = 25;
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.fontSize = `${0.8 + Math.random() * 1.6}rem`;
    const duration = 10 + Math.random() * 14;
    const delay = Math.random() * 20;
    const animation = animations[Math.floor(Math.random() * animations.length)];
    bubble.style.animation = `${animation} ${duration}s linear ${delay}s infinite`;
    bubblesContainer.appendChild(bubble);
  }
}

// ===== 建立歌手篩選按鈕 =====
function buildArtistButtons() {
  const { popular, others } = getArtistsByCategory();
  const container = document.getElementById("artistButtons");
  container.innerHTML = "";
  
  // 添加熱門歌手按鈕
  popular.forEach(({ name, count }) => {
    const btn = document.createElement("button");
    btn.classList.add("filter-btn", "artist-btn");
    btn.dataset.tag = name;
    btn.textContent = `${name} (${count})`;
    container.appendChild(btn);
  });
  
  // 如果有其他歌手，添加折疊按鈕
  if (others.length > 0) {
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("filter-btn", "toggle-artists-btn");
    toggleBtn.textContent = `⬇ 顯示更多 (${others.length})`;
    toggleBtn.id = "toggleArtistsBtn";
    container.appendChild(toggleBtn);
    
    // 折疊按鈕的按下事件
    toggleBtn.addEventListener("click", toggleArtistMenu);
  }
}

// ===== 切換歌手選單的展開狀態 =====
function toggleArtistMenu() {
  const { popular, others } = getArtistsByCategory();
  const container = document.getElementById("artistButtons");
  const toggleBtn = document.getElementById("toggleArtistsBtn");
  
  if (artistMenuExpanded) {
    // 收起其他歌手
    container.querySelectorAll(".artist-btn.hidden").forEach(btn => btn.remove());
    toggleBtn.textContent = `⬇ 顯示更多 (${others.length})`;
    artistMenuExpanded = false;
  } else {
    // 展開其他歌手
    others.forEach(({ name, count }) => {
      const btn = document.createElement("button");
      btn.classList.add("filter-btn", "artist-btn", "hidden");
      btn.dataset.tag = name;
      btn.textContent = `${name} (${count})`;
      // 必須為動態生成的按鈕綁定點擊事件
      btn.addEventListener("click", () => toggleTag(name, btn));
      container.insertBefore(btn, toggleBtn);
    });
    toggleBtn.textContent = `⬆ 隨收 (${others.length})`;
    artistMenuExpanded = true;
  }
}

// ===== 切換標籤 =====
function toggleTag(tag, btn) {
  if (activeTags.has(tag)) {
    activeTags.delete(tag);
    btn.classList.remove("active");
  } else {
    activeTags.add(tag);
    btn.classList.add("active");
  }
  renderSongs();
  updateActiveFiltersLabel();
}

// ===== 更新已選標籤顯示 =====
function updateActiveFiltersLabel() {
  if (activeTags.size === 0 && !searchQuery) {
    activeFiltersLabel.textContent = "尚未選擇任何分類";
  } else {
    const parts = [];
    if (activeTags.size > 0) {
      parts.push("篩選：" + [...activeTags].join("、"));
    }
    if (searchQuery) {
      parts.push(`搜尋：「${searchQuery}」`);
    }
    activeFiltersLabel.textContent = parts.join("　");
  }
}

// ===== 渲染歌單 =====
function renderSongs() {
  let filtered = songs.filter(song => {
    // 標籤篩選（AND 邏輯）
    const tagMatch = activeTags.size === 0 || [...activeTags].every(tag => song.tags.includes(tag));
    // 搜尋篩選
    const q = searchQuery.trim().toLowerCase();
    const searchMatch = !q || song.title.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q);
    return tagMatch && searchMatch;
  });
  
  // 按照歌名長度從短到長排序
  filtered.sort((a, b) => a.title.length - b.title.length);

  songCount.textContent = `共 ${filtered.length} 首歌曲`;

  if (filtered.length === 0) {
    songGrid.innerHTML = `
      <div class="no-results">
        <span class="emoji">🥂</span>
        找不到符合的歌曲，換個關鍵字試試看吧！
      </div>`;
    return;
  }

  songGrid.innerHTML = filtered.map(song => {
    const displayTags = song.tags.filter(t => {
      const nonArtistTags = ["中文", "台語", "韓文", "推薦", "新歌"];
      return nonArtistTags.includes(t);
    });

    const tagHTML = displayTags.map(tag => {
      return `<span class="song-tag tag-${tag}">${tag}</span>`;
    }).join("");

    return `
      <div class="song-card">
        <div class="song-title">${escapeHTML(song.title)}</div>
        <div class="song-artist">${escapeHTML(song.artist)}</div>
        <div class="song-tags">${tagHTML}</div>
      </div>`;
  }).join("");
}

// ===== HTML 轉義 =====
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ===== 綁定所有篩選按鈕（使用事件委派） =====
function bindFilterButtons() {
  // 固定按鈕：分類 & 語言
  document.getElementById("categoryButtons").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (btn) toggleTag(btn.dataset.tag, btn);
  });
  document.getElementById("languageButtons").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (btn) toggleTag(btn.dataset.tag, btn);
  });
  // 歌手按鈕（動態生成）
  document.getElementById("artistButtons").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (btn) toggleTag(btn.dataset.tag, btn);
  });
}

// ===== 清除篩選 =====
clearBtn.addEventListener("click", () => {
  activeTags.clear();
  searchQuery = "";
  searchInput.value = "";
  document.querySelectorAll(".filter-btn.active").forEach(btn => btn.classList.remove("active"));
  renderSongs();
  updateActiveFiltersLabel();
});

// ===== 搜尋 =====
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderSongs();
  updateActiveFiltersLabel();
});

// ===== 隨機歌曲功能 =====
const randomSongBtn = document.getElementById("randomSongBtn");
const randomSongModal = document.getElementById("randomSongModal");
const randomSongBtnNext = document.getElementById("randomSongBtnNext");
const randomSongBtnClose = document.getElementById("randomSongBtnClose");

function getRandomSong() {
  return songs[Math.floor(Math.random() * songs.length)];
}

function displayRandomSong(song) {
  document.getElementById("randomSongTitle").textContent = song.title;
  document.getElementById("randomSongArtist").textContent = song.artist;
  
  const tagsContainer = document.getElementById("randomSongTags");
  tagsContainer.innerHTML = song.tags
    .filter(tag => ["中文", "台語", "韓文", "推薦", "新歌"].includes(tag))
    .map(tag => {
      const tagLabel = tag === "新歌" ? "新歌 🆕" : tag;
      return `<span class="random-song-tag tag-${tag}">${tagLabel}</span>`;
    })
    .join("");
  
  randomSongModal.classList.add("active");
}

randomSongBtn.addEventListener("click", () => {
  const randomSong = getRandomSong();
  displayRandomSong(randomSong);
});

randomSongBtnNext.addEventListener("click", () => {
  const randomSong = getRandomSong();
  displayRandomSong(randomSong);
});

randomSongBtnClose.addEventListener("click", () => {
  randomSongModal.classList.remove("active");
});

// 點擊背景關閉
randomSongModal.addEventListener("click", (e) => {
  if (e.target === randomSongModal) {
    randomSongModal.classList.remove("active");
  }
});

// ===== 初始化 =====
function init() {
  createBubbles();
  buildArtistButtons();
  bindFilterButtons();
  renderSongs();
  updateActiveFiltersLabel();
}

init();
