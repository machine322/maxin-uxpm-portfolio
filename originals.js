const sources={
  vip:{title:'VIP 功能页｜原版项目章节',intro:'VIP 体验提升专项的原版章节，保留研究、策略、交互页面和测前 / 测后数据。',label:'VIP 功能页数据体验提升专项',pages:'原总集第 3–19 页 · 17 页原版内容',file:'assets/vip-original.pdf',page:1},
  voc:{title:'VOC 体验洞察｜VoiceChanger 原版章节',intro:'VOC 体验报告、问题分析、竞品研究与优化方案的原版章节。',label:'VOC 体验洞察 / VoiceChanger',pages:'原总集第 20–37 页 · 18 页原版内容',file:'assets/voc-original.pdf',page:1},
  cashback:{title:'模拟返现｜独立案例全稿',intro:'独立产品 Owner 项目案例，保留原始策略、数据、流程与复盘内容。',label:'BTCC 模拟返现项目集',pages:'24 页 · 独立项目原稿',file:'assets/cashback-full-original.pdf',page:1},
  btcc:{title:'BTCC 模拟体验｜原版流程章节',intro:'总集中模拟策略、升级流程、任务中心及后台配置对应的原版章节。',label:'BTCC 模拟返现交互材料',pages:'原总集第 81–88 页 · 8 页原版内容',file:'assets/btcc-sim-original.pdf',page:1},
  contract:{title:'合约交易页优化｜原版交互方案',intro:'原版长页，覆盖合约交易主流程、输入规则、挂单边界和状态反馈。可纵向滚动，放大查看交互标注。',label:'合约交易主流程改动示意与交互说明',pages:'原总集第 89 页 · 1 页长幅方案',file:'assets/contract-original.pdf',page:1},
  'tp-sl':{title:'止盈止损公式优化｜原版交互方案',intro:'原版方案页，包含问题背景、竞品口径、旧 / 新公式对照、多空场景及交互标注。',label:'止盈止损涨跌幅公式优化',pages:'原总集第 90 页 · 1 页原版方案',file:'assets/tp-sl-original.pdf',page:1},
  resume:{title:'马昕简历｜结果口径参考',intro:'完整简历 PDF。VOC 项目的日付费率结果按简历中项目经历记录呈现。',label:'马昕简历（0726）',pages:'完整原稿',file:'assets/resume-original.pdf',page:1}
};
const select=document.querySelector('#sourceSelect');
Object.entries(sources).forEach(([key,item])=>{const option=document.createElement('option');option.value=key;option.textContent=item.title;select.append(option)});
function loadSource(key){const item=sources[key]||sources.vip;select.value=key in sources?key:'vip';document.title=`${item.title} — MAXIN`;document.querySelector('#sourceTitle').textContent=item.title;document.querySelector('#sourceIntro').textContent=item.intro;document.querySelector('#sourceLabel').textContent=item.label;document.querySelector('#sourcePages').textContent=item.pages;const fileUrl=`${item.file}#page=${item.page}&view=FitH`;document.querySelector('#pdfFrame').src=fileUrl;document.querySelector('#openSource').href=fileUrl;document.querySelector('#downloadSource').href=item.file;history.replaceState(null,'',`?doc=${select.value}`)}
const initial=new URLSearchParams(location.search).get('doc')||'vip';loadSource(initial);select.addEventListener('change',()=>loadSource(select.value));
