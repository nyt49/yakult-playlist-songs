const songs = [
  // 甜歌 (全糖甜心)
  { title: "心花開", artist: "李千娜", tags: ["台語", "全糖甜心", "李千娜"] },
  { title: "Mr.Chu", artist: "Apink", tags: ["韓文", "全糖甜心", "Apink"] },
  { title: "寵愛", artist: "TFBOYS", tags: ["中文", "全糖甜心", "推薦", "TFBOYS"] },
  { title: "女孩", artist: "韋禮安", tags: ["中文", "全糖甜心", "韋禮安"] },
  { title: "泡泡糖", artist: "NCT", tags: ["中文", "全糖甜心", "NCT"] },
  { title: "湊熱鬧", artist: "BY2", tags: ["中文", "全糖甜心", "BY2"] },
  { title: "喜歡你", artist: "陳潔怡", tags: ["中文", "全糖甜心", "陳潔怡"] },
  { title: "日不落", artist: "蔡依林", tags: ["中文", "全糖甜心", "推薦", "蔡依林"] },
  { title: "愛不釋手", artist: "NCT", tags: ["中文", "全糖甜心", "NCT"] },
  { title: "蝴蝶少女", artist: "EXO", tags: ["中文", "全糖甜心", "EXO", "推薦"] },
  { title: "告白氣球", artist: "周杰倫", tags: ["中文", "全糖甜心", "周杰倫"] },
  { title: "一笑傾城", artist: "汪蘇瀧", tags: ["中文", "全糖甜心", "汪蘇瀧"] },
  { title: "愛情闖進門", artist: "BY2", tags: ["中文", "全糖甜心", "BY2"] },
  { title: "淋雨一直走", artist: "張韶涵", tags: ["中文", "全糖甜心", "張韶涵"] },
  { title: "七彩的微風", artist: "真珠美人魚", tags: ["中文", "全糖甜心", "真珠美人魚"] },
  { title: "戀愛ing", artist: "五月天", tags: ["中文", "全糖甜心", "五月天"] },
  { title: "Honey", artist: "郭書瑤", tags: ["中文", "全糖甜心", "郭書瑤"] },
  { title: "青春修煉手冊", artist: "TFBOYS", tags: ["中文", "全糖甜心", "TFBOYS"] },
  { title: "love more", artist: "Bii 畢書盡", tags: ["中文", "全糖甜心", "Bii 畢書盡"] },
  { title: "whatever", artist: "PiXXiE", tags: ["中文", "全糖甜心", "PiXXiE"] },
  { title: "不靈不靈", artist: "很美味", tags: ["中文", "全糖甜心", "新歌", "很美味"] },
  { title: "有點甜", artist: "汪蘇瀧 / BY2", tags: ["中文", "全糖甜心", "汪蘇瀧", "BY2"] },

  // Emo (微苦心情)
  { title: "座位", artist: "姚曉棠", tags: ["中文", "微苦心情", "姚曉棠"] },
  { title: "唯一", artist: "告五人", tags: ["中文", "微苦心情", "告五人"] },
  { title: "囂張", artist: "en", tags: ["中文", "微苦心情", "en"] },
  { title: "童話", artist: "光良", tags: ["中文", "微苦心情", "光良"] },
  { title: "雨愛", artist: "楊丞琳", tags: ["中文", "微苦心情", "楊丞琳"] },
  { title: "我看過", artist: "周星星", tags: ["中文", "微苦心情", "周星星"] },
  { title: "想見你", artist: "八三夭", tags: ["中文", "微苦心情", "八三夭"] },
  { title: "這時煙火", artist: "NCT", tags: ["中文", "微苦心情", "NCT"] },
  { title: "時間煮雨", artist: "郁可唯", tags: ["中文", "微苦心情", "郁可唯"] },
  { title: "為心導航", artist: "EXO", tags: ["中文", "微苦心情", "EXO"] },
  { title: "百年孤寂", artist: "王菲", tags: ["中文", "微苦心情", "王菲"] },
  { title: "我喜歡你", artist: "芒果醬", tags: ["台語", "微苦心情", "新歌", "芒果醬"] },
  { title: "我們的明天", artist: "鹿晗", tags: ["中文", "微苦心情", "鹿晗"] },
  { title: "你懂不懂我", artist: "BY2", tags: ["中文", "微苦心情", "BY2"] },
  { title: "太陽與地球", artist: "盧廣仲", tags: ["中文", "微苦心情", "新歌", "盧廣仲"] },
  { title: "我還是愛著你", artist: "MP魔幻力量", tags: ["中文", "微苦心情", "MP魔幻力量"] },
  { title: "十二月的奇蹟", artist: "EXO", tags: ["中文", "微苦心情", "EXO"] },
  { title: "每天在擔心", artist: "翁祥", tags: ["中文", "微苦心情", "新歌", "翁祥"] },
  { title: "妥協", artist: "en", tags: ["中文", "微苦心情", "新歌", "en"] },

  // 其他歌曲
  { title: "致愛", artist: "鹿晗", tags: ["中文", "鹿晗"] },
  { title: "離開的一路上", artist: "理想混蛋", tags: ["中文", "理想混蛋"] },
  { title: "天空海", artist: "NCT", tags: ["中文", "NCT"] },
  { title: "我們青春", artist: "李玉璽", tags: ["中文", "李玉璽"] },
  { title: "小城夏天", artist: "LBI利比", tags: ["中文", "LBI利比"] },
  { title: "Beatbox", artist: "NCT", tags: ["韓文", "NCT"] },
  { title: "彼得潘", artist: "EXO", tags: ["中文", "EXO"] },
  { title: "歐若拉", artist: "張韶涵", tags: ["中文", "張韶涵"] },
  { title: "你並不懂我", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "新少女祈禱", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "你不會一輩子的愛上我", artist: "Tyson Yoshi", tags: ["中文", "Tyson Yoshi"] },
  { title: "有沒有", artist: "BY2", tags: ["中文", "BY2"] },
  { title: "無垢", artist: "李浩瑋", tags: ["中文", "新歌", "李浩瑋"] },
  { title: "真心話", artist: "李浩瑋", tags: ["中文", "新歌", "李浩瑋"] },
  { title: "星空", artist: "五月天", tags: ["中文", "五月天"] },
  { title: "天機", artist: "MP魔幻力量 / 阿信", tags: ["中文", "MP魔幻力量", "五月天"] }, // 阿信歸類到五月天
  { title: "勢在必行", artist: "陳勢安 / 畢書盡", tags: ["中文", "陳勢安", "畢書盡"] },
  { title: "初雪", artist: "EXO", tags: ["韓文", "EXO"] }
];

// 預定義的分類
const MOOD_TAGS = ["全糖甜心", "微苦心情"];
const CAT_TAGS = ["推薦", "新歌"];
const LANG_TAGS = ["中文", "台語", "韓文"];

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

const moodButtonsContainer = document.getElementById("moodButtons");
const categoryButtonsContainer = document.getElementById("categoryButtons");
const languageButtonsContainer = document.getElementById("languageButtons");
const artistButtonsContainer = document.getElementById("artistButtons");

// ===== 建立香檳泡泡背景 =====
function createBubbles() {
  const emojis = ["🥂", "✨", "🫧"];
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

// ===== 取得過濾後的歌曲清單 =====
function getFilteredSongs() {
  return songs.filter(song => {
    const tagMatch = activeTags.size === 0 || [...activeTags].every(tag => song.tags.includes(tag));
    const q = searchQuery.trim().toLowerCase();
    const searchMatch = !q || song.title.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q);
    return tagMatch && searchMatch;
  });
}

// ===== 建立/更新篩選按鈕 =====
function renderFilters() {
  const filteredSongs = getFilteredSongs();
  
  // 計算目前過濾結果中，各個標籤出現的次數
  const counts = {};
  filteredSongs.forEach(song => {
    song.tags.forEach(t => {
      counts[t] = (counts[t] || 0) + 1;
    });
  });

  // 更新 氛圍、分類、語言 按鈕
  updateButtonGroup(moodButtonsContainer, MOOD_TAGS, counts);
  updateButtonGroup(categoryButtonsContainer, CAT_TAGS, counts);
  updateButtonGroup(languageButtonsContainer, LANG_TAGS, counts);

  // 更新 歌手 按鈕 (動態生成)
  const allArtistTags = Array.from(new Set(songs.flatMap(s => s.tags)))
    .filter(t => !MOOD_TAGS.includes(t) && !CAT_TAGS.includes(t) && !LANG_TAGS.includes(t) && t !== "") // 確保過濾掉空字串標籤
    .sort();
  
  updateButtonGroup(artistButtonsContainer, allArtistTags, counts);
}

function updateButtonGroup(container, tagList, counts) {
  container.innerHTML = "";
  tagList.forEach(tag => {
    const count = counts[tag] || 0;
    const btn = document.createElement("button");
    btn.className = `filter-btn ${activeTags.has(tag) ? 'active' : ''}`;
    btn.dataset.tag = tag;
    btn.textContent = `${tag} (${count})`;
    if (count === 0 && !activeTags.has(tag)) {
        btn.style.opacity = "0.5";
    }
    container.appendChild(btn);
  });
}

// ===== 切換標籤 =====
function toggleTag(tag) {
  if (MOOD_TAGS.includes(tag)) {
    // 如果點擊的是氛圍標籤，則清除所有其他標籤，只保留或切換此氛圍標籤
    if (activeTags.has(tag) && activeTags.size === 1) {
      activeTags.clear(); // 如果已經選中且是唯一標籤，則取消選中
    } else {
      activeTags.clear(); // 清除所有其他標籤
      activeTags.add(tag); // 選中當前氛圍標籤
    }
  } else {
    // 對於其他標籤，正常切換
    if (activeTags.has(tag)) {
      activeTags.delete(tag);
    } else {
      activeTags.add(tag);
    }
  }
  renderSongs();
  renderFilters();
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
  const filtered = getFilteredSongs();
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
    const displayTags = song.tags.filter(t => [...MOOD_TAGS, ...CAT_TAGS, ...LANG_TAGS].includes(t));
    const tagHTML = displayTags.map(tag => `<span class="song-tag tag-${tag}">${tag}</span>`).join("");

    return `
      <div class="song-card">
        <div class="song-title-container">
          <div class="song-title">${escapeHTML(song.title)}</div>
          <button class="copy-btn" title="複製歌名" data-song="${escapeHTML(song.title)}">📋</button>
        </div>
        <div class="song-artist">${escapeHTML(song.artist)}</div>
        <div class="song-tags">${tagHTML}</div>
      </div>`;
  }).join("");
}

// ===== HTML 轉義 =====
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/\[/g, "&#91;")
    .replace(/\]/g, "&#93;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ===== 監聽篩選按鈕點擊 (委派) =====
[moodButtonsContainer, categoryButtonsContainer, languageButtonsContainer, artistButtonsContainer].forEach(container => {
    container.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (btn) {
            toggleTag(btn.dataset.tag);
        }
    });
});

// ===== 清除篩選 =====
clearBtn.addEventListener("click", () => {
  activeTags.clear();
  searchQuery = "";
  searchInput.value = "";
  renderSongs();
  renderFilters();
  updateActiveFiltersLabel();
});

// ===== 搜尋 =====
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderSongs();
  renderFilters();
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
    .filter(tag => [...MOOD_TAGS, ...CAT_TAGS, ...LANG_TAGS].includes(tag))
    .map(tag => `<span class="random-song-tag tag-${tag}">${tag}</span>`)
    .join("");
  
  randomSongModal.classList.add("active");
}

randomSongBtn.addEventListener("click", () => {
  displayRandomSong(getRandomSong());
});

randomSongBtnNext.addEventListener("click", () => {
  displayRandomSong(getRandomSong());
});

randomSongBtnClose.addEventListener("click", () => {
  randomSongModal.classList.remove("active");
});

randomSongModal.addEventListener("click", (e) => {
  if (e.target === randomSongModal) randomSongModal.classList.remove("active");
});

// ===== 設定複製功能 (委派) =====
document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".copy-btn");
    if (copyBtn) {
        e.preventDefault();
        const songTitle = copyBtn.dataset.song;
        navigator.clipboard.writeText(songTitle).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "✓ 已複製";
            setTimeout(() => { copyBtn.textContent = originalText; }, 1500);
        }).catch(err => console.error("複製失敗:", err));
    }
});

// ===== 初始化 =====
function init() {
  createBubbles();
  renderFilters();
  renderSongs();
  updateActiveFiltersLabel();
}

init();
