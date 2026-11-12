const coatReply=(()=>{
  'use strict';
  const looks=[
    {id:'belted-oat',title:'腰带收出腰线',alt:'燕麦色系带大衣的镜前穿搭',tip:'把腰带系在自然腰线附近，宽松的大衣也能穿出清楚的上下比例。'},
    {id:'black-layered',title:'顺色内搭',alt:'黑色长大衣搭深色裙装与鞋袜',tip:'深色内搭、鞋袜和大衣的颜色接近，层次还在，视觉上也更连贯。'},
    {id:'grey-boots',title:'长靴接住衣摆',alt:'灰棕色长大衣搭牛仔裤和黑色长靴',tip:'大衣下摆和靴筒之间留一点牛仔裤的颜色，能让长外套和长靴的层次更分明。'},
  ];
  const image=look=>`assets/coat/${look.id}.jpg`;
  const matches=message=>/^(?:我)?(?:身高)?155(?:cm|厘米)适合穿长?大衣(?:吗)?$/u.test(
    message.normalize('NFKC').toLowerCase().replace(/\s+/gu,'').replace(/[?!。！]+$/u,'')
  );
  function answer(icon){
    const entry=document.createElement('article');
    entry.className='outfit-answer coat-answer';
    entry.tabIndex=-1;
    entry.setAttribute('aria-label','点点的个性化回答');
    const shop='https://s.taobao.com/search?q='+encodeURIComponent('小个子 燕麦色 系带 毛呢中长大衣');
    entry.innerHTML=`<div class="outfit-byline"><span class="diandian-mark" aria-hidden="true"></span>点点</div>
      <div class="outfit-result coat-result">
        <section>
          <div class="coat-heading"><h2>点点说</h2><span class="coat-context">按 155 cm 参考</span></div>
          <p class="coat-lead">当然可以！身高不是决定能否穿长大衣的唯一因素。</p>
          <p>可以结合衣长、肩线、版型和内搭比例选择自己喜欢的效果。下面看看有相似身高经历的用户是怎么穿的。</p>
        </section>
        <section class="coat-section">
          <h3>155cm 左右的她们这样穿</h3>
          <div class="coat-gallery" role="group" aria-label="三张大衣穿搭参考">
            ${looks.map(look=>`<button class="coat-look" type="button" data-chat="coat-look" data-id="${look.id}" aria-label="查看大图：${look.title}" aria-haspopup="dialog" aria-controls="outfitDetail">
              <img src="${image(look)}" alt="${look.alt}">
              <span>${look.title}</span>
            </button>`).join('')}
          </div>
          <p class="coat-source">照片为穿搭示意，人物身高未核实</p>
          <div class="coat-comments">
            <h4>${icon('message')} 评论区 <span>示例</span></h4>
            <ul>
              <li><strong>衣长</strong><span>我会先试过膝一点的，走起来轻松，也能留出一截靴子。</span></li>
              <li><strong>比例</strong><span>敞开穿时我会搭高腰裤，系起来就把腰带提一点。</span></li>
            </ul>
          </div>
        </section>
        <section class="coat-section">
          <h3>想试试这些大衣？</h3>
          <a class="coat-product" href="${shop}" target="_blank" rel="noopener noreferrer" aria-label="去淘宝看看相似款：燕麦色系带中长大衣">
            <img src="${image(looks[0])}" alt="">
            <span class="coat-product-copy"><small>款式参考</small><strong>燕麦色系带中长大衣</strong><span>选购时对照衣长和肩宽</span><b>去淘宝看相似款 <span aria-hidden="true">↗</span></b></span>
          </a>
        </section>
      </div>`;
    return entry;
  }
  function detail(id){
    const look=looks.find(item=>item.id===id);
    if(!look)return '';
    return `<article class="outfit-detail">
      <div class="outfit-detail-copy"><h2>${look.title}</h2><p>${look.tip}</p></div>
      <img src="${image(look)}" alt="${look.alt}">
      <p class="outfit-source">穿搭参考图</p>
    </article>`;
  }
  return {matches,answer,detail};
})();
