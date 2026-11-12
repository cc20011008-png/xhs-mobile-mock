const outfitSearch = (() => {
  'use strict';

  const sample = {
    label: '红色棒球帽',
    url: 'assets/outfits/street-denim.png',
    tags: ['棒球帽', '红色', '弯帽檐', '材质待确认'],
  };
  const references = [
    {
      id: 'street-denim', style: '街头休闲风', combination: '黑皮衣＋浅蓝牛仔裤',
      palette: '红＋黑＋浅蓝', shoes: '拼色运动鞋', scenes: ['日常出街'],
      image: sample.url, alt: '红帽搭黑色皮衣和浅蓝牛仔裤的街拍拼图',
      title: '孙乐言出游穿搭｜红帽皮衣随性氛围感拉满✨',
      body: `漫步街头的松弛穿搭拿捏了
亮眼红棒球帽+廓形黑皮衣
复古撞色随性又酷飒
棕带编织托特包增加休闲感
拼色跑鞋弱化皮衣厚重感
整套自在不刻意，旅行氛围感直接拉满💯`,
      hashtags: '#孙乐言 #明星私服 #早秋皮衣穿搭 #松弛感穿搭 #出游穿搭',
      bytes: 1401386, digest: 'dfb570d3b71349752534759c6df9a1986439aaf154414093e669b0df4daabf2f',
    },
    {
      id: 'street-white', style: '街头休闲风', combination: '黑皮衣＋白色长裙',
      palette: '红＋黑＋白', scenes: ['日常出街', '周末出游'],
      image: 'assets/outfits/street-white.png', alt: '咖啡店里戴红帽、穿黑色皮衣和白色下装的穿搭',
      title: '高智感穿搭｜皮衣搭配小思路',
      body: `很久都没更新高智感穿搭系列了
差点忘了自己是职场穿搭博主[坏笑R]

搭皮衣，其实我最想配的是短裙，很容易时髦的公式
但是！ 冬天能穿短裙的地区真的不太多，特别是通勤
光腿神器永远不在我的考虑范围内（我宁可冻死）
还有小黑丝搭配在短裙里面也不错，很法式，就是腿型得是筷子那样穿才好看（我不达标）

为了保暖，我选择了白色长裤，走松弛感路线🧸

划重点👏👏：
1. 皮衣要有肩形的西装形，我觉得比那种掉肩的皮衣更有质感，更显贵。最好稍款肩膀一点点🤏
2. 上身既然比较正，那么下身就是阔腿裤，整体综合一下正式感，里面随便叠穿一下灰色毛衣马甲也可以综合一下
3. 这套我觉得棒球帽是点睛之笔，因为正肩型的所有外套都和棒球帽都很搭
4. 加一些亮色单品，我加了红色帽子和鞋子，甚至还有红色帆布包
5. 耳环首饰都换成银色简约款，我这里是银色耳圈`,
      hashtags: '#高智感穿搭 #秋冬穿搭 #皮衣 #经典的红黑配色 #松弛氛围感 #基础款穿搭 #长期主义 #cleanﬁt #极简穿搭 #外套分享',
      bytes: 1051490, digest: 'e1e3eb2b5eed4140c2402be160b3f3ac2e0548555d60cbad16ef27b033c27cf3',
    },
    {
      id: 'american-retro', style: '美式复古风', combination: '藏蓝毛衣＋灰色阔腿裤',
      palette: '红＋藏蓝＋灰', shoes: '复古拼色板鞋', scenes: ['周末出游'],
      image: 'assets/outfits/american-retro.png', alt: '公园长椅上的红帽、藏蓝毛衣与灰色阔腿裤搭配',
      title: '藏蓝毛衣＋灰色阔腿裤',
      body: '藏蓝和灰色铺出低饱和的底色，露出一点白色内搭，再用红帽和棕包加暖色。',
      hashtags: '#藏蓝宽松毛衣 #灰色阔腿裤 #棕色托特包',
      bytes: 2102978, digest: '8f531f628d593523b3f9e73cfebac5320fac2b3729b1fc396787db47ec6b6412',
    },
  ];
  const noteOutfits = {
    2: {
      title: '蓝白条纹衬衫的通勤穿搭',
      text: '图中用宽松的蓝白条纹衬衫搭深色长裤和白鞋。想穿得利落，可以挽两折袖口、把衬衫前摆略微塞进裤腰，再用棕色肩包添一点暖色。',
      tags: ['蓝白条纹衬衫', '深色长裤', '白鞋', '棕色肩包'],
    },
    6: {
      title: '唱片店里的棕色系穿搭',
      text: '图中是深棕色上衣、卡其色宽松长裤和米色帆布包。用深上浅下分出层次，再让帆布包呼应裤子的暖色，适合周末逛街。',
      tags: ['深棕色上衣', '卡其色长裤', '米色帆布包'],
    },
  };

  function identifyNote(id) {
    return noteOutfits[id] ?? {
      title: '这张图暂无穿搭参考',
      text: '可以试试通勤或唱片店笔记的图片，也可以上传一张单品图找穿搭灵感。',
    };
  }

  async function matchesSample(file) {
    const candidate = references.find(reference => reference.bytes === file.size);
    if (!candidate || !globalThis.crypto?.subtle) return false;
    const hash = await crypto.subtle.digest('SHA-256', await file.arrayBuffer());
    const hex = Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('');
    return candidate.digest === hex;
  }

  function suggestions(known) {
    return known
      ? ['红色棒球帽怎么搭配？', '红色棒球帽配什么颜色的衣服？']
      : ['这件单品怎么搭配？', '这件单品配什么颜色好看？'];
  }

  function groupBy(list, field) {
    const groups = new Map();
    for (const reference of list) {
      const title = reference[field];
      if (!title) continue;
      if (!groups.has(title)) groups.set(title, { title, references: [] });
      groups.get(title).references.push(reference);
    }
    return [...groups.values()];
  }

  function search(message, { knownImage, hasImage, previous }) {
    const named = /红(?:色)?(?:的)?(?:棒球)?帽|红色.{0,4}棒球帽|棒球帽.{0,4}红色/.test(message);
    const palette = /配色|肤色|什么颜色|什么色|哪些颜色|颜色.{0,4}(?:搭|配)/.test(message);
    const shoes = /什么鞋|哪种鞋|鞋子怎么搭|怎么配鞋/.test(message);
    const proportion = /身高|\d{3}\s*(?:cm|厘米)|比例|腰线|显高/.test(message);
    const style = message.match(/街头休闲|美式复古/)?.[0];
    const scene = message.match(/日常出街|周末出游|周末|通勤|上班|出街/)?.[0];
    const asksOutfit = /搭配|怎么(?:搭|穿)|怎么配|配什么|配哪|穿搭|搭什么/.test(message);
    const changesItem = /换(?:一件|成|个|条)|(?:阔腿裤|半裙|连衣裙|衬衫|风衣|包包|蓝色棒球帽|黑色棒球帽|白色棒球帽)怎么搭/.test(message);
    const follows = previous === 'sample' && !hasImage && !changesItem;
    const known = named || (!changesItem && (knownImage || follows));

    if (!(named || asksOutfit || palette || shoes || (knownImage && !message) ||
      (follows && (proportion || style || scene)))) return null;
    if (!known) {
      const needsDescription = /这件|这个|这条|这顶|这双/.test(message) || !message;
      return {
        context: 'unmatched',
        text: needsDescription
          ? '告诉我单品的颜色和品类，我再帮你找搭配。这个演示可以试试「红色棒球帽」。'
          : '这个演示收录了红色棒球帽的搭配参考。可以用「穿搭灵感」里的示例体验选图和搜索。',
      };
    }

    const sceneName = /周末/.test(scene) ? '周末出游' : /出街/.test(scene) ? '日常出街' : null;
    let list = references.filter(reference =>
      (!sceneName || reference.scenes.includes(sceneName)) && (!style || reference.style.includes(style)));
    if (proportion) list = list.filter(reference => reference.id !== 'street-white');
    const field = palette ? 'palette' : shoes ? 'shoes' : 'style';
    const groups = groupBy(list, field);
    const title = palette ? '红帽的配色参考' : shoes ? '红帽搭什么鞋' : proportion ? '红帽搭配的比例参考' : '红色棒球帽怎么搭';
    const text = scene && !sceneName
      ? '现有图片以休闲穿搭为主。下面这些搭法适合用来比较红帽和衣服的配色。'
      : proportion ? '先看上衣下摆和裤腿的比例，再对照自己常穿的裤长。'
      : palette ? '让红帽做亮点，可以从图片里的这几套配色入手。'
      : shoes ? '可以选鞋面有呼应色的款式，再用裤子把帽子和鞋连起来。'
      : sceneName ? `这几套可以参考${sceneName}时的搭配。`
      : '用红帽提亮整套穿搭，从衣柜里的基础款就能开始。';
    return { context: 'sample', title, text, groups, followUp: groups.length > 0 && !scene && !proportion && !style };
  }

  return { sample, references, matchesSample, suggestions, search, identifyNote };
})();
