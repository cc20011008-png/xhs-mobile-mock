(function app(){
  'use strict';
  const icons={
    search:'<circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4 4"/>',
    heart:'<path d="M20.8 8.9c0 4.4-8.8 9.5-8.8 9.5s-8.8-5.1-8.8-9.5a4.6 4.6 0 0 1 8.8-2 4.6 4.6 0 0 1 8.8 2Z"/>',
    star:'<path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.6-4.4 6.3-.9z"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    back:'<path d="m15 5-7 7 7 7"/>',
    close:'<path d="m5 5 14 14M19 5 5 19"/>',
    more:'<g fill="currentColor" stroke="none"><circle cx="5" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="19" cy="12" r="1.75"/></g>',
    camera:'<path d="M3 8a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="13" r="3.4"/>',
    addCircle:'<circle cx="12" cy="12" r="9.4"/><path d="M12 7.5v9m-4.5-4.5h9"/>',
    send:'<path d="M12 18V6m-5 5 5-5 5 5"/>',
    message:'<path d="M20 12a8 8 0 0 1-8 8 8.2 8.2 0 0 1-3.2-.6L4 21l1.4-4.2A8 8 0 1 1 20 12Z"/><path d="M8 12h.1m3.9 0h.1m3.9 0h.1"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M3 12v5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5"/>',
    dislike:'<circle cx="12" cy="12" r="9.5"/><path d="M6.5 9.5q1.5 2 3 0m5 0q1.5 2 3 0M8 15h8"/>',
    warning:'<path d="M10.4 4.1a1.8 1.8 0 0 1 3.2 0l7.6 13.1a1.9 1.9 0 0 1-1.7 2.8h-15a1.9 1.9 0 0 1-1.7-2.8Z"/><path d="M12 9v4m0 3h.01"/>',
    bookmark:'<path d="M20 11V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16l7-4m6-4v8m-4-4h8"/>',
    scan:'<path d="M8 3H6a3 3 0 0 0-3 3v2m13-5h2a3 3 0 0 1 3 3v2M3 16v2a3 3 0 0 0 3 3h2m13-5v2a3 3 0 0 1-3 3h-2m-1-6 3 3"/><circle cx="11.5" cy="11.5" r="4.5"/>'
  };
  const icon=(name)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
  const notes=[
    {id:1, title:'在深圳看了一场不用赶时间的海',author:'野餐的阿岚',count:1268,tag:'出行',local:true,tile:0,ratio:1.04,color:'#d9e9dd',alt:'午后的深圳海滩与棕榈树',body:'从地铁出来慢慢走，海边比市区凉快一点。四点以后再到，找棵棕榈树坐一会儿，听浪就好。回去前记得把沙滩上的垃圾一起带走。'},
    {id:2, title:'初秋通勤｜宽松衬衫也能穿得很利落',author:'阿栗穿什么',count:486,tag:'穿搭',tile:1,ratio:.79,color:'#edd8c8',alt:'穿浅色条纹衬衫与深色长裤的街头行人',body:'这件衬衫故意买大了一点，袖口挽两折，搭直筒裤就有精神。鞋包都挑暖棕色，早晨来不及想搭配也不会出错。'},
    {id:3, title:'把书桌挪到窗边后，下班更想回家了',author:'松弛研究所',count:723,tag:'家居',tile:3,ratio:.89,color:'#eadfcd',alt:'窗边有台灯、绿植和书的木质书桌',body:'没换桌子，只是把它转向窗边。常用的书竖着放，桌面只留一盏灯和手边那本笔记。下午光线落下来，连回邮件都没那么烦。'},
    {id:4, title:'周末下午的抹茶拿铁和草莓吐司',author:'慢点喝咖啡',count:315,tag:'美食',local:true,tile:2,ratio:1.05,color:'#dce7cb',alt:'玻璃杯里的冰抹茶和草莓吐司',body:'加了冰的抹茶偏苦，和草莓奶油刚好配。靠窗的位置最适合独自坐一会儿，吃完也不急着走。'},
    {id:5, title:'十几块的花，把周一过成了周末',author:'花瓶里的星期天',count:172,tag:'生活',tile:4,ratio:1.15,color:'#f3dce3',alt:'窗边玻璃花瓶里的粉色花束',body:'回家把叶子剪掉几片，花枝斜切再插瓶。没有专门布置，放在每天起床第一眼就会看到的位置。'},
    {id:6, title:'逛唱片店，听点不在播放列表里的歌',author:'小周在听歌',count:94,tag:'生活',local:true,tile:5,ratio:.84,color:'#e9d8c8',alt:'暖色灯光下浏览唱片的人',body:'在架子前翻了半天，最后带走一张没有听过的旧唱片。比起算法推荐，这种随手遇见的惊喜很难复制。'}
  ];
  const allNotes=[...notes,...outfitSearch.references];
  const notesById=new Map(allNotes.map(note=>[String(note.id),note]));
  const channels=['关注','发现','深圳'],cats=['推荐','穿搭','美食','家居','出行','生活'];
  const key='daily-collection-mock-v1';
  function read(){try{return JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{return {};}}
  const saved=read();
  const state={page:'home',channel:'发现',cat:'推荐',query:'', savedTab:'favorites',
    likes:new Set(saved.likes||[]),favorites:new Set(saved.favorites||[]),
    watchLater:new Set(saved.watchLater||[]),disliked:new Set(saved.disliked||[]),
    reports:saved.reports||{},
    follows:new Set(saved.follows||['野餐的阿岚','松弛研究所']),draft:saved.draft||{title:'',body:''}};
  const $=(s)=>document.querySelector(s);
  const top=$('#top'), content=$('#content'), scroll=$('#scroll'), bottom=$('#bottom');
  const sheet=$('#sheet'), sheetBody=$('#sheetBody'), closeSheet=$('#closeSheet');
  const imageMenu = $('#imageMenu'), imageMenuActions = $('#imageMenuActions'), imageReport = $('#imageReport');
  const saveImage = $('#saveImage'), watchLaterButton = $('#watchLater');
  const outfitDetail = $('#outfitDetail'), outfitDetailBody = $('#outfitDetailBody'), closeOutfitDetail = $('#closeOutfitDetail');
  const esc=(s)=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;");
  closeSheet.innerHTML=icon('back');
  let toastTimer, priorFocus, lastOpener, imageNote, dirty=false;
  function persist(){
    try {
      localStorage.setItem(key, JSON.stringify({
        likes:[...state.likes], favorites:[...state.favorites], follows:[...state.follows], draft:state.draft,
        watchLater:[...state.watchLater], disliked:[...state.disliked], reports:state.reports,
      }));
      return true;
    } catch { return false; }
  }
  function toast(msg){
    const feedToast = $('#toast'), detailToast = $('#sheetToast'), outfitToast = $('#outfitDetailToast');
    feedToast.hidden = detailToast.hidden = outfitToast.hidden = true;
    const target = outfitDetail.open ? outfitToast : sheet.open ? detailToast : feedToast;
    target.textContent = msg;
    target.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => target.hidden = true, 2100);
  }
  function avatar(n){return `<span class="avatar" aria-hidden="true"${n.color?` style="--avatar:${n.color}"`:''}>${esc(n.author?.[0]??'穿')}</span>`;}
  function photo(n){
    if(n.image)return `<img class="photo note-cover" src="${esc(n.image)}" alt="${esc(n.alt)}">`;
    return `<div class="photo" role="img" aria-label="${esc(n.alt)}" style="--x:${n.tile%3*50}%;--y:${Math.floor(n.tile/3)*100}%;--ratio:${n.ratio}"></div>`;
  }
  const noteImage = n => n.image ?? noteImageUrls[n.id];
  function likeText(n){
    const liked=state.likes.has(n.id);
    return n.count==null?(liked?'已点赞':'点赞'):n.count+Number(liked);
  }
  function likeButton(n){
    const liked=state.likes.has(n.id);
    return `<button class="like" data-act="like" data-id="${n.id}" aria-pressed="${liked}" aria-label="${liked?'取消点赞':'点赞'}：${esc(n.title)}">${icon('heart')}<span>${likeText(n)}</span></button>`;
  }
  function card(n){
    return `<article class="card"><button class="card-open" data-act="detail" data-id="${n.id}" aria-label="查看笔记：${esc(n.title)}">${photo(n)}<h2 class="note-title">${esc(n.title)}</h2></button><div class="note-meta"><div class="author">${avatar(n)}<span>${esc(n.author??n.style)}</span></div>${likeButton(n)}</div></article>`;
  }
  function empty(type,title,copy,action,label){
    return `<div class="empty">${icon(type)}<h2>${title}</h2><p>${copy}</p><button data-act="${action}">${label}</button></div>`;
  }
  function feed(list){
    const cols=[[],[]], heights=[0,0];
    list.forEach(n=>{const col=heights[0]<=heights[1]?0:1;cols[col].push(card(n));heights[col]+=1/(n.ratio??.78)+.38;});
    return `<div class="feed">${cols.map(c=>`<div class="feed-col">${c.join('')}</div>`).join('')}</div>`;
  }
  function render(reset=false,focus=null){
    const catOffset=top.querySelector('.categories')?.scrollLeft||0;
    const home=state.page==='home';
    top.innerHTML=home?`<div class="topline"><button class="icon-btn" data-act="diandian" aria-label="点点" aria-haspopup="dialog"><span class="diandian-mark" aria-hidden="true"></span></button><nav class="channels" aria-label="首页频道">${channels.map(c=>`<button class="channel" data-act="channel" data-val="${c}" aria-pressed="${state.channel===c}">${c}</button>`).join('')}</nav><button class="icon-btn" data-act="search" aria-label="搜索笔记">${icon('search')}</button></div>
      <nav class="categories" aria-label="笔记分类">${cats.map(c=>`<button class="category" data-act="category" data-val="${c}" aria-pressed="${state.cat===c}">${c}</button>`).join('')}</nav>`:
      `<div class="topline"><span></span><h1 class="view-title">${{saved:'我的收藏',messages:'消息',profile:'我'}[state.page]}</h1><span></span></div>`;
    if(home){
      top.querySelector('.categories').scrollLeft=catOffset;
      const q=state.query.toLowerCase();
      const list=notes.filter(n=>(q||!state.disliked.has(n.id))&&(state.channel!=='关注'||state.follows.has(n.author))&&(state.channel!=='深圳'||n.local)&&(state.cat==='推荐'||state.cat===n.tag)&&(!q||[n.title,n.author,n.tag,n.body].some(v=>v.toLowerCase().includes(q))));
      const searchRow=state.query?`<div class="result-row" role="status"><span>「${esc(state.query)}」 · ${list.length} 条笔记</span><button data-act="clear">清除</button></div>`:'';
      content.innerHTML=searchRow+(list.length?feed(list):empty('search',q?'没找到相关笔记':'暂时没有笔记',q?'试试更简短的关键词，或者清除搜索。':'切换频道或分类，看看别的笔记。','reset-home','查看推荐'));
    }else if(state.page==='saved'){
      const later = state.savedTab === 'later';
      const list = allNotes.filter(n => (later ? state.watchLater : state.favorites).has(n.id));
      const tabs = `<nav class="saved-tabs" aria-label="收藏分类">
        <button data-act="saved-tab" data-val="favorites" aria-pressed="${!later}">收藏</button>
        <button data-act="saved-tab" data-val="later" aria-pressed="${later}">稍后再看</button>
      </nav>`;
      content.innerHTML = tabs + (list.length ? feed(list) : later
        ? empty('bookmark','还没有待看的笔记','在笔记详情中点击图片，就可以添加到稍后再看。','home','去发现')
        : empty('star','还没有收藏','在笔记里点收藏，就能在这里找到。','home','去发现'));
    }else if(state.page==='messages'){
      content.innerHTML=empty('message','还没有新消息','有新互动时，会在这里看到。','home','返回首页');
    }else{
      content.innerHTML=`<section class="profile"><div class="avatar" aria-hidden="true">日</div><h2>日常记录者</h2><p>浏览器本地体验账号</p><button data-act="saved">收藏 · ${state.favorites.size} 篇</button><button data-act="draft">我的草稿 · ${state.draft.title||state.draft.body?'1':'0'} 篇</button></section>`;
    }
    bottom.innerHTML=[['home','首页'],['saved','收藏'],['draft','发布'],['messages','消息'],['profile','我']].map(([p,label])=>p==='draft'
      ?`<button class="publish" data-act="draft" aria-label="写笔记">${icon('plus')}</button>`
      :`<button class="nav-btn" data-act="${p}" ${state.page===p?'aria-current="page"':''}>${label}</button>`).join('');
    if(reset)scroll.scrollTop=0;
    if(focus) document.querySelector(focus)?.focus({preventScroll:true});
  }
  function fit(dialog=sheet){
    const r=$('.app').getBoundingClientRect();
    const viewport=window.visualViewport;
    const compact=dialog===diandian&&window.matchMedia('(max-width: 480px)').matches&&viewport?.scale===1;
    const top=compact?Math.max(r.top,viewport.offsetTop):r.top;
    const height=compact?Math.max(0,Math.min(r.bottom,viewport.offsetTop+viewport.height)-top):r.height;
    for(const [name,val] of Object.entries({left:r.left,top,width:r.width,height}))dialog.style.setProperty(`--${name}`,`${val}px`);
  }
  function open(title,html){
    priorFocus=document.activeElement;
    $('#sheetTitle').textContent=title;sheetBody.innerHTML=html;
    fit();sheet.showModal();sheetBody.scrollTop=0;
    (sheetBody.querySelector('input')||closeSheet).focus();
  }
  function noteDetail(n){
    const follow=n.author?`<button class="follow" data-act="follow" data-id="${n.id}" aria-pressed="${state.follows.has(n.author)}">${state.follows.has(n.author)?'已关注':'关注'}</button>`:'';
    return `<div class="detail-author">${avatar(n)}<span>${esc(n.author??n.style)}</span>${follow}</div>
      <button class="detail-photo${n.image?' detail-photo-original':''}" type="button" data-act="image-menu" data-id="${n.id}" aria-haspopup="dialog" aria-controls="imageMenu" aria-label="打开图片操作：${esc(n.alt)}"><img src="${esc(noteImage(n))}" alt="${esc(n.alt)}"></button>
      <div class="detail-copy"><h2>${esc(n.title)}</h2><p class="note-body">${esc(n.body)}</p><p class="hashtag">${esc(n.hashtags??`#${n.tag} #生活灵感`)}</p></div><div class="detail-actions">${likeButton(n)}<button data-act="favorite" data-id="${n.id}" aria-pressed="${state.favorites.has(n.id)}">${icon('star')}<span>${state.favorites.has(n.id)?'已收藏':'收藏'}</span></button></div>`;
  }
  function detail(n){
    lastOpener=n.id;
    open('笔记详情',noteDetail(n));
  }
  function showSearch(){
    open('搜索笔记',`<form class="form" id="searchForm"><div class="search-box"><label>关键词<input name="query" type="search" maxlength="60" placeholder="搜生活灵感" value="${esc(state.query)}"></label><button type="submit" class="cta">搜索</button></div><p>试试这些关键词</p><div class="suggestions">${['抹茶','深圳','书桌','穿搭'].map(s=>`<button type="button" data-act="suggest" data-val="${s}">${s}</button>`).join('')}</div></form>`);
  }
  function showDraft(){
    open('写笔记',`<form class="form" id="draftForm"><label>标题<input name="title" maxlength="60" placeholder="给今天起个标题" value="${esc(state.draft.title)}"></label><label>正文<textarea name="body" maxlength="1200" placeholder="记下一点生活里的小事">${esc(state.draft.body)}</textarea></label><button class="cta" type="submit">保存草稿</button><p>草稿仅保存在此浏览器，原型不支持公开发布。</p><p id="draftStatus" role="status"></p></form>`);
  }
  function search(q){
    state.query=q.trim();state.page='home';state.channel='发现';state.cat='推荐';
    sheet.close();render(true,'[data-act="search"]');
  }
  function go(page, focus){state.page=page;render(true,focus);}
  function updateLike(n){
    document.querySelectorAll(`[data-act="like"][data-id="${n.id}"]`).forEach(btn=>{
      const liked=state.likes.has(n.id);
      btn.setAttribute('aria-pressed',liked);
      btn.setAttribute('aria-label',`${liked?'取消点赞':'点赞'}：${n.title}`);
      btn.querySelector('span').textContent=likeText(n);
    });
  }
  function toggle(set,value){if(set.has(value))set.delete(value);else set.add(value);}

  function showImageReport(show){
    imageMenuActions.hidden = show;
    imageReport.hidden = !show;
    imageMenu.scrollTop = 0;
  }
  function openImageMenu(note, opener){
    imageNote = note;
    saveImage.href = noteImage(note);
    saveImage.download = `${note.title.replaceAll('|', ' ').replaceAll('｜', ' ')}.${note.image?'png':'jpg'}`;
    watchLaterButton.querySelector('span').textContent = state.watchLater.has(note.id) ? '取消稍后再看' : '稍后再看';
    showImageReport(false);
    fit(imageMenu);
    opener.focus({preventScroll:true});
    imageMenu.showModal();
  }
  imageMenu.querySelectorAll('[data-icon]').forEach(el => el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)));
  $('#closeImageMenu').addEventListener('click', () => imageMenu.close());
  imageMenu.addEventListener('cancel', event => {
    if (imageReport.hidden) return;
    event.preventDefault();
    showImageReport(false);
    imageMenu.querySelector('[data-image-action="report"]').focus();
  });
  imageMenu.addEventListener('click', event => {
    if (event.target === imageMenu) {
      const {left, top, right, bottom} = imageMenu.getBoundingClientRect();
      if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) imageMenu.close();
      return;
    }
    const button = event.target.closest('[data-image-action]');
    if (!button) return;
    switch (button.dataset.imageAction) {
      case 'dislike':
        state.disliked.add(imageNote.id);
        persist();
        imageMenu.close();
        if(imageNote.image){
          toast('已标记为不喜欢');
          break;
        }
        if (state.page === 'home' && !state.query) {
          dirty = true;
          sheet.close();
        }
        toast('已从推荐中隐藏');
        break;
      case 'report':
        showImageReport(true);
        $('#backToImageActions').focus();
        break;
      case 'back':
        showImageReport(false);
        imageMenu.querySelector('[data-image-action="report"]').focus();
        break;
      case 'record-report':
        state.reports[imageNote.id] = button.textContent;
        imageMenu.close();
        toast(persist() ? '已在本地记录举报' : '举报已暂存在本页');
        break;
      case 'later':
        toggle(state.watchLater, imageNote.id);
        persist();
        if (state.page === 'saved' && state.savedTab === 'later') dirty = true;
        imageMenu.close();
        toast(state.watchLater.has(imageNote.id) ? '已添加到收藏里的「稍后再看」' : '已从稍后再看移除');
        break;
      case 'search':
        imageMenu.close();
        showImageOutfit(imageNote);
        break;
    }
  });

  document.addEventListener('click',e=>{
    const b=e.target.closest('button[data-act]');if(!b)return;
    const {act,id,val}=b.dataset,n=notesById.get(id);
    switch(act){
      case 'home':case 'saved':case 'messages':case 'profile':go(act,`#bottom [data-act="${act}"]`);break;
      case 'reset-home':state.query='';state.channel='发现';state.cat='推荐';go('home','[data-act="channel"][data-val="发现"]');break;
      case 'channel':state.channel=val;state.cat='推荐';state.query='';if(sheet.open)sheet.close();go('home',`.channel[data-val="${val}"]`);break;
      case 'category':state.cat=val;render(true,`.category[data-val="${val}"]`);break;
      case 'diandian':fit(diandian);diandian.showModal();break;
      case 'search':showSearch();break;
      case 'suggest':search(val);break;
      case 'clear':state.query='';render(true,'[data-act="search"]');break;
      case 'detail':detail(n);break;
      case 'image-menu':openImageMenu(n,b);break;
      case 'saved-tab':state.savedTab=val;render(true,`[data-act="saved-tab"][data-val="${val}"]`);break;
      case 'close':sheet.close();break;
      case 'like':toggle(state.likes,n.id);updateLike(n);persist();break;
      case 'favorite':toggle(state.favorites,n.id);b.setAttribute('aria-pressed',state.favorites.has(n.id));b.querySelector('span').textContent=state.favorites.has(n.id)?'已收藏':'收藏';dirty=state.page==='saved';persist();break;
      case 'follow':toggle(state.follows,n.author);b.setAttribute('aria-pressed',state.follows.has(n.author));b.textContent=state.follows.has(n.author)?'已关注':'关注';dirty=state.page==='home'&&state.channel==='关注';persist();break;
      case 'draft':showDraft();break;
    }
  });
  sheet.addEventListener('close',()=>{
    if(sheet.open)return;
    if(dirty){render();dirty=false;}
    const target=priorFocus?.isConnected?priorFocus:lastOpener?document.querySelector(`[data-act="detail"][data-id="${lastOpener}"]`):null;
    if(target)target.focus({preventScroll:true});
    else if(lastOpener)scroll.focus({preventScroll:true});
    lastOpener=null;priorFocus=null;
  });
  sheet.addEventListener('submit',e=>{
    e.preventDefault();
    const form=e.target, data=new FormData(form);
    if(form.id==='searchForm'){search(String(data.get('query')||''));return;}
    if(form.id==='draftForm'){
      const title=String(data.get('title')||'').trim(),body=String(data.get('body')||'').trim();
      if(!title&&!body){$('#draftStatus').textContent='先写一点内容，再保存草稿。';form.elements.title.focus();return;}
      state.draft={title,body};
      const ok=persist();
      sheet.close();if(state.page==='profile'){render(false,'[data-act="draft"]');}
      toast(ok?'草稿已保存到此浏览器':'草稿已暂存在本页');
    }
  });
  const diandian=$('#diandian'), chatLog=$('#chatLog'), chatText=$('#chatText'), chatImages=$('#chatImages');
  const chatAttachments=$('#chatAttachments'), chatSend=$('#chatSend'), chatStatus=$('#chatStatus');
  const notePicker=$('#chatNotePicker'), noteList=$('#chatNoteList'), chatOptions=$('#chatOptions');
  const outfitEntry=$('#outfitEntry'), outfitSuggestions=$('#outfitSuggestions');
  const noteButton=diandian.querySelector('[aria-controls="chatNotePicker"]');
  const optionsButton=diandian.querySelector('[aria-controls="chatOptions"]');
  const outfitButton=diandian.querySelector('[aria-controls="outfitEntry"]');
  const imageUrls=new Set();
  let attachments=[];
  let outfitContext=null;

  diandian.prepend($('.status').cloneNode(true));
  diandian.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});
  noteList.innerHTML=notes.map(n=>`<button class="chat-note" type="button" data-chat="attach-note" data-id="${n.id}">${photo(n)}<span><strong>${esc(n.title)}</strong><small>${esc(n.author)}</small></span></button>`).join('');

  function attachmentContent(attachment){
    if(attachment.example)return `<span class="outfit-cap-thumb"><img src="${esc(attachment.url)}" alt="${esc(attachment.label)}"></span>`;
    if(attachment.url)return `<img src="${esc(attachment.url)}" alt="${esc(attachment.label)}">`;
    return `<div class="chat-note">${photo(attachment.note)}<span><strong>${esc(attachment.label)}</strong><small>${esc(attachment.note.author)}</small></span></div>`;
  }
  function updateChatSend(){
    chatSend.hidden=!chatText.value.trim()&&!attachments.length;
    chatSend.disabled=attachments.some(attachment=>attachment.pending);
  }
  function renderOutfitSuggestions(){
    const images=attachments.filter(attachment=>attachment.url);
    const recognized=images.some(attachment=>attachment.known);
    outfitSuggestions.hidden=!images.length;
    outfitSuggestions.innerHTML=images.length?outfitSearch.suggestions(recognized).map(question=>
      `<button type="button" data-chat="outfit-question" data-value="${esc(question)}">${esc(question)} <span aria-hidden="true">↗</span></button>`).join(''):'';
  }
  function renderChatDraft(){
    updateChatSend();
    chatAttachments.hidden=!attachments.length;
    chatAttachments.innerHTML=attachments.map((attachment,i)=>`<li>${attachmentContent(attachment)}<button class="icon-btn" type="button" data-chat="remove" data-id="${i}" aria-label="移除${esc(attachment.label)}">${icon('close')}</button></li>`).join('');
    noteList.querySelectorAll('button').forEach(button=>{
      button.disabled=attachments.some(attachment=>attachment.note?.id===Number(button.dataset.id));
    });
    renderOutfitSuggestions();
  }
  function showChatPanel(panel,button,show){
    panel.hidden=!show;
    button.setAttribute('aria-expanded',String(show));
  }
  function releaseImage(url){
    URL.revokeObjectURL(url);
    imageUrls.delete(url);
  }
  function focusQuestion(question){
    chatText.value=question;
    updateChatSend();
    chatText.focus({preventScroll:true});
  }
  function outfitCard(reference){
    return `<button type="button" class="outfit-card ${esc(reference.id)}" data-chat="outfit-detail" data-id="${esc(reference.id)}" aria-label="查看搭配笔记：${esc(reference.combination)}">
      <span class="outfit-card-photo"><img src="${esc(reference.image)}" alt="${esc(reference.alt)}"></span>
      <span class="outfit-card-label">${esc(reference.combination)}<span aria-hidden="true">↗</span></span>
    </button>`;
  }
  function outfitAnswer(reply){
    const entry=document.createElement('article');
    entry.className='outfit-answer';
    entry.tabIndex=-1;
    entry.setAttribute('aria-label','点点的搭配回复');
    const groups=reply.groups?.map(group=>`<section class="outfit-group">
      <h3>${esc(group.title)}</h3>
      <div class="outfit-cards${group.references.length>1?' outfit-cards-overlap':''}">${group.references.map(outfitCard).join('')}</div>
    </section>`).join('');
    const tags = reply.tags ?? (groups ? outfitSearch.sample.tags : []);
    const followUp=reply.followUp?`<div class="outfit-followup"><p>你想按哪个场合继续找？</p>
      <button type="button" data-chat="outfit-question" data-value="日常出街">日常出街</button>
      <button type="button" data-chat="outfit-question" data-value="周末出游">周末出游</button>
    </div>`:'';
    entry.innerHTML=`<div class="outfit-byline"><span class="diandian-mark" aria-hidden="true"></span>点点</div>
      <div class="outfit-result">
        ${reply.title?`<h2>${esc(reply.title)}</h2>`:''}
        <p>${esc(reply.text)}</p>
        ${tags.length ? `<ul class="outfit-tags" aria-label="单品标签">${tags.map(tag=>`<li>${esc(tag)}</li>`).join('')}</ul>` : ''}
        ${groups ? `${groups}<p class="outfit-source">搭配参考来自你提供的图片</p>` : ''}
        ${reply.groups&&!groups?'<p>这组条件暂时没有匹配的图片。可以换个场合或风格再试。</p>':''}
        ${followUp}
      </div>`;
    chatLog.append(entry);
    return entry;
  }
  function showImageOutfit(note){
    if(outfitDetail.open)outfitDetail.close();
    fit(diandian);
    if(!diandian.open)diandian.showModal();
    const entry = document.createElement('article');
    entry.className = 'chat-message outfit-query image-outfit-query';
    entry.setAttribute('aria-label', '你选择的笔记图片');
    entry.innerHTML = `<img src="${esc(noteImage(note))}" alt="${esc(note.alt)}"><p>搜图中内容</p>`;
    chatLog.append(entry);
    const reply = note.image
      ? outfitSearch.search('',{knownImage:true,hasImage:true})
      : outfitSearch.identifyNote(note.id);
    outfitContext = reply.context ?? null;
    const answer = outfitAnswer(reply);
    chatStatus.textContent = '本地识图示例';
    answer.focus({preventScroll:true});
    chatLog.scrollTop = entry.offsetTop - 12;
  }
  closeOutfitDetail.innerHTML = icon('back');
  closeOutfitDetail.addEventListener('click', () => outfitDetail.close());
  function openOutfitDetail(reference, opener){
    showChatDetail('笔记详情',noteDetail(reference),opener);
  }
  function showChatDetail(title,html,opener){
    $('#outfitDetailTitle').textContent=title;
    outfitDetailBody.innerHTML=html;
    $('#outfitDetailToast').hidden = true;
    fit(outfitDetail);
    opener.focus({preventScroll:true});
    outfitDetail.showModal();
    outfitDetailBody.scrollTop = 0;
  }
  function resetChat(){
    if((chatLog.childElementCount||chatText.value||attachments.length)&&!window.confirm('开启新对话会清空当前消息和草稿。继续吗？'))return;
    imageUrls.forEach(releaseImage);
    chatLog.replaceChildren();
    chatText.value='';
    attachments=[];
    outfitContext=null;
    showChatPanel(outfitEntry,outfitButton,false);
    renderChatDraft();
    chatStatus.textContent='本地原型';
  }
  diandian.addEventListener('click',e=>{
    const button=e.target.closest('button[data-chat]');
    if(!button){
      if(!e.target.closest('.chat-options'))showChatPanel(chatOptions,optionsButton,false);
      return;
    }
    const {chat,id}=button.dataset;
    if(chat!=='more')showChatPanel(chatOptions,optionsButton,false);
    switch(chat){
      case 'close':diandian.close();break;
      case 'more':showChatPanel(chatOptions,optionsButton,chatOptions.hidden);break;
      case 'reset':resetChat();optionsButton.focus();break;
      case 'prompt':
        showChatPanel(notePicker,noteButton,false);
        showChatPanel(outfitEntry,outfitButton,outfitEntry.hidden);
        break;
      case 'outfit-upload':
        chatImages.click();
        break;
      case 'outfit-sample':
        if(!attachments.some(attachment=>attachment.example)){
          const {url,label}=outfitSearch.sample;
          attachments.push({url,label,example:true,known:true});
        }
        showChatPanel(outfitEntry,outfitButton,false);
        renderChatDraft();
        outfitSuggestions.querySelector('button').focus({preventScroll:true});
        chatStatus.textContent='已添加红色棒球帽示例';
        break;
      case 'outfit-question':focusQuestion(button.dataset.value);break;
      case 'outfit-detail':
        openOutfitDetail(notesById.get(id),button);
        break;
      case 'coat-look':
        showChatDetail('大衣穿搭参考',coatReply.detail(id),button);
        break;
      case 'images':chatImages.click();break;
      case 'notes':
        showChatPanel(outfitEntry,outfitButton,false);
        showChatPanel(notePicker,noteButton,notePicker.hidden);
        if(notePicker.hidden)noteButton.focus();
        else (noteList.querySelector('button:not(:disabled)')||notePicker.querySelector('button')).focus();
        break;
      case 'attach-note': {
        const note=notes.find(n=>n.id===Number(id));
        attachments.push({note,label:note.title});
        renderChatDraft();
        showChatPanel(notePicker,noteButton,false);
        noteButton.focus();
        break;
      }
      case 'remove': {
        const [removed]=attachments.splice(Number(id),1);
        if(imageUrls.has(removed.url))releaseImage(removed.url);
        renderChatDraft();
        (chatAttachments.querySelector(`[data-id="${id}"]`)||chatAttachments.querySelector('button')||chatText).focus();
        break;
      }
    }
  });
  chatText.addEventListener('input',updateChatSend);
  chatImages.addEventListener('change',()=>{
    const files=[...chatImages.files];
    const images=files.filter(file=>file.type.startsWith('image/'));
    for(const file of images){
      const url=URL.createObjectURL(file);
      imageUrls.add(url);
      const attachment={url,label:file.name,pending:true};
      attachments.push(attachment);
      outfitSearch.matchesSample(file).catch(()=>false).then(known=>{
        attachment.pending=false;
        attachment.known=known;
        if(attachments.includes(attachment)){
          updateChatSend();
          if(known)renderOutfitSuggestions();
        }
      });
    }
    if(files.length!==images.length)chatStatus.textContent='请选择图片文件';
    else if(images.length)chatStatus.textContent='图片已添加';
    if(images.length)showChatPanel(outfitEntry,outfitButton,false);
    chatImages.value='';
    renderChatDraft();
  });
  $('#chatComposer').addEventListener('submit',e=>{
    e.preventDefault();
    const message=chatText.value.trim();
    if(chatSend.disabled||(!message&&!attachments.length))return;
    const personalized=coatReply.matches(message);
    const reply=personalized?null:outfitSearch.search(message,{
      knownImage:attachments.some(attachment=>attachment.known),
      hasImage:attachments.some(attachment=>attachment.url),
      previous:outfitContext,
    });
    const entry=document.createElement('article');
    entry.className=reply?'chat-message outfit-query':'chat-message';
    entry.setAttribute('aria-label','你发送的消息');
    entry.innerHTML=`${attachments.map(attachmentContent).join('')}${message?`<p>${esc(message)}</p>`:''}`;
    chatLog.append(entry);
    chatText.value='';
    attachments=[];
    renderChatDraft();
    showChatPanel(notePicker,noteButton,false);
    showChatPanel(outfitEntry,outfitButton,false);
    chatStatus.textContent='本地原型';
    if(personalized||reply){
      outfitContext=reply?.context??null;
      const answer=personalized?coatReply.answer(icon):outfitAnswer(reply);
      if(personalized)chatLog.append(answer);
      answer.focus({preventScroll:true});
      chatLog.scrollTop=entry.offsetTop-12;
    }else{
      if(entry.querySelector('img'))outfitContext=null;
      chatText.focus({preventScroll:true});
      chatLog.scrollTop=chatLog.scrollHeight;
    }
  });
  diandian.addEventListener('cancel',e=>{
    if(chatOptions.hidden&&notePicker.hidden&&outfitEntry.hidden)return;
    e.preventDefault();
    if(!chatOptions.hidden){showChatPanel(chatOptions,optionsButton,false);optionsButton.focus();}
    else if(!notePicker.hidden){showChatPanel(notePicker,noteButton,false);noteButton.focus();}
    else{showChatPanel(outfitEntry,outfitButton,false);outfitButton.focus();}
  });
  diandian.addEventListener('close',()=>{
    showChatPanel(notePicker,noteButton,false);
    showChatPanel(chatOptions,optionsButton,false);
    showChatPanel(outfitEntry,outfitButton,false);
  });
  function fitOpenDialogs(){
    if(sheet.open)fit();
    if(imageMenu.open)fit(imageMenu);
    if(diandian.open)fit(diandian);
    if(outfitDetail.open)fit(outfitDetail);
  }
  window.addEventListener('resize',fitOpenDialogs);
  window.addEventListener('scroll',fitOpenDialogs,{passive:true});
  window.visualViewport?.addEventListener('resize',fitOpenDialogs);
  window.visualViewport?.addEventListener('scroll',fitOpenDialogs);
  render();
})();
