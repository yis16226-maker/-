const STORAGE_KEY = "cc-deskpet-v1";
const RECENT_LIMIT = 34;

const lines = {
  idle: [
    "选个时间，我们慢慢来。", "我准备好了，你呢？", "今天先背哪一段？", "不用一口气全会，先开个头。",
    "书翻开了吗？我没有偷看。", "你负责背，我负责坐着。", "开始之前，可以先深呼吸一下。", "先挑最想逃避的那一小段。",
    "我今天看起来很会陪读。", "别等状态，状态可能在路上堵车。", "十分钟也算认真开始。", "先把第一页拿下。",
    "你看书，我看你有没有看书。", "今天也允许慢慢进入状态。", "背不动就先读两遍。", "我不催，计时器会很诚实。",
    "挑一档吧，我已经坐稳了。", "先做一点，往往就不难开始了。", "可以从最短的知识点下手。", "准备好了就按开始。"
  ],
  start: [
    "开工。我在这里，不乱跑。", "第一分钟，只管进入状态。", "先顺一遍，不要求立刻背熟。", "计时开始，别急着追求完美。",
    "把注意力放到眼前这一句。", "很好，已经不是‘还没开始’了。", "先读懂，再记住。", "这轮只做这一件事。",
    "我替你守着时间。", "从现在开始，慢慢往前拱。", "先把手机的其他念头放一边。", "这一轮，我们不赶路。",
    "开头最难的几秒已经过去了。", "不用兴奋，稳定就很好。", "来，把第一句念顺。", "先完成，再评价状态。"
  ],
  early: [
    "刚刚开始，别急着看还剩多久。", "这一句多重复一次也没关系。", "你在记，它会慢慢留下来。", "别看我，我也不会这题。",
    "我检查过了，时间正在好好走。", "注意力跑了就牵回来，不批评它。", "先背眼前这两行。", "卡住的地方做个小记号。",
    "读出声也算在推进。", "你继续，我假装自己很懂。", "不要和整本书打架，只管这一页。", "记不住不是失败，是还没重复够。",
    "刚才那句，再顺一遍？", "慢一点，脑子正在搬东西。", "背书不是瞬间下载，正常。", "先抓关键词，再连成句子。",
    "我没有新任务给你，放心。", "这一小段解决掉再抬头。", "你已经在做了，这很具体。", "有点无聊，说明我们选对事了。"
  ],
  middle: [
    "已经走了一截，保持这个速度。", "中间这段最容易飘，回来一下。", "别换任务，先把这一轮走完。", "如果累了，就把语速放慢。",
    "背出来一点，就遮住一点。", "现在适合检查刚才记住了什么。", "没有完全记住，也比刚开始多。", "你专心的时候，我就安静待着。",
    "稳住，别突然给自己加难度。", "可以用自己的话复述一遍。", "这一轮不求全会，求有进展。", "脑子说无聊，我说再来一句。",
    "你没停，进度就没有停。", "试试只看关键词往下说。", "刚才卡住的地方，现在再碰一次。", "先别算总量，算眼前这段。",
    "我替你发了一会儿呆，你继续。", "背到这里，已经有点像样了。", "注意力刚才是不是溜了一圈？", "回来就行，不用写检讨。"
  ],
  halfway: [
    "过半了。前面那一半已经归你。", "已经过半，先别换阵地。", "后半程开始，继续稳稳地来。", "一半不是提醒你累，是提醒你快了。",
    "很好，最容易放弃的位置过去了。", "再坚持一小段，就会看见终点。", "过半纪念：允许戳我一下。", "现在回想一下开头还能不能说出来。",
    "剩下的时间，比刚才走过的更短。", "我宣布：这一轮已经很有存在感了。", "半程到达，不庆祝太久。", "你刚才做的那些，都没有白做。"
  ],
  late: [
    "快到尾声了，把这一段收好。", "最后这点时间，别急着开新坑。", "适合做一次完整复述。", "把易错的两个地方再看一眼。",
    "快结束不等于现在就结束。", "再稳几分钟，这轮就完整了。", "不要冲刺到乱，保持原来的节奏。", "可以开始检查遗漏了。",
    "终点露头了，你先别提前下班。", "把最后一句说顺，我们就收工。", "剩下这点，够你再记一个知识点。", "快了。眼睛留在书上。",
    "最后一遍，尽量不看答案。", "这会儿最容易频繁看时间。别看。", "我知道你想结束，再等它自己结束。", "收尾也算学习的一部分。"
  ],
  paused: [
    "暂停了。处理完事情就回来。", "时间停住了，我也先不动。", "短暂停一下可以，别悄悄散会。", "回来时按继续，我还记得进度。",
    "喝口水，然后回来。", "别在暂停里另开一个世界。", "暂停不是结束，我替你看着。", "伸个懒腰，但别把书合上。",
    "需要缓一下就缓一下。", "等你。只是别让我等到明天。", "休息几十秒，脑子也许会重新上线。", "事情处理完，继续刚才那一句。"
  ],
  poke: [
    "摸完了，继续。", "你戳你的，我发我的呆。", "嗯？我还在。", "这算一次短暂的课间。",
    "手感是方的，心是软的。", "收到一戳。", "我刚站稳，你又来了。", "你是不是背到无聊了？",
    "可以戳，但不能搬走我。", "我没有答案，只有陪伴。", "刚才那下，我记在小本子上了。", "你摸鱼摸得很准确。",
    "我只是方，不是按钮。大概。", "戳完记得回到上一句。", "好，互动结束，耗时很短。", "我配合得是不是很专业？",
    "不要试图把我按进桌面。", "这一戳可以算醒脑。", "我替书本承受了你的无聊。", "我没有生气，只是更方了。",
    "你背会一段，我就算陪得有用。", "我在监督，也在被你骚扰。", "戳到了。现在轮到知识点了。", "我建议下一戳放在五分钟后。",
    "我动了。你也该动动脑子了。", "很短的一次逃跑，准许。", "别担心，我不会弹出长篇大道理。", "这里没有奖励广告，只有我。",
    "你刚才那句背到哪儿了？", "我装作没发现你走神。", "这一下之后，重新看书。", "今日份方块触感正常。",
    "我怀疑你只是想看我晃。", "好啦，我已经表演过了。", "再看一眼关键词就回得去。", "戳我不扣分，但也不加分。",
    "我懂，无聊的时候手会自己动。", "欢迎回来，停留别超过三秒。", "你看，我连分散注意力都很简短。", "这只 CC 暂时没有别的节目。"
  ],
  rapid: [
    "连续戳？你的知识点在旁边看着呢。", "好啦好啦，这一段背完再找我。", "我先躲一下，你去看书。", "检测到注意力正在绕路。",
    "再戳，我就要假装很忙了。", "你的手很勤快，脑子也跟上。", "互动额度短暂用完。", "我没有更多节目，真的。",
    "别把专注工具玩成新游戏。", "你已经确认三次了，我确实会动。", "我先趴会儿，你背会儿。", "这次戳完，我们各自工作。",
    "CC 进入省话模式。", "你看起来需要的是换一段背。", "戳得很好，下次先隔几分钟。", "我决定把舞台还给课本。"
  ],
  complete: [
    "这一轮完成。认真算数。", "时间到，你真的坐完了这一轮。", "收工一下，刚才背的别急着丢。", "完成。去喝口水吧。",
    "这轮归档，进度不是幻觉。", "你做到了，虽然过程可能有点无聊。", "结束啦。最后回忆一个关键词。", "很好，这次不是‘准备学习’，是学完一轮。",
    "我蹦两下，你休息一下。", "完成一轮，比计划十轮更实在。", "先别急着下一轮，脑子需要透气。", "今天的记录又多了一笔。",
    "辛苦了。允许暂时不看书。", "这一段以后会感谢刚才的重复。", "计时结束，努力没有消失。", "休息时就好好休息，不用内疚。",
    "你把无聊坐穿了一小块。", "CC 认证：这一轮有效。", "完成。伸个懒腰，看看远处。", "下一轮的事，休息完再决定。"
  ]
};

const animations = ["anim-squish", "anim-hop", "anim-wiggle", "anim-tilt-left", "anim-tilt-right"];
const state = loadState();
let tickHandle = null;
let speechHandle = null;
let toastHandle = null;
let pokeTimes = [];
let isAnimating = false;
let installPrompt = null;

const elements = {
  roundCount: document.querySelector("#roundCount"),
  minuteCount: document.querySelector("#minuteCount"),
  resetToday: document.querySelector("#resetToday"),
  installApp: document.querySelector("#installApp"),
  speechBubble: document.querySelector("#speechBubble"),
  petButton: document.querySelector("#petButton"),
  cc: document.querySelector("#cc"),
  timeOptions: document.querySelector("#timeOptions"),
  timeChips: [...document.querySelectorAll(".time-chip")],
  timerDisplay: document.querySelector("#timerDisplay"),
  progressFill: document.querySelector("#progressFill"),
  resetTimer: document.querySelector("#resetTimer"),
  toggleTimer: document.querySelector("#toggleTimer"),
  toast: document.querySelector("#toast")
};

function defaultState() {
  return {
    selectedMinutes: 20,
    totalSeconds: 20 * 60,
    remainingSeconds: 20 * 60,
    status: "idle",
    endAt: null,
    recentLines: [],
    today: { date: localDateKey(), rounds: 0, minutes: 0 }
  };
}

function loadState() {
  const fallback = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return fallback;
    const merged = { ...fallback, ...saved, today: { ...fallback.today, ...saved.today } };
    if (merged.today.date !== localDateKey()) merged.today = fallback.today;
    if (merged.status === "running" && merged.endAt) {
      merged.remainingSeconds = Math.max(0, Math.ceil((merged.endAt - Date.now()) / 1000));
      if (merged.remainingSeconds === 0) merged.status = "complete-pending";
    }
    return merged;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function localDateKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function ensureToday() {
  if (state.today.date !== localDateKey()) {
    state.today = { date: localDateKey(), rounds: 0, minutes: 0 };
  }
}

function chooseLine(groupNames) {
  const pool = groupNames.flatMap((name) => lines[name] || []);
  const available = pool.filter((line) => !state.recentLines.includes(line));
  const source = available.length ? available : pool;
  const selected = source[Math.floor(Math.random() * source.length)];
  state.recentLines = [selected, ...state.recentLines.filter((line) => line !== selected)].slice(0, RECENT_LIMIT);
  saveState();
  return selected;
}

function say(groupNames, duration = 4200) {
  clearTimeout(speechHandle);
  elements.speechBubble.classList.add("is-changing");
  window.setTimeout(() => {
    elements.speechBubble.textContent = chooseLine(groupNames);
    elements.speechBubble.classList.remove("is-changing");
  }, 150);
  speechHandle = window.setTimeout(() => {
    if (state.status === "running") {
      elements.speechBubble.classList.add("is-changing");
      window.setTimeout(() => {
        elements.speechBubble.textContent = "我在。你继续。";
        elements.speechBubble.classList.remove("is-changing");
      }, 150);
    }
  }, duration);
}

function animate(name) {
  if (isAnimating) return;
  isAnimating = true;
  elements.cc.classList.remove(...animations, "anim-hide", "anim-celebrate");
  void elements.cc.offsetWidth;
  elements.cc.classList.add(name);
  window.setTimeout(() => {
    elements.cc.classList.remove(name);
    isAnimating = false;
  }, name === "anim-celebrate" ? 920 : 680);
}

function pokePet() {
  const now = Date.now();
  pokeTimes = pokeTimes.filter((time) => now - time < 6500);
  pokeTimes.push(now);
  const rapid = pokeTimes.length >= 4;
  say(rapid ? ["rapid"] : currentPokeGroups(), rapid ? 4600 : 3400);
  animate(rapid ? "anim-hide" : animations[Math.floor(Math.random() * animations.length)]);
}

function currentPokeGroups() {
  if (state.status !== "running") return ["poke", "idle"];
  const ratio = state.remainingSeconds / state.totalSeconds;
  if (ratio <= 0.18) return ["poke", "late"];
  if (ratio <= 0.55) return ["poke", "middle"];
  return ["poke", "early"];
}

function startTimer() {
  if (state.remainingSeconds <= 0) resetTimer(false);
  state.status = "running";
  state.endAt = Date.now() + state.remainingSeconds * 1000;
  say(["start"]);
  animate("anim-hop");
  saveState();
  startTicking();
  render();
}

function pauseTimer() {
  syncRemaining();
  state.status = "paused";
  state.endAt = null;
  clearInterval(tickHandle);
  tickHandle = null;
  say(["paused"]);
  saveState();
  render();
}

function resetTimer(withMessage = true) {
  clearInterval(tickHandle);
  tickHandle = null;
  state.status = "idle";
  state.endAt = null;
  state.totalSeconds = state.selectedMinutes * 60;
  state.remainingSeconds = state.totalSeconds;
  if (withMessage) say(["idle"]);
  saveState();
  render();
}

function completeTimer() {
  clearInterval(tickHandle);
  tickHandle = null;
  ensureToday();
  state.status = "complete";
  state.endAt = null;
  state.remainingSeconds = 0;
  state.today.rounds += 1;
  state.today.minutes += state.selectedMinutes;
  say(["complete"], 6500);
  animate("anim-celebrate");
  saveState();
  render();
}

function syncRemaining() {
  if (state.status !== "running" || !state.endAt) return;
  state.remainingSeconds = Math.max(0, Math.ceil((state.endAt - Date.now()) / 1000));
}

function startTicking() {
  clearInterval(tickHandle);
  tickHandle = window.setInterval(() => {
    const previous = state.remainingSeconds;
    syncRemaining();
    if (state.remainingSeconds <= 0) {
      completeTimer();
      return;
    }
    const crossedHalfway = previous / state.totalSeconds > 0.5 && state.remainingSeconds / state.totalSeconds <= 0.5;
    if (crossedHalfway) say(["halfway"], 5200);
    saveState();
    render();
  }, 500);
}

function selectMinutes(minutes) {
  if (state.status === "running") return;
  state.selectedMinutes = minutes;
  state.totalSeconds = minutes * 60;
  state.remainingSeconds = state.totalSeconds;
  state.status = "idle";
  say(["idle"]);
  saveState();
  render();
}

function render() {
  ensureToday();
  const minutes = Math.floor(state.remainingSeconds / 60);
  const seconds = state.remainingSeconds % 60;
  elements.timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  elements.timerDisplay.setAttribute("aria-label", `剩余 ${minutes} 分 ${seconds} 秒`);
  const completedRatio = state.totalSeconds ? 1 - state.remainingSeconds / state.totalSeconds : 0;
  elements.progressFill.style.width = `${Math.max(0, Math.min(1, completedRatio)) * 100}%`;
  elements.roundCount.textContent = state.today.rounds;
  elements.minuteCount.textContent = state.today.minutes;
  elements.toggleTimer.textContent = state.status === "running" ? "暂停" : state.status === "paused" ? "继续" : state.status === "complete" ? "再来一轮" : "开始";
  elements.timeChips.forEach((chip) => {
    const minutesValue = Number(chip.dataset.minutes);
    chip.classList.toggle("is-selected", minutesValue === state.selectedMinutes);
    chip.disabled = state.status === "running";
  });
  document.title = state.status === "running" ? `${elements.timerDisplay.textContent} · CC 陪你背书` : "CC 陪你背书";
}

function showToast(message) {
  clearTimeout(toastHandle);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastHandle = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

elements.petButton.addEventListener("click", pokePet);
elements.toggleTimer.addEventListener("click", () => {
  if (state.status === "running") pauseTimer();
  else startTimer();
});
elements.resetTimer.addEventListener("click", () => resetTimer(true));
elements.timeOptions.addEventListener("click", (event) => {
  const chip = event.target.closest(".time-chip");
  if (chip) selectMinutes(Number(chip.dataset.minutes));
});
elements.resetToday.addEventListener("click", () => {
  ensureToday();
  if (state.today.rounds === 0 && state.today.minutes === 0) {
    showToast("今天的记录还是空的");
    return;
  }
  state.today.rounds = 0;
  state.today.minutes = 0;
  saveState();
  render();
  showToast("今日记录已清空");
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  elements.installApp.hidden = false;
});

elements.installApp.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  elements.installApp.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  elements.installApp.hidden = true;
  showToast("CC 已经住进手机里了");
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && state.status === "running") {
    syncRemaining();
    if (state.remainingSeconds <= 0) completeTimer();
    else render();
  }
});

if (state.status === "complete-pending") completeTimer();
else if (state.status === "running") startTicking();
render();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
}
