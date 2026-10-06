(function (global) {
  'use strict';
  const ui = {
    zh: {
      pageTitle: 'IROVA — Olive 系列与产品方向',
      skip: '跳到产品', navCollection: 'OLIVE 系列', navCatalog: '全部产品', navDirection: '发展方向', navSite: '官网 ↗', language: '选择语言',
      heroEyebrow: 'COLOR WORLD 01 · OLIVE / オリーブ',
      heroTitle: '从一种颜色，\n连接整个日常。',
      heroCopy: '从你选择的设备颜色开始，让イロチャン走进手机配件、穿搭、出行与居家。每件小物，都属于同一个 Olive 世界。',
      explore: '探索完整系列', seeDirection: '看看发展方向',
      statObjects: '款产品设计', statCategories: '个生活分类', statPhases: '个发展阶段',
      concept: '产品概念系列 · 未来开发方向',
      bridgeTitle: '一个能打出来的符号，\n慢慢长成可以带在身边的世界。',
      bridgeCopy: 'ʕ•ᴥ•ʔ 是共同的识别。Olive 是连接它们的颜色。从手掌里的小物，到穿在身上、带出门、放进家里的日常。',
      catalogEyebrow: 'THE COMPLETE COLLECTION', catalogTitle: '从小物，到整个生活。',
      catalogCopy: '按生活场景探索 32 款设计，也看看每件产品在这个系列里的位置。',
      categoryFilter: '按类别筛选', all: '全部', searchLabel: '搜索产品', searchPlaceholder: '搜索名称，例如：手机壳、包、マグ…', searchClear: '清空搜索',
      phaseLabel: '开发阶段', allPhases: '所有开发阶段', result: '{shown} / {total} 款设计',
      viewDesign: '查看设计', directionLabel: '设计方向', phaseShort: '阶段',
      noResults: '暂时没有找到这件小物。', noResultsCopy: '试试另一种名称，或回到完整系列。', reset: '查看全部产品',
      roadmapEyebrow: 'A DIRECTION TO GROW', roadmapTitle: '让这个系列，\n一步一步长大。',
      roadmapCopy: '从品牌识别开始，形成同色搭配，再延展到更完整的生活场景。这是 IROVA 的产品发展建议。',
      roadmapNote: '阶段表示建议的拓展顺序，不代表已经打样或确定上市时间。', phaseAction: '探索这 {count} 款方向',
      close: '关闭详情', prev: '上一款', next: '下一款', modalEyebrow: 'OLIVE · 产品设计提案',
      modalRole: '它在系列里的作用', modalStage: '建议的开发阶段', modalRelated: '一起构成你的日常', modalCategory: '继续看同类产品',
      modalNote: '当前图片为设计概念效果；材质、规格与上市计划以实际开发为准。',
      futureEyebrow: 'ONE COLOUR IS JUST THE BEGINNING', futureTitle: '下一种颜色，\n也可以拥有完整的日常。',
      futureCopy: '以 Olive 建立共同的产品语言，让不同色彩各自长成一个世界。', otherColors: '后续色彩方向',
      backSite: '回到 IROVA 官网', shop: '探索 IROVA Shop', footerNote: 'OLIVE / オリーブ · DESIGN DIRECTION',
      top: '回到页面顶部', captionTote: '随身的一整套', captionDevices: '从设备色开始', captionWear: '把颜色穿出去', captionLiving: '留在每个日常',
    },
    ja: {
      pageTitle: 'IROVA — Olive コレクションと商品展開',
      skip: '商品へ移動', navCollection: 'OLIVE', navCatalog: 'すべてのデザイン', navDirection: 'これからの展開', navSite: '公式サイト ↗', language: '言語を選ぶ',
      heroEyebrow: 'COLOR WORLD 01 · OLIVE / オリーブ',
      heroTitle: 'ひとつの色から、\n毎日をつなぐ。',
      heroCopy: '自分で選んだデバイスの色から。イロチャンと一緒に、スマホ小物、ウェア、外出、暮らしまで、ひとつのOliveの世界へ。',
      explore: 'コレクションを見る', seeDirection: 'これからの展開を見る',
      statObjects: 'のデザイン', statCategories: 'つのカテゴリー', statPhases: 'つの展開段階', concept: 'コンセプトコレクション · 今後の展開案',
      bridgeTitle: '入力できる小さな記号から、\n持ち歩けるひとつの世界へ。',
      bridgeCopy: '共通のサインは ʕ•ᴥ•ʔ。つなぐ色はOlive。手のひらの小物から、身につけるもの、持ち出すもの、家で使うものへ。',
      catalogEyebrow: 'THE COMPLETE COLLECTION', catalogTitle: '小物から、暮らし全体へ。',
      catalogCopy: '32点のデザインを生活シーンから探しながら、それぞれの役割を見つけてください。',
      categoryFilter: 'カテゴリーで絞り込む', all: 'すべて', searchLabel: '商品を検索', searchPlaceholder: '名前で検索：スマホ、バッグ、マグ…', searchClear: '検索を消す',
      phaseLabel: '展開段階', allPhases: 'すべての展開段階', result: '{shown} / {total} 点のデザイン',
      viewDesign: 'デザインを見る', directionLabel: 'デザインの方向', phaseShort: '段階',
      noResults: 'この小物は見つかりませんでした。', noResultsCopy: '別の名前で探すか、すべてのデザインをご覧ください。', reset: 'すべてのデザインを見る',
      roadmapEyebrow: 'A DIRECTION TO GROW', roadmapTitle: 'この世界を、\n少しずつ広げていく。',
      roadmapCopy: 'ブランドのサインから、同色のコーデへ。そして暮らしのシーン全体へ。IROVAの商品展開の提案です。',
      roadmapNote: '段階は展開順序の提案です。試作済み、または発売時期の決定を示すものではありません。', phaseAction: 'この {count} 点の方向を見る',
      close: '詳細を閉じる', prev: '前のデザイン', next: '次のデザイン', modalEyebrow: 'OLIVE · デザイン提案',
      modalRole: 'シリーズの中での役割', modalStage: '展開段階の提案', modalRelated: '毎日を一緒につくるもの', modalCategory: '同じカテゴリーを見る',
      modalNote: '画像はデザインのコンセプトです。素材、仕様、発売計画は実際の開発に合わせて決定します。',
      futureEyebrow: 'ONE COLOUR IS JUST THE BEGINNING', futureTitle: '次の色にも、\nひとつの暮らしを。',
      futureCopy: 'Oliveから共通の商品言語をつくり、色ごとにひとつの世界へ広げていきます。', otherColors: '今後の色の方向',
      backSite: 'IROVA公式サイトへ', shop: 'IROVA Shopを見る', footerNote: 'OLIVE / オリーブ · DESIGN DIRECTION',
      top: 'ページの先頭へ', captionTote: '持ち歩くひとつの世界', captionDevices: 'デバイスの色から', captionWear: '好きな色を着る', captionLiving: '毎日のそばに',
    },
    en: {
      pageTitle: 'IROVA — Olive Collection & Product Direction',
      skip: 'Skip to products', navCollection: 'OLIVE', navCatalog: 'All designs', navDirection: 'Future direction', navSite: 'Official site ↗', language: 'Choose language',
      heroEyebrow: 'COLOR WORLD 01 · OLIVE / オリーブ',
      heroTitle: 'One colour.\nA connected everyday.',
      heroCopy: 'Begin with the device colour you chose. Follow イロチャン from phone accessories to outfits, days out and life at home. Every object belongs to one Olive world.',
      explore: 'Explore the collection', seeDirection: 'See the future direction',
      statObjects: 'product concepts', statCategories: 'everyday categories', statPhases: 'development phases', concept: 'Concept collection · Future product direction',
      bridgeTitle: 'A small symbol you can type.\nA whole world you can carry.',
      bridgeCopy: 'ʕ•ᴥ•ʔ is the shared sign. Olive is the colour that connects it all: things in your hand, things you wear, take out and bring home.',
      catalogEyebrow: 'THE COMPLETE COLLECTION', catalogTitle: 'Small objects. A bigger everyday.',
      catalogCopy: 'Explore 32 designs by everyday setting, and discover the role of each object in the collection.',
      categoryFilter: 'Filter by category', all: 'All', searchLabel: 'Search products', searchPlaceholder: 'Search a name: case, bag, mug…', searchClear: 'Clear search',
      phaseLabel: 'Development phase', allPhases: 'All development phases', result: '{shown} / {total} designs',
      viewDesign: 'View the design', directionLabel: 'Design direction', phaseShort: 'Phase',
      noResults: 'We could not find that little object.', noResultsCopy: 'Try another name, or return to the complete collection.', reset: 'View all designs',
      roadmapEyebrow: 'A DIRECTION TO GROW', roadmapTitle: 'Let this world grow.\nOne step at a time.',
      roadmapCopy: 'Begin with a recognisable sign, build complete colour combinations, then extend into more of everyday life. A proposed product direction for IROVA.',
      roadmapNote: 'Phases suggest an order of exploration. They do not indicate completed samples or confirmed launch dates.', phaseAction: 'Explore these {count} directions',
      close: 'Close details', prev: 'Previous design', next: 'Next design', modalEyebrow: 'OLIVE · PRODUCT CONCEPT',
      modalRole: 'Its role in the collection', modalStage: 'Proposed development phase', modalRelated: 'Build an everyday together', modalCategory: 'Explore this category',
      modalNote: 'Images are design concepts. Materials, specifications and launch plans will follow actual product development.',
      futureEyebrow: 'ONE COLOUR IS JUST THE BEGINNING', futureTitle: 'The next colour.\nAnother complete everyday.',
      futureCopy: 'Build a shared product language with Olive, then let every colour grow into a world of its own.', otherColors: 'Future colour directions',
      backSite: 'Back to IROVA', shop: 'Explore IROVA Shop', footerNote: 'OLIVE / オリーブ · DESIGN DIRECTION',
      top: 'Back to top', captionTote: 'A world to carry', captionDevices: 'Begin with your device', captionWear: 'Wear the colour', captionLiving: 'In every little everyday',
    },
  };
  const categories = [
    {id:'digital',number:'01',label:'DIGITAL EVERYDAY',name:{zh:'设备配件',ja:'デジタル小物',en:'Device accessories'},direction:{zh:'从用户自己选择的设备色开始，把手机、耳机和电脑连接成一套。',ja:'自分で選んだデバイスの色から。スマホ、イヤホン、PCまで、同色のセットへ。',en:'Start with the device colour someone chose, then connect the phone, earbuds and laptop.'}},
    {id:'character',number:'02',label:'LITTLE COMPANIONS',name:{zh:'角色小物',ja:'キャラクター小物',en:'Character goods'},direction:{zh:'让イロチャン成为能贴、能挂、能佩戴的小小标志，带着品牌走进更多日常。',ja:'イロチャンを貼る、付ける、身につける。小さなサインから日常へ広げます。',en:'A sign to stick, attach, collect and wear. Let イロチャン find a place in everyday life.'}},
    {id:'wear',number:'03',label:'WEAR YOUR COLOUR',name:{zh:'服饰穿搭',ja:'ウェア・コーデ',en:'Wear & outfits'},direction:{zh:'从胸前的小标志到脚下的颜色，围绕 Olive 形成可以一起穿的整套搭配。',ja:'胸元の小さなサインから、足元の色まで。Oliveで一緒に着られるコーデを。',en:'From a small chest sign to colour at your feet, build pieces that can be worn together.'}},
    {id:'carry',number:'04',label:'CARRY THE WORLD',name:{zh:'包袋出行',ja:'バッグ・お出かけ',en:'Bags & journeys'},direction:{zh:'从卡包与轻装出门，延伸到通勤和旅行，让颜色随着生活的尺度一起变大。',ja:'カードケースから身軽な外出、通勤、旅へ。暮らしのスケールと一緒に色を広げます。',en:'From a card holder to a day out, a commute and a journey. Let the colour grow with the setting.'}},
    {id:'living',number:'05',label:'COLOUR AT HOME',name:{zh:'居家文具',ja:'暮らし・文具',en:'Home & stationery'},direction:{zh:'把外出时的色彩带回桌面与家中，再用统一包装将多个单品组成礼物。',ja:'持ち出す色を、デスクや家へ。共通の包装で複数のアイテムをギフトにまとめます。',en:'Bring the colour back to a desk and a home, then gather separate objects into a gift.'}},
  ];
  const phases = [
    {id:'begin',number:'01',label:'MAKE THE SIGN FAMILIAR',title:{zh:'先让人认出 IROVA。',ja:'まずは、IROVAのサインを。',en:'Make the sign familiar.'},body:{zh:'以角色小物、设备配件和日常基础单品建立识别，让一个符号先被看见、被带在身边。',ja:'キャラクター小物、デバイス小物、毎日の基本アイテムで、サインを知ってもらうところから。',en:'Begin with character goods, device accessories and everyday basics. Make the sign visible and carryable.'},images:['acrylic-keychain','phone-case-smooth']},
    {id:'extend',number:'02',label:'BUILD THE COLOUR SET',title:{zh:'再形成一整套同色日常。',ja:'次に、同色の毎日へ。',en:'Build a colour-connected everyday.'},body:{zh:'补齐服饰、通勤包袋、文具与饮用器具，让设备色逐渐变成可以整体搭配的生活方式。',ja:'ウェア、通勤のバッグ、文具、ドリンクウェアへ。デバイスの色から暮らしのコーデへ広げます。',en:'Add clothing, commuting bags, stationery and drinkware. Turn a device colour into a coordinated way of living.'},images:['hoodie','backpack']},
    {id:'expand',number:'03',label:'GROW INTO A LARGER WORLD',title:{zh:'最后，把世界继续放大。',ja:'そして、もっと広い世界へ。',en:'Grow into a larger world.'},body:{zh:'以鞋履、旅行用品与居家织物作为长期扩展方向，让系列从随身小物延伸到更完整的场景。',ja:'靴、旅のアイテム、暮らしの布ものを長期的な方向に。小物から、シーン全体へ広げます。',en:'Explore footwear, travel pieces and home textiles as longer-term directions, from small objects to complete settings.'},images:['carry-on-suitcase','cushion']},
  ];
  function normalize(value) { return String(value || '').normalize('NFKC').toLocaleLowerCase().replace(/\s+/g,' ').trim(); }
  function filterProducts(options) {
    const {category='all',phase='all',query=''}=options||{};
    const terms=normalize(query).split(' ').filter(Boolean);
    return global.IROVA_DATA.products.filter(product=>{
      if(category!=='all' && product.category!==category)return false;
      if(phase!=='all' && product.phase!==phase)return false;
      const haystack=normalize(['IROVA Olive オリーブ',product.slug,...Object.values(product.name)].join(' '));
      return terms.every(term=>haystack.includes(term));
    });
  }
  global.IROVA_CATALOG=Object.freeze({ui,categories,phases,filterProducts,normalize});
})(window);
