"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const copybook = {
  zh: {
    eyebrow: "给流浪的小爪一点声音", brandZh: "小爪帮帮", brandEn: "PawHelp", tagline: "把遇见写清楚，让帮助更容易发生",
    stepOne: "01 · 填写救助卡", formTitle: "告诉我们你看见了什么", fillExample: "填入示例",
    animalInfo: "动物信息", animalInfoHint: "先写你能确定的，不确定的可以留空。", animalType: "动物", age: "年龄阶段",
    helpNeeded: "需要什么帮助", helpNeededHint: "选择现在最重要的一件事。", condition: "目前情况", helpType: "主要需求",
    whereContact: "地点与联系", whereContactHint: "公开内容中尽量不要写过细的私人地址。", location: "发现地点", contact: "联系方式",
    locationPlaceholder: "如：阳光花园北门", contactPlaceholder: "如：私信我 / 电话",
    voicePlatform: "语气与平台", voicePlatformHint: "文案会随平台稍微调整节奏。", tone: "语气", platform: "发布平台", length: "文字长度",
    details: "补充观察", detailsPlaceholder: "如：左后腿不敢着地，躲在灌木旁，可以靠近", generate: "生成求助文案与卡片",
    privacy: "内容只保存在你的浏览器里，不上传服务器。", stepTwo: "02 · 可直接转发", generatedPost: "生成的求助文案", history: "历史记录",
    copyText: "复制文案", share: "分享", edit: "继续编辑", stepThree: "03 · 图片卡片工作室", studioTitle: "做一张真正能转发的求助卡",
    studioHint: "换模板不会清空内容，下载始终可用", shareCard: "分享图片", downloadPng: "下载高清 PNG", qualityNote: "离线可用 · 高清导出 · 无水印遮挡",
    templates: "选择模板", cardTipTitle: "小提醒", cardTip: "卡片负责让人停下来，完整情况放在配套文案里更好读。",
    installTitle: "把小爪帮帮带在手机里", installText: "添加到手机桌面，遇到流浪猫狗时可以快速打开。", installHow: "如何添加到桌面",
    footer: "愿每一次被看见，都离帮助更近一点。", disclaimer: "请以现场观察为准；受伤动物应尽快联系专业救助或宠物医院。",
    installDialogTitle: "添加 PawHelp 到主屏幕", gotIt: "知道了", historyTitle: "最近生成", clearHistory: "清空本机记录",
    installIos: "iPhone：用 Safari 打开，点击分享按钮，再选择“添加到主屏幕”。",
    installAndroid: "Android：用 Chrome 打开，点击菜单，再选择“添加到主屏幕”。",
    copied: "文案已复制", generated: "已生成新的求助文案与卡片", saved: "图片已开始下载", shareUnavailable: "当前浏览器不支持直接分享，已改为下载。",
    historyEmpty: "还没有历史记录。生成后的文案会保存在这台设备上。", historyRestored: "已恢复这条记录", cleared: "本机记录已清空",
    cardShared: "图片分享面板已打开", postShared: "分享面板已打开", copyFailed: "复制失败，请长按文案复制", needLocation: "请至少填写一个大概地点",
    unknownLocation: "附近", privateMessage: "请私信联系", observed: "现场观察", helpLabel: "需要", locationLabel: "地点", contactLabel: "联系", footerMark: "小爪帮帮 PawHelp"
  },
  en: {
    eyebrow: "Give a little paw a voice", brandZh: "PawHelp", brandEn: "Writer", tagline: "Tell the story clearly. Make help easier to find.",
    stepOne: "01 · Rescue card", formTitle: "Tell us what you observed", fillExample: "Use an example",
    animalInfo: "Animal info", animalInfoHint: "Only add what you know. Unknown is okay.", animalType: "Animal", age: "Age group",
    helpNeeded: "Help needed", helpNeededHint: "Choose the most important need right now.", condition: "Current condition", helpType: "Primary need",
    whereContact: "Location & contact", whereContactHint: "Avoid posting an overly precise private address.", location: "Location", contact: "Contact",
    locationPlaceholder: "e.g. North gate, Sunny Garden", contactPlaceholder: "e.g. DM me / phone",
    voicePlatform: "Tone & platform", voicePlatformHint: "The rhythm adapts slightly to the platform.", tone: "Tone", platform: "Platform", length: "Text length",
    details: "What you observed", detailsPlaceholder: "e.g. avoids putting weight on the back leg and stays near the bushes", generate: "Generate rescue post & card",
    privacy: "Your content stays in this browser and is never uploaded.", stepTwo: "02 · Ready to share", generatedPost: "Generated rescue post", history: "History",
    copyText: "Copy text", share: "Share", edit: "Keep editing", stepThree: "03 · Image card studio", studioTitle: "Make a rescue card people can share",
    studioHint: "Switching templates keeps your content. Download is always ready.", shareCard: "Share image", downloadPng: "Download HD PNG", qualityNote: "Works offline · High resolution · Clean export",
    templates: "Choose a template", cardTipTitle: "Quick tip", cardTip: "Let the card stop the scroll; keep the full story in the accompanying post.",
    installTitle: "Keep PawHelp on your phone", installText: "Add it to your home screen for quick access when you meet a stray.", installHow: "How to install",
    footer: "May every small life that is seen move one step closer to help.", disclaimer: "Share observed facts only. Contact a rescue or veterinary professional for injured animals.",
    installDialogTitle: "Add PawHelp to your home screen", gotIt: "Got it", historyTitle: "Recent posts", clearHistory: "Clear local history",
    installIos: "iPhone: Open in Safari, tap Share, then choose Add to Home Screen.",
    installAndroid: "Android: Open in Chrome, tap the menu, then choose Add to Home screen.",
    copied: "Post copied", generated: "A new rescue post and card are ready", saved: "Your image download has started", shareUnavailable: "Direct sharing is unavailable here, so the image was downloaded instead.",
    historyEmpty: "No history yet. Generated posts are stored on this device.", historyRestored: "Post restored", cleared: "Local history cleared",
    cardShared: "Image share sheet opened", postShared: "Share sheet opened", copyFailed: "Could not copy. Please select the post manually.", needLocation: "Please add at least a general location",
    unknownLocation: "this area", privateMessage: "please send a private message", observed: "Observed", helpLabel: "Need", locationLabel: "Location", contactLabel: "Contact", footerMark: "PawHelp Writer"
  }
};

const optionSets = {
  animal: [
    { value: "cat", zh: "猫", en: "Cat" }, { value: "dog", zh: "狗", en: "Dog" }, { value: "unknown", zh: "不确定", en: "Not sure" }
  ],
  age: [
    { value: "young", zh: "幼年", en: "Young" }, { value: "adult", zh: "成年", en: "Adult" }, { value: "senior", zh: "年长", en: "Senior" }, { value: "unknown", zh: "不确定", en: "Not sure" }
  ],
  condition: [
    { value: "injured", zh: "疑似受伤", en: "May be injured" }, { value: "weak", zh: "虚弱 / 消瘦", en: "Weak / underweight" },
    { value: "pregnant", zh: "疑似怀孕", en: "May be pregnant" }, { value: "young", zh: "幼崽独处", en: "Young and alone" },
    { value: "stable", zh: "状态尚可", en: "Appears stable" }, { value: "unknown", zh: "暂不确定", en: "Not sure" }
  ],
  helpType: [
    { value: "foster", zh: "救助 / 临时安置", en: "Rescue / foster" }, { value: "vet", zh: "医疗资源", en: "Veterinary help" },
    { value: "transport", zh: "转运", en: "Transport" }, { value: "adoption", zh: "领养线索", en: "Adoption lead" },
    { value: "food", zh: "食物 / 饮水", en: "Food / water" }, { value: "share", zh: "扩散信息", en: "Share the post" }
  ],
  tone: [
    { value: "gentle", zh: "温柔克制", en: "Gentle" }, { value: "urgent", zh: "紧急清楚", en: "Urgent" },
    { value: "objective", zh: "客观简洁", en: "Objective" }, { value: "story", zh: "温暖讲述", en: "Story-like" }
  ],
  platform: [
    { value: "wechat", zh: "朋友圈", en: "WeChat Moments" }, { value: "community", zh: "小区群", en: "Community group" },
    { value: "xiaohongshu", zh: "小红书", en: "Xiaohongshu" }, { value: "rescue", zh: "救助组织", en: "Rescue organization" },
    { value: "instagram", zh: "Instagram", en: "Instagram" }
  ],
  length: [
    { value: "short", zh: "精简 Short", en: "Short" }, { value: "medium", zh: "适中 Medium", en: "Medium" }, { value: "full", zh: "完整 Full", en: "Full" }
  ]
};

const templates = [
  { id: "warm", en: "Warm Minimal", zh: "暖色极简" },
  { id: "journal", en: "Soft Journal", zh: "温柔手账" },
  { id: "notice", en: "Rescue Notice", zh: "清晰公告" },
  { id: "cute", en: "Cute Paw", zh: "可爱小爪" },
  { id: "green", en: "Calm Green", zh: "自然治愈" },
  { id: "xhs", en: "Social Cover", zh: "小红书封面" },
  { id: "polaroid", en: "Polaroid Story", zh: "拍立得故事" },
  { id: "alert", en: "Gentle Alert", zh: "温柔紧急" },
  { id: "community", en: "Community Poster", zh: "社区海报" },
  { id: "quote", en: "Simple Quote", zh: "治愈短句" }
];

const ratioSizes = {
  "1:1": [1080, 1080], "3:4": [1080, 1440], "4:5": [1080, 1350], "9:16": [1080, 1920], "16:9": [1920, 1080]
};

const state = {
  lang: localStorage.getItem("pawhelp-lang") || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"),
  ratio: "4:5",
  template: "warm",
  lastData: null,
  lastCopy: null,
  installPrompt: null,
  history: readHistory()
};

function t(key) { return copybook[state.lang][key] || key; }
function optionLabel(group, value, lang = state.lang) { return optionSets[group].find((item) => item.value === value)?.[lang] || value; }

function renderLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = state.lang === "zh" ? "小爪帮帮 PawHelp" : "PawHelp Writer";
  $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  $$('.lang-switch button').forEach((button) => button.classList.toggle('active', button.dataset.lang === state.lang));
  renderSelects();
  renderInstallSteps();
  renderTemplates();
  if (state.lastData) {
    state.lastCopy = buildCopy(state.lastData);
    renderPost();
    drawMainCard();
  }
  renderHistory();
}

function renderSelects() {
  Object.entries(optionSets).forEach(([id, options]) => {
    const select = document.getElementById(id);
    if (!select) return;
    const current = select.value || ({ animal: 'cat', age: 'adult', condition: 'injured', helpType: 'foster', tone: 'gentle', platform: 'xiaohongshu', length: 'medium' }[id]);
    select.replaceChildren(...options.map((item) => {
      const option = document.createElement('option');
      option.value = item.value;
      option.textContent = item[state.lang];
      return option;
    }));
    select.value = current;
  });
}

function readForm() {
  return {
    animal: $('#animal').value, age: $('#age').value, condition: $('#condition').value, helpType: $('#helpType').value,
    location: $('#location').value.trim(), contact: $('#contact').value.trim(), tone: $('#tone').value,
    platform: $('#platform').value, length: $('#length').value, details: $('#details').value.trim()
  };
}

function applyData(data) {
  ['animal','age','condition','helpType','location','contact','tone','platform','length','details'].forEach((key) => {
    const field = document.getElementById(key);
    if (field && data[key] !== undefined) field.value = data[key];
  });
  $('#detailCount').textContent = $('#details').value.length;
}

function buildCopy(data) {
  const lang = state.lang;
  const animal = data.animal === 'cat' ? (lang === 'zh' ? '小猫' : 'cat') : data.animal === 'dog' ? (lang === 'zh' ? '小狗' : 'dog') : (lang === 'zh' ? '小动物' : 'animal');
  const age = optionLabel('age', data.age, lang);
  const location = data.location || t('unknownLocation');
  const contact = data.contact || t('privateMessage');

  const conditionZh = {
    injured: '它看起来可能受了伤，需要尽快确认情况', weak: '它看起来有些虚弱、消瘦', pregnant: '它看起来可能怀孕了',
    young: '它年纪很小，目前独自在外', stable: '目前看起来状态尚可，但还在外面徘徊', unknown: '目前还无法确定它的具体状况'
  }[data.condition];
  const conditionEn = {
    injured: 'It may be injured and needs its condition checked soon', weak: 'It looks weak and underweight', pregnant: 'It may be pregnant',
    young: 'It is very young and currently alone outside', stable: 'It appears stable for now but is still staying outside', unknown: 'Its condition is not clear yet'
  }[data.condition];
  const helpZh = { foster: '临时安置或救助资源', vet: '靠谱的医疗资源', transport: '安全转运', adoption: '合适的领养线索', food: '食物和干净饮水', share: '帮忙扩散这条信息' }[data.helpType];
  const helpEn = { foster: 'a safe foster or rescue contact', vet: 'reliable veterinary help', transport: 'safe transport', adoption: 'a suitable adoption lead', food: 'food and clean water', share: 'help sharing this post' }[data.helpType];
  const urgent = ['injured', 'weak', 'young'].includes(data.condition) || data.tone === 'urgent';
  const pawZh = { foster: '今晚如果有个安全的地方，就已经很重要。', vet: '早一点确认伤情，也许就能少受一点苦。', transport: '差的可能只是一段安全的路。', adoption: '它在等一个愿意认真了解它的人。', food: '一碗水和一点食物，也能撑过眼前。', share: '多一个人看见，就多一条可能的线索。' }[data.helpType];
  const pawEn = { foster: 'One safe place tonight would already mean a lot.', vet: 'An earlier check may spare this little one more pain.', transport: 'The missing piece may simply be one safe ride.', adoption: 'This little one is waiting for someone willing to know them.', food: 'A little food and clean water can help with the next step.', share: 'One more person seeing this may bring the right lead.' }[data.helpType];

  if (lang === 'zh') {
    const title = urgent ? `${location}这只${animal}需要尽快帮助` : `在${location}遇见一只需要帮助的${animal}`;
    const observed = data.details ? `我目前观察到：${data.details.replace(/[。.!！]+$/, '')}。` : '';
    const shortBody = `${location}发现一只${animal}。${conditionZh}。现在需要${helpZh}，如有线索请${contact}。`;
    const mediumBody = `在${location}发现一只${age === '不确定' ? '' : age}${animal}。${conditionZh}。${observed}现在最需要${helpZh}。如果你有相关资源或愿意搭把手，请${contact}，也谢谢帮忙转发。`;
    const fullBody = `${mediumBody}${data.condition === 'injured' ? ' 现场信息仅供参考，最好由专业人员进一步判断。' : ''}`;
    const platformTail = data.platform === 'xiaohongshu' ? '\n\n#流浪动物救助 #小动物求助' : data.platform === 'community' ? '\n\n麻烦邻居们帮忙留意，感谢。' : '';
    return { title, body: (data.length === 'short' ? shortBody : data.length === 'full' ? fullBody : mediumBody) + platformTail, cardBody: data.length === 'short' ? shortBody : mediumBody, paw: pawZh, location, contact, animal, age, help: helpZh, condition: conditionZh };
  }

  const title = urgent ? `This ${animal} near ${location} needs help soon` : `A ${animal} near ${location} may need a little help`;
  const observed = data.details ? `Observed: ${data.details.replace(/[.!]+$/, '')}. ` : '';
  const article = /^[aeiou]/i.test(age) ? 'an' : 'a';
  const agePhrase = data.age === 'unknown' ? `a ${animal}` : `${article} ${age.toLowerCase()} ${animal}`;
  const shortBody = `A ${animal} was found near ${location}. ${conditionEn}. We are looking for ${helpEn}. Please ${contact}.`;
  const mediumBody = `We found ${agePhrase} near ${location}. ${conditionEn}. ${observed}The most urgent need is ${helpEn}. If you have a useful contact or can help, ${contact}. Sharing is appreciated.`;
  const fullBody = `${mediumBody}${data.condition === 'injured' ? ' This is only an observation; a veterinary or rescue professional should assess the animal.' : ''}`;
  const platformTail = data.platform === 'instagram' ? '\n\n#StrayAnimalHelp #AnimalRescue' : '';
  return { title, body: (data.length === 'short' ? shortBody : data.length === 'full' ? fullBody : mediumBody) + platformTail, cardBody: data.length === 'short' ? shortBody : mediumBody, paw: pawEn, location, contact, animal, age, help: helpEn, condition: conditionEn };
}

function renderPost() {
  const copy = state.lastCopy;
  $('#postTitle').textContent = copy.title;
  $('#postBody').textContent = copy.body;
  $('#postMeta').replaceChildren(...[
    `📍 ${t('locationLabel')}: ${copy.location}`, `♡ ${t('helpLabel')}: ${copy.help}`, `☎ ${t('contactLabel')}: ${copy.contact}`
  ].map((text) => { const span = document.createElement('span'); span.textContent = text; return span; }));
}

function fillExample() {
  const data = state.lang === 'zh' ? {
    animal: 'cat', age: 'adult', condition: 'injured', helpType: 'foster', location: '阳光花园北门', contact: '请私信我', tone: 'gentle', platform: 'xiaohongshu', length: 'medium',
    details: '左后腿不太敢着地，躲在灌木旁，可以慢慢靠近'
  } : {
    animal: 'cat', age: 'adult', condition: 'injured', helpType: 'foster', location: 'North gate, Sunny Garden', contact: 'please DM me', tone: 'gentle', platform: 'instagram', length: 'medium',
    details: 'avoids putting weight on the back leg and stays near the bushes'
  };
  applyData(data);
  generate(data, false);
}

function generate(data = readForm(), save = true) {
  if (!data.location && save) { showToast(t('needLocation')); $('#location').focus(); return; }
  state.lastData = data;
  state.lastCopy = buildCopy(data);
  renderPost();
  drawMainCard();
  if (save) {
    state.history.unshift({ id: Date.now(), at: new Date().toISOString(), lang: state.lang, data });
    state.history = state.history.slice(0, 12);
    writeHistory();
    renderHistory();
    showToast(t('generated'));
    $('#resultSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function readHistory() {
  try { return JSON.parse(localStorage.getItem('pawhelp-history') || '[]'); } catch { return []; }
}
function writeHistory() { localStorage.setItem('pawhelp-history', JSON.stringify(state.history)); }

function renderHistory() {
  $('#historyCount').textContent = state.history.length;
  const list = $('#historyList');
  if (!list) return;
  if (!state.history.length) {
    const empty = document.createElement('div'); empty.className = 'history-empty'; empty.textContent = t('historyEmpty'); list.replaceChildren(empty); return;
  }
  list.replaceChildren(...state.history.map((entry) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'history-entry'; button.dataset.id = entry.id;
    const entryLang = entry.lang || state.lang;
    const previousLang = state.lang; state.lang = entryLang; const copy = buildCopy(entry.data); state.lang = previousLang;
    const strong = document.createElement('strong'); strong.textContent = copy.title;
    const stamp = document.createElement('span'); stamp.textContent = new Date(entry.at).toLocaleString(state.lang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    button.append(strong, stamp);
    button.addEventListener('click', () => {
      if (entry.lang && entry.lang !== state.lang) { state.lang = entry.lang; localStorage.setItem('pawhelp-lang', state.lang…2074 tokens truncated…h) last = last.slice(0, -1).trimEnd();
    lines[lines.length - 1] = last + ellipsis;
  }
  return lines;
}

function drawWrapped(ctx, text, x, y, maxWidth, lineHeight, maxLines, align = 'left') {
  const lines = wrapLines(ctx, text, maxWidth, maxLines);
  ctx.textAlign = align;
  const anchor = align === 'center' ? x + maxWidth / 2 : align === 'right' ? x + maxWidth : x;
  lines.forEach((line, index) => ctx.fillText(line, anchor, y + index * lineHeight));
  ctx.textAlign = 'left';
  return y + lines.length * lineHeight;
}

function drawPaw(ctx, x, y, size, color, opacity = 1) {
  ctx.save(); ctx.globalAlpha = opacity; ctx.fillStyle = color;
  [[-.34,-.26,.16],[-.1,-.43,.17],[.17,-.4,.16],[.39,-.2,.14]].forEach(([dx,dy,r]) => {
    ctx.beginPath(); ctx.arc(x + size * dx, y + size * dy, size * r, 0, Math.PI * 2); ctx.fill();
  });
  ctx.beginPath(); ctx.ellipse(x, y + size * .12, size * .34, size * .27, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
}

function drawHeart(ctx, x, y, size, color, opacity = 1) {
  ctx.save(); ctx.globalAlpha = opacity; ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x, y + size * .25); ctx.bezierCurveTo(x - size * .7, y - size * .2, x - size * .55, y - size * .75, x, y - size * .35);
  ctx.bezierCurveTo(x + size * .55, y - size * .75, x + size * .7, y - size * .2, x, y + size * .25); ctx.fill(); ctx.restore();
}

function drawLeaf(ctx, x, y, size, color, flip = 1) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = Math.max(1, size * .045); ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + size * .2 * flip, y - size * .55, x + size * .46 * flip, y - size); ctx.stroke();
  for (let i = 1; i < 5; i++) {
    const py = y - size * i / 5; const px = x + size * .08 * i * flip;
    ctx.beginPath(); ctx.moveTo(px, py); ctx.quadraticCurveTo(px + size * .3 * flip, py - size * .18, px + size * .28 * flip, py - size * .38); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(px, py); ctx.quadraticCurveTo(px - size * .16 * flip, py - size * .22, px - size * .12 * flip, py - size * .35); ctx.stroke();
  }
  ctx.restore();
}

function drawAnimalDoodle(ctx, x, y, size, palette = {}) {
  const cat = palette.cat || '#e9825a', dog = palette.dog || '#f6c28b', ink = palette.ink || '#3a2a22';
  ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.fillStyle = cat; ctx.beginPath(); ctx.arc(x - size * .18, y, size * .26, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - size * .39, y - size * .13); ctx.lineTo(x - size * .34, y - size * .43); ctx.lineTo(x - size * .13, y - size * .22); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x + size * .02, y - size * .13); ctx.lineTo(x - size * .03, y - size * .43); ctx.lineTo(x - size * .23, y - size * .22); ctx.fill();
  ctx.fillStyle = dog; ctx.beginPath(); ctx.arc(x + size * .22, y + size * .04, size * .29, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#b9825a'; ctx.beginPath(); ctx.ellipse(x + size * .02, y, size * .12, size * .25, -.35, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x + size * .43, y, size * .12, size * .25, .35, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = ink;
  [[x-size*.26,y-size*.02],[x-size*.09,y-size*.02],[x+size*.14,y],[x+size*.31,y]].forEach(([cx,cy]) => { ctx.beginPath(); ctx.arc(cx,cy,size*.025,0,Math.PI*2);ctx.fill(); });
  ctx.beginPath(); ctx.arc(x - size * .18, y + size * .09, size * .035, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(x + size * .225, y + size * .12, size * .045, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = ink; ctx.lineWidth = size * .018;
  ctx.beginPath(); ctx.arc(x - size*.18, y + size*.105, size*.09, .25, 2.9); ctx.stroke();
  ctx.beginPath(); ctx.arc(x + size*.225, y + size*.135, size*.1, .22, 2.92); ctx.stroke();
  ctx.restore();
}

function drawBadge(ctx, text, x, y, color, background, unit, align = 'left') {
  ctx.font = `700 ${Math.max(8, 25 * unit)}px ${getCanvasFont()}`;
  const pad = 18 * unit; const height = 48 * unit; const width = ctx.measureText(text).width + pad * 2;
  const bx = align === 'right' ? x - width : x;
  roundedRect(ctx, bx, y, width, height, 24 * unit, background);
  ctx.fillStyle = color; ctx.textBaseline = 'middle'; ctx.fillText(text, bx + pad, y + height / 2); ctx.textBaseline = 'top';
  return width;
}

function getCanvasFont() { return 'Inter, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif'; }
function titleFont(unit, size = 63, weight = 800) { return `${weight} ${Math.max(11, size * unit)}px ${getCanvasFont()}`; }
function bodyFont(unit, size = 31, weight = 500) { return `${weight} ${Math.max(8, size * unit)}px ${getCanvasFont()}`; }
function lineLimit(data) { return data.length === 'short' ? 4 : data.length === 'full' ? 12 : 7; }

function gradientFill(ctx, x0, y0, x1, y1, stops) {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1); stops.forEach(([at, color]) => gradient.addColorStop(at, color)); return gradient;
}

function drawInfoChips(ctx, data, copy, x, y, maxWidth, unit, colors = {}) {
  const items = [`📍 ${copy.location}`, `♡ ${copy.help}`];
  const gap = 12 * unit; let cx = x; let cy = y;
  ctx.font = bodyFont(unit, 24, 700); ctx.textBaseline = 'middle';
  items.forEach((text) => {
    const width = Math.min(maxWidth, ctx.measureText(text).width + 34 * unit);
    if (cx + width > x + maxWidth && cx > x) { cx = x; cy += 58 * unit; }
    roundedRect(ctx, cx, cy, width, 46 * unit, 23 * unit, colors.bg || '#fff5eb', colors.stroke || null, 1.5 * unit);
    ctx.fillStyle = colors.text || '#6c4b39'; ctx.fillText(text, cx + 17 * unit, cy + 23 * unit); cx += width + gap;
  });
  ctx.textBaseline = 'top'; return cy + 46 * unit;
}

function drawContact(ctx, copy, x, y, width, unit, background = '#f4b8a8', color = '#4c3327') {
  roundedRect(ctx, x, y, width, 62 * unit, 20 * unit, background);
  ctx.fillStyle = color; ctx.font = bodyFont(unit, 25, 750); ctx.textBaseline = 'middle';
  const label = `${state.lang === 'zh' ? '联系' : 'Contact'} · ${copy.contact}`;
  const clipped = wrapLines(ctx, label, width - 36 * unit, 1)[0] || label;
  ctx.fillText(clipped, x + 18 * unit, y + 31 * unit); ctx.textBaseline = 'top';
}

function drawFooter(ctx, x, y, width, unit, color = '#7a6a5e', align = 'left') {
  ctx.fillStyle = color; ctx.font = bodyFont(unit, 20, 700); ctx.textAlign = align;
  ctx.fillText(t('footerMark'), align === 'center' ? x + width / 2 : align === 'right' ? x + width : x, y); ctx.textAlign = 'left';
}

function drawWarm(ctx, w, h, data, copy, u) {
  ctx.fillStyle = '#fff8ef'; ctx.fillRect(0, 0, w, h);
  drawPaw(ctx, w*.86, h*.15, 170*u, '#e9825a', .07); drawPaw(ctx, w*.14, h*.82, 130*u, '#9dbf9e', .07);
  const m = Math.max(26*u, Math.min(w,h)*.055); const x=m, y=m, cw=w-m*2, ch=h-m*2;
  ctx.shadowColor='rgba(58,42,34,.10)';ctx.shadowBlur=30*u;ctx.shadowOffsetY=12*u;roundedRect(ctx,x,y,cw,ch,38*u,'#fff');ctx.shadowColor='transparent';
  const pad=54*u; drawBadge(ctx, optionLabel('animal',data.animal),x+pad,y+pad,'#c96a48','#fff0e4',u);
  drawBadge(ctx, optionLabel('condition',data.condition),x+cw-pad,y+pad,'#6f7f59','#edf4e8',u,'right');
  const contentW=cw-pad*2; let ty=y+ch*.2;
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,64);ty=drawWrapped(ctx,copy.title,x+pad,ty,contentW,72*u,2);
  ctx.fillStyle='#745f52';ctx.font=bodyFont(u,31);ty=drawWrapped(ctx,copy.cardBody,x+pad,ty+26*u,contentW,47*u,Math.min(lineLimit(data),h/w>1.5?9:6));
  const infoY=Math.max(ty+30*u,y+ch*.63); drawInfoChips(ctx,data,copy,x+pad,infoY,contentW,u);
  drawContact(ctx,copy,x+pad,y+ch-160*u,contentW,u,'#fff0e5');
  ctx.fillStyle='#9a705c';ctx.font=bodyFont(u,22,600);drawWrapped(ctx,`“${copy.paw}”`,x+pad,y+ch-86*u,contentW,30*u,2);
  drawFooter(ctx,x+pad,y+ch-43*u,contentW,u);
}

function drawJournal(ctx, w, h, data, copy, u) {
  ctx.fillStyle='#f9efe2';ctx.fillRect(0,0,w,h);ctx.fillStyle='rgba(201,106,72,.16)';
  for(let x=25*u;x<w;x+=55*u)for(let y=28*u;y<h;y+=55*u){ctx.beginPath();ctx.arc(x,y,3*u,0,Math.PI*2);ctx.fill();}
  ctx.save();ctx.translate(w/2,h/2);ctx.rotate(-.012);const pw=w*.84,ph=h*.84,px=-pw/2,py=-ph/2;
  ctx.shadowColor='rgba(58,42,34,.13)';ctx.shadowBlur=28*u;ctx.shadowOffsetY=13*u;roundedRect(ctx,px,py,pw,ph,12*u,'#fffcf6');ctx.shadowColor='transparent';
  ctx.fillStyle='rgba(246,194,139,.72)';ctx.save();ctx.rotate(.035);roundedRect(ctx,-120*u,py-18*u,240*u,58*u,5*u,'rgba(246,194,139,.72)');ctx.restore();
  ctx.strokeStyle='#e8d5c4';ctx.setLineDash([10*u,10*u]);ctx.lineWidth=2*u;roundedRect(ctx,px+28*u,py+28*u,pw-56*u,ph-56*u,10*u,null,'#e8d5c4',2*u);ctx.setLineDash([]);
  const pad=65*u,cx=px+pad,cw=pw-pad*2;drawBadge(ctx,state.lang==='zh'?'今日记录':'TODAY’S NOTE',cx,py+72*u,'#7a614e','#f4e1c5',u);
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,58,800);let ty=drawWrapped(ctx,copy.title,cx,py+150*u,cw,68*u,2);
  ctx.strokeStyle='#e9825a';ctx.lineWidth=5*u;ctx.beginPath();ctx.moveTo(cx,ty+15*u);ctx.lineTo(cx+cw*.36,ty+15*u);ctx.stroke();
  ctx.fillStyle='#6f5b50';ctx.font=bodyFont(u,30);ty=drawWrapped(ctx,copy.cardBody,cx,ty+42*u,cw,46*u,Math.min(lineLimit(data),7));
  drawInfoChips(ctx,data,copy,cx,Math.max(ty+24*u,py+ph*.64),cw,u,{bg:'#eef3e8',text:'#627553'});
  ctx.fillStyle='#c96a48';ctx.font=bodyFont(u,24,700);drawWrapped(ctx,copy.paw,cx,py+ph-125*u,cw,32*u,2);
  drawFooter(ctx,cx,py+ph-62*u,cw,u);ctx.restore();
}

function drawNotice(ctx,w,h,data,copy,u){
  ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);const head=Math.max(160*u,h*.17);ctx.fillStyle='#e9825a';ctx.fillRect(0,0,w,head);
  drawPaw(ctx,w*.88,head*.52,110*u,'#fff',.2);ctx.fillStyle='#fff';ctx.font=bodyFont(u,25,800);ctx.fillText(state.lang==='zh'?'流浪动物求助':'STRAY ANIMAL HELP',65*u,46*u);
  ctx.font=titleFont(u,55);drawWrapped(ctx,copy.title,65*u,88*u,w-130*u,62*u,2);
  const m=58*u,g=18*u,top=head+42*u,boxW=w-m*2;
  const sections=[
    [state.lang==='zh'?'情况':'SITUATION',copy.condition],
    [state.lang==='zh'?'信息':'INFO',`${optionLabel('animal',data.animal)} · ${optionLabel('age',data.age)} · ${copy.location}`],
    [state.lang==='zh'?'需要帮助':'HELP NEEDED',copy.help]
  ];
  const available=h-top-190*u;const boxH=Math.max(130*u,(available-g*2)/3);
  sections.forEach(([label,value],i)=>{const y=top+i*(boxH+g);roundedRect(ctx,m,y,boxW,boxH,18*u,'#fff8ef','#ead8ca',2*u);ctx.fillStyle='#c96a48';ctx.font=bodyFont(u,21,800);ctx.fillText(label,m+26*u,y+22*u);ctx.fillStyle='#3a2a22';ctx.font=bodyFont(u,29,650);drawWrapped(ctx,value,m+26*u,y+56*u,boxW-52*u,39*u,2);});
  drawContact(ctx,copy,m,h-123*u,boxW,u,'#e9825a','#fff');drawFooter(ctx,m,h-45*u,boxW,u,'#7a6a5e','center');
}

function drawCute(ctx,w,h,data,copy,u){
  ctx.fillStyle='#fff3ea';ctx.fillRect(0,0,w,h);drawHeart(ctx,w*.13,h*.16,54*u,'#f4b8a8',.55);drawPaw(ctx,w*.87,h*.2,100*u,'#e9825a',.14);drawPaw(ctx,w*.1,h*.78,120*u,'#9dbf9e',.12);
  for(const [x,y,c] of [[.88,.72,'#f4b8a8'],[.17,.33,'#f6c28b'],[.81,.43,'#9dbf9e']]){ctx.fillStyle=c;ctx.globalAlpha=.28;ctx.beginPath();ctx.arc(w*x,h*y,18*u,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;}
  const m=68*u,cw=w-m*2;roundedRect(ctx,m,65*u,cw,h*.27,54*u,'#fff');
  ctx.beginPath();ctx.moveTo(m+cw*.22,65*u+h*.27);ctx.lineTo(m+cw*.29,65*u+h*.27);ctx.lineTo(m+cw*.24,65*u+h*.32);ctx.fillStyle='#fff';ctx.fill();
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,61,850);drawWrapped(ctx,copy.title,m+46*u,118*u,cw-92*u,68*u,2);
  const bodyY=h*.39;roundedRect(ctx,m,bodyY,cw,h*.41,34*u,'rgba(255,255,255,.92)');ctx.fillStyle='#695246';ctx.font=bodyFont(u,31);let ty=drawWrapped(ctx,copy.cardBody,m+46*u,bodyY+46*u,cw-92*u,46*u,Math.min(lineLimit(data),7));
  drawInfoChips(ctx,data,copy,m+46*u,Math.max(ty+26*u,bodyY+h*.25),cw-92*u,u,{bg:'#fff0e7',text:'#8c5841'});
  ctx.fillStyle='#9b6651';ctx.font=bodyFont(u,25,700);drawWrapped(ctx,copy.paw,m,h*.84,cw,34*u,2,'center');drawFooter(ctx,m,h-54*u,cw,u,'#9a7d6c','center');
}

function drawGreen(ctx,w,h,data,copy,u){
  ctx.fillStyle='#f3f7ee';ctx.fillRect(0,0,w,h);drawLeaf(ctx,70*u,280*u,210*u,'rgba(111,154,115,.35)',1);drawLeaf(ctx,w-60*u,h-90*u,235*u,'rgba(111,154,115,.28)',-1);
  const m=65*u;roundedRect(ctx,m,72*u,w-m*2,h-144*u,36*u,'rgba(255,252,246,.94)');
  drawBadge(ctx,state.lang==='zh'?'温柔求助':'A GENTLE REQUEST',m+50*u,125*u,'#55775a','#dfead7',u);
  ctx.fillStyle='#2e352b';ctx.font=titleFont(u,62);let ty=drawWrapped(ctx,copy.title,m+50*u,215*u,w-m*2-100*u,70*u,2);
  ctx.fillStyle='#5f6d5b';ctx.font=bodyFont(u,30);ty=drawWrapped(ctx,copy.cardBody,m+50*u,ty+35*u,w-m*2-100*u,46*u,Math.min(lineLimit(data),8));
  drawInfoChips(ctx,data,copy,m+50*u,Math.max(ty+34*u,h*.65),w-m*2-100*u,u,{bg:'#dfead7',text:'#526c54'});
  ctx.fillStyle='#6f9a73';ctx.font=bodyFont(u,25,700);drawWrapped(ctx,`“${copy.paw}”`,m+50*u,h-165*u,w-m*2-100*u,34*u,2);
  drawFooter(ctx,m+50*u,h-92*u,w-m*2-100*u,u,'#6d7668');
}

function drawXhs(ctx,w,h,data,copy,u){
  ctx.fillStyle=gradientFill(ctx,0,0,w,h,[[0,'#fff8ef'],[1,'#ffe3d4']]);ctx.fillRect(0,0,w,h);
  drawPaw(ctx,w*.86,h*.12,150*u,'#d95c45',.1);const m=64*u,cw=w-m*2;
  drawBadge(ctx,state.lang==='zh'?'请帮忙留意':'PLEASE TAKE A LOOK',m,72*u,'#fff','#d95c45',u);
  ctx.fillStyle='rgba(246,194,139,.65)';roundedRect(ctx,m-10*u,h*.2,cw*.78,62*u,10*u,'rgba(246,194,139,.65)');
  ctx.fillStyle='#2f211b';ctx.font=titleFont(u,72,900);let ty=drawWrapped(ctx,copy.title,m,h*.17,cw,82*u,2);
  roundedRect(ctx,m,ty+36*u,cw,h*.31,28*u,'rgba(255,255,255,.86)');ctx.fillStyle='#5e493e';ctx.font=bodyFont(u,30);const bodyY=drawWrapped(ctx,copy.cardBody,m+36*u,ty+76*u,cw-72*u,45*u,Math.min(lineLimit(data),6));
  drawInfoChips(ctx,data,copy,m+36*u,Math.max(bodyY+24*u,ty+h*.23),cw-72*u,u,{bg:'#fff0e5',text:'#7c4b37'});
  roundedRect(ctx,m,h-180*u,cw,82*u,26*u,'#e9825a');ctx.fillStyle='#fff';ctx.font=bodyFont(u,29,800);ctx.textAlign='center';ctx.fillText(state.lang==='zh'?'有线索请联系 · 谢谢转发':'PLEASE DM WITH LEADS · SHARE IF YOU CAN',w/2,h-158*u);ctx.textAlign='left';
  drawFooter(ctx,m,h-70*u,cw,u,'#8d6959','center');
}

function drawPolaroid(ctx,w,h,data,copy,u){
  ctx.fillStyle='#f4e6d8';ctx.fillRect(0,0,w,h);const wide=w/h>1.25;const m=wide?80*u:75*u;const px=m,py=m,pw=w-m*2,ph=h-m*2;
  ctx.save();ctx.translate(w/2,h/2);ctx.rotate(.012);ctx.translate(-w/2,-h/2);ctx.shadowColor='rgba(58,42,34,.18)';ctx.shadowBlur=30*u;ctx.shadowOffsetY=16*u;roundedRect(ctx,px,py,pw,ph,8*u,'#fff');ctx.shadowColor='transparent';
  const imageX=px+38*u,imageY=py+38*u,imageW=wide?pw*.42:pw-76*u,imageH=wide?ph-76*u:ph*.43;
  ctx.fillStyle=gradientFill(ctx,imageX,imageY,imageX+imageW,imageY+imageH,[[0,'#f9cfad'],[1,'#e7efd8']]);ctx.fillRect(imageX,imageY,imageW,imageH);
  drawAnimalDoodle(ctx,imageX+imageW/2,imageY+imageH*.52,Math.min(imageW,imageH)*.56);drawHeart(ctx,imageX+imageW*.72,imageY+imageH*.25,45*u,'#e9825a',.8);
  const tx=wide?imageX+imageW+55*u:px+58*u,tw=wide?pw-imageW-131*u:pw-116*u,ty=wide?py+75*u:imageY+imageH+45*u;
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,wide?56:53);let next=drawWrapped(ctx,copy.title,tx,ty,tw,62*u,2);
  ctx.fillStyle='#6f584c';ctx.font=bodyFont(u,wide?27:28);next=drawWrapped(ctx,copy.cardBody,tx,next+22*u,tw,42*u,wide?7:5);
  ctx.fillStyle='#c96a48';ctx.font=bodyFont(u,24,700);drawWrapped(ctx,copy.paw,tx,Math.max(next+25*u,wide?py+ph*.68:py+ph-130*u),tw,33*u,2);
  drawFooter(ctx,tx,py+ph-55*u,tw,u,'#8d7568');ctx.restore();
}

function drawAlert(ctx,w,h,data,copy,u){
  ctx.fillStyle='#fff1d8';ctx.fillRect(0,0,w,h);const m=60*u,cw=w-m*2;
  ctx.fillStyle='#d95c45';ctx.beginPath();ctx.arc(m+48*u,80*u,38*u,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font=titleFont(u,46,900);ctx.textAlign='center';ctx.fillText('!',m+48*u,53*u);ctx.textAlign='left';
  drawBadge(ctx,state.lang==='zh'?'需要帮助':'NEEDS HELP',m+105*u,55*u,'#a74635','#ffe0ca',u);
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,70,900);let ty=drawWrapped(ctx,copy.title,m,160*u,cw,80*u,2);
  roundedRect(ctx,m,ty+38*u,cw,h*.34,30*u,'#fff');ctx.fillStyle='#59443a';ctx.font=bodyFont(u,31);let by=drawWrapped(ctx,copy.cardBody,m+40*u,ty+80*u,cw-80*u,47*u,Math.min(lineLimit(data),6));
  roundedRect(ctx,m+40*u,Math.max(by+25*u,ty+h*.25),cw-80*u,78*u,18*u,'#ffe0ca');ctx.fillStyle='#9c4838';ctx.font=bodyFont(u,27,800);drawWrapped(ctx,`${t('helpLabel')} · ${copy.help}`,m+62*u,Math.max(by+25*u,ty+h*.25)+22*u,cw-124*u,36*u,1);
  drawContact(ctx,copy,m,h-190*u,cw,u,'#d95c45','#fff');ctx.fillStyle='#875c4d';ctx.font=bodyFont(u,23,650);drawWrapped(ctx,copy.paw,m,h-110*u,cw,32*u,2,'center');drawFooter(ctx,m,h-49*u,cw,u,'#806c61','center');
}

function drawCommunity(ctx,w,h,data,copy,u){
  ctx.fillStyle='#f7f0e8';ctx.fillRect(0,0,w,h);const m=62*u,px=m,py=56*u,pw=w-m*2,ph=h-112*u;
  ctx.shadowColor='rgba(58,42,34,.12)';ctx.shadowBlur=24*u;ctx.shadowOffsetY=10*u;roundedRect(ctx,px,py,pw,ph,12*u,'#fff');ctx.shadowColor='transparent';
  ctx.fillStyle='#9dbf9e';ctx.beginPath();ctx.arc(px+80*u,py+15*u,14*u,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(px+pw-80*u,py+15*u,14*u,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#3a2a22';ctx.font=bodyFont(u,25,850);ctx.textAlign='center';ctx.fillText(state.lang==='zh'?'社区流浪动物求助':'COMMUNITY RESCUE NOTICE',w/2,py+55*u);ctx.textAlign='left';
  ctx.strokeStyle='#e9825a';ctx.lineWidth=5*u;ctx.beginPath();ctx.moveTo(px+55*u,py+103*u);ctx.lineTo(px+pw-55*u,py+103*u);ctx.stroke();
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,55);let ty=drawWrapped(ctx,copy.title,px+55*u,py+140*u,pw-110*u,64*u,2,'center');
  ctx.fillStyle='#6d584c';ctx.font=bodyFont(u,28);ty=drawWrapped(ctx,copy.cardBody,px+55*u,ty+25*u,pw-110*u,42*u,Math.min(lineLimit(data),6));
  const tableY=Math.max(ty+25*u,py+ph*.59),rowH=64*u;const rows=[[t('locationLabel'),copy.location],[t('helpLabel'),copy.help],[t('contactLabel'),copy.contact]];
  rows.forEach(([label,value],i)=>{const y=tableY+i*rowH;roundedRect(ctx,px+55*u,y,pw-110*u,rowH-6*u,13*u,i%2?'#fff8ef':'#f2f6ed','#eadfd5',1.5*u);ctx.fillStyle='#876554';ctx.font=bodyFont(u,22,800);ctx.fillText(label,px+77*u,y+18*u);ctx.fillStyle='#3a2a22';ctx.font=bodyFont(u,24,650);ctx.textAlign='right';ctx.fillText(wrapLines(ctx,value,(pw-110*u)*.62,1)[0],px+pw-77*u,y+18*u);ctx.textAlign='left';});
  drawFooter(ctx,px+55*u,py+ph-48*u,pw-110*u,u,'#7a6a5e','center');
}

function drawQuote(ctx,w,h,data,copy,u){
  ctx.fillStyle='#fff8ef';ctx.fillRect(0,0,w,h);drawHeart(ctx,w*.5,h*.14,60*u,'#f4b8a8',.8);drawPaw(ctx,w*.86,h*.78,130*u,'#e9825a',.08);
  const m=90*u,cw=w-m*2;ctx.fillStyle='#e9825a';ctx.font=`900 ${Math.max(28,140*u)}px Georgia, serif`;ctx.globalAlpha=.3;ctx.fillText('“',m,h*.2);ctx.globalAlpha=1;
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,74,850);drawWrapped(ctx,copy.paw,m,h*.31,cw,88*u,3,'center');
  ctx.strokeStyle='#f6c28b';ctx.lineWidth=4*u;ctx.beginPath();ctx.moveTo(w*.35,h*.59);ctx.lineTo(w*.65,h*.59);ctx.stroke();
  ctx.fillStyle='#6d584d';ctx.font=bodyFont(u,29,600);drawWrapped(ctx,`${t('locationLabel')}：${copy.location}\n${t('contactLabel')}：${copy.contact}`,m,h*.65,cw,45*u,4,'center');
  drawFooter(ctx,m,h-72*u,cw,u,'#8a7569','center');
}

function drawCard(canvas, data, copy, templateId, thumbnail = false) {
  if (!canvas || !data || !copy) return;
  const ctx = canvas.getContext('2d'); const w=canvas.width,h=canvas.height,u=Math.min(w,h)/1080;
  ctx.clearRect(0,0,w,h);ctx.save();ctx.textBaseline='top';ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  const drawers={warm:drawWarm,journal:drawJournal,notice:drawNotice,cute:drawCute,green:drawGreen,xhs:drawXhs,polaroid:drawPolaroid,alert:drawAlert,community:drawCommunity,quote:drawQuote};
  drawers[templateId](ctx,w,h,data,copy,u,thumbnail);ctx.restore();
}

function drawMainCard() {
  if (!state.lastData || !state.lastCopy) return;
  const canvas=$('#cardCanvas');const [width,height]=ratioSizes[state.ratio];
  if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
  drawCard(canvas,state.lastData,state.lastCopy,state.template,false);
}

