var levels = [
  {
    helpTitle : "依據類型選取 HTML 元素",
    selectorName : "類型選擇器",
    doThis : "選取餐桌上所有的盤子",
    selector : "plate",
    syntax : "A",
    help : "選取所有類型為 <strong>A</strong> 的元素. 類型是 HTML 標籤的名稱, 所以 <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> 是不同類型的元素.",
    examples : [
      '<strong>div</strong> 選取所有標籤為 <tag>div</tag> 的元素.',
      '<strong>p</strong> 選取所有標籤為 <tag>p</tag> 的元素.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "選取所有的便當盒",
    selector : "bento",
    syntax : "A",
    helpTitle : "依據類型選取 HTML 元素",
    selectorName : "類型選擇器",
    help : "選取所有類型為 <strong>A</strong> 的元素. 類型是 HTML 標籤的名稱, 所以 <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> 是不同類型的元素.",
    examples : [
      '<strong>div</strong> 選取所有標籤為 <tag>div</tag> 的元素.',
      '<strong>p</strong> 選取所有標籤為 <tag>p</tag> 的元素.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "選取有上色的盤子",
    selector : "#fancy",
    selectorName: "ID 選擇器",
    helpTitle: "依據 ID 名稱選取 HTML 元素",
    syntax: "#id",
    help : '選取符合 <strong>id</strong> 名稱的元素. 你也可以結合並同時使用 ID 選擇器和類別選擇器去做選取.',
    examples : [
      '<strong>#cool</strong> 可以選取到 <strong>id="cool"</strong> 的元素',
      '<strong>ul#long</strong> 可以選取到標籤為 <tag>ul id="long"</tag> 的元素'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "選取被包含在特定元素裡的元素",
    selectorName : "後代選擇器",
    doThis : "選取盤子裡的蘋果",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "選取所有被包在 <strong>A</strong> 裡面的 <strong>B</strong>. <strong>B</strong> 之所以被稱為「後代」是因為它被包含在其他元素中.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> 選取 <tag>p</tag> 元素所包含的所有 <tag>strong</tag> 元素',
      '<strong>#fancy&nbsp;&nbsp;span</strong> 選取 <strong>id="fancy"</strong> 元素所包含的所有 <tag>span</tag> 元素',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "選取有上色的盤子裡的醃黃瓜",
    selector : "#fancy pickle",
    helpTitle: "結合後代選擇器、ID 選擇器",
    syntax: "#id&nbsp;&nbsp;A",
    help : '你可以結合任何選擇器到後代選擇器中.',
    examples : [
      '<strong>#cool&nbsp;span</strong> 選取 <strong>id="cool"</strong> 的元素底下所有的 <tag>span</tag> 元素'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "選取所有的小蘋果",
    selector : ".small",
    selectorName: "類別選擇器",
    helpTitle: "依據類別選取元素",
    syntax: ".classname",
    help : '類別選擇器可以選取符合類別的元素. 每個元素只能擁有一個 ID，但可以擁有多個 Class 類別',
    examples : [
    '<strong>.neato</strong> 選取所有的 <strong>class="neato"</strong> 元素'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "選取所有的小橘子",
    selector : "orange.small",
    helpTitle: "結合其它選擇器",
    syntax: "A.className",
    help : '你可以結合其他選擇器像是類別選擇器一起使用',
    examples : [
      '<strong>ul.important</strong> 選取所有類別為 important <strong>class="important"</strong> 的 <tag>ul</tag> 元素',
      '<strong>#big.wide</strong> 選取 ID 符合 <strong>id="big"</strong> 且類別擁有 <strong>class="wide"</strong> 的元素'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "選取便當盒裡的小橘子",
    selector : "bento orange.small",
    syntax: "再加把勁！",
    helpTitle: "加油！你可以完成的",
    help : '運用前面所學的知識的完成這道關卡！',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "選取所有的盤子和便當盒",
    selector : "plate,bento",
    selectorName : "逗號選取",
    helpTitle: "使用逗號選取多個元素",
    syntax : "A, B",
    help : '選取所有的 <strong>A</strong> 和 <strong>B</strong> 元素. 你可以使用逗號去合併任何的選擇器',
    examples: [
    '<strong>p, .fun</strong> 選取所有的 <tag>p</tag> 元素和所有類別為 <strong>class="fun"</strong> 元素',
    '<strong>a, p, div</strong> 選取所有的 <tag>a</tag> 元素、<tag>p</tag> 元素和 <tag>div</tag> 元素'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "選取桌子上所有的東西！",
    selector : "*",
    selectorName:  "通用選擇器",
    helpTitle: "選取任何的東西!",
    syntax : "*",
    help : '你可以使用通用選擇器去選取所有的元素! ',
    examples : [
      '<strong>p *</strong> 選取 <tag>p</tag> 元素裡的所有元素',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "選取盤子裡的所有東西",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "結合使用通用選擇器",
    help : '選取所有在 <strong>A</strong> 裡面的元素',
    examples : [
      '<strong>p *</strong> 選取所有在 <tag>p</tag> 裡面的元素',
      '<strong>ul.fancy *</strong> 選取所有在類別為 <tag>ul class="fancy"</tag> 裡面的元素'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "選取所有在盤子旁的蘋果",
    selector : "plate + apple",
    helpTitle: "選擇相鄰在特定元素後面的元素",
    selectorName: "相鄰選擇器",
    syntax : "A + B",
    help : "選擇所有相鄰在 <strong>A</strong> 元素後的 <strong>B</strong> 元素. 元素相鄰皆在一起稱為「兄弟」元素. 他們屬於在同一個階層中 <br/><br/>根據這個關卡的 HTML 結構，擁有相同的縮排元素則是「兄弟」元素",
    examples : [
      '<strong>p + .intro</strong> 選擇所有相鄰在 <tag>p</tag> 元素後面且類別為 <strong>class="intro"</strong> 的元素',
      '<strong>div + a</strong> 選擇所有相鄰在 <tag>div</tag> 元素後面的 <tag>a</tag> 元素'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "通用同層選擇器",
    helpTitle: "選擇所有接在另一個元素後面的元素",
    syntax: "A ~ B",
    doThis : "選取便當盒後面的醃黃瓜",
    selector : "bento ~ pickle",
    help : "你可以選取所有接在元素後面所有同層的「兄弟」元素. 這個選擇係和相鄰選擇器 (A + B) 很類似，但它可以選擇所有接在後面的元素，但相鄰選擇器只能選取一個",
    examples : [
      '<strong>A ~ B</strong> 選取所有接在元素 <strong>A</strong> 後面的元素 <strong>B</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "子選擇器",
    syntax: "A > B&nbsp;",
    doThis : "選擇盤子裡下一層的蘋果",
    selector : "plate > apple",
    helpTitle: "選取某個元素裡下一層的子元素",
    help : "你可以選取元素裡的下一層元素，元素裡的下一層元素稱為「子元素」<br><br> 元素裡的元素不管結構有幾層通稱為「後代元素」",
    examples : [
      '<strong>A > B</strong> 選擇元素 <strong>A</strong> 下一層所有的 <strong>B</strong> 元素'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "偽選擇器 - 第一個子元素",
    helpTitle: "選取元素裡的第一個子元素",
    doThis : "選取最上面的橘子",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "你可以透過此選擇器選取第一個子元素，子元素是指某個元素下一層的元素，你也可以結合其他選擇器加以運用。",
    examples : [
      '<strong>:first-child</strong> 選取所有排在第一個的元素',
      '<strong>p:first-child</strong> 選取所有排在第一個的 <tag>p</tag> 元素',
      '<strong>div p:first-child</strong> 在元素 <tag>div</tag> 裡面，選取所有排在第一個的 <tag>p</tag> 元素'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "偽選擇器 - 唯一的子元素",
    helpTitle: "選擇某個元素裡唯一的子元素",
    doThis : "選取盤子裡的蘋果和醃黃瓜",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "選擇某個元素裡唯一的子元素",
    examples : [
      '<strong>span:only-child</strong> 選取一個 <tag>span</tag> 元素，且它是父元素裡唯一的子元素',
      '<strong>ul li:only-child</strong> 選取 <tag>ul</tag> 裡唯一一個的 <tag>li</tag> 子元素'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "偽選擇器 - 最後一個子元素",
    helpTitle: "選擇包含在某個元素裡的最後一個元素",
    doThis : "選取小蘋果和醃黃瓜",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "你可以用這個選擇器去選取某個元素裡的最後一個子元素。 <br><br>進階提示 &rarr; 如果元素裡只有一個子元素，<strong>:first-child</strong>、<strong>:only-child</strong>、<strong>:last-child</strong> 都會選取到同一個元素",
    examples : [
      '<strong>:last-child</strong> 選擇所有排在最後的子元素',
      '<strong>span:last-child</strong> 選擇所有排在最後的 <tag>span</tag> 子元素.',
      '<strong>ul li:last-child</strong> 選取所有 <tag>ul</tag> 裡排在最後的 <tag>li</tag> 子元素'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Nth Child 偽選擇器",
    helpTitle: "選取特定順序的元素",
    doThis : "選取排在第 3 個的盤子",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "選取某個元素中排在第 n 個元素",
    examples : [
      '<strong>:nth-child(8)</strong> 選取所有排在第 8 個的子元素',
      '<strong>div p:nth-child(2)</strong> 選取所有在 <strong>div</strong> 元素裡排第 2 個的 <strong>p</strong> 元素',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Nth Last 偽選擇器",
    helpTitle: "從後面數來，選取特定順序的元素",
    doThis : "選取第一個便當",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "和 nth-child 偽選擇器相似，只是 nth-last 是從後面數過來",
    examples : [
      '<strong>:nth-last-child(2)</strong> 選擇所有倒數第 2 個的子元素'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "第一個符合類型子元素 - 偽選擇器",
    helpTitle: "選取第一個符合類型的子元素",
    doThis : "Select first apple",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "選取第一個符合類型的元素",
    examples : [
      '<strong>span:first-of-type</strong> 選取第一個 <tag>span</tag> 元素的子元素'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth of Type 選擇器",
    doThis: "選取順序為偶數的盤子",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "選取特定類型和順序的元素，也可以選取奇數（even）或 偶數（odd）的條件選取",
    examples: [
      '<strong>div:nth-of-type(2)</strong> 選取第 2 個 <tag>div</tag> 元素',
      '<strong>.example:nth-of-type(odd)</strong> 選取所有排在奇數的元素'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Nth-of-type 算式選擇器",
    doThis: "選取從第 3 個數起排序在 2 的倍數的盤子",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "從 B 算起，選取排序為 A 的倍數的元素",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> 從第 2 個元素（包含此元素）算起，順序排在 6 的倍數的元素'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Only of Type 選擇器",
    helpTitle: "選取符合類型中唯一一個的子元素",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "選取中間的盤子裡的蘋果",
    help : "選取符合類型中唯一的子元素",
    examples : [
      '<strong>p span:only-of-type</strong> 在所有的 <tag>p</tag> 元素中，選取唯一且類型為 <tag>span</tag> 的子元素'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "選取每個類型中排在最後的元素",
    doThis : "選取排在最後的橘子和蘋果",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "選取每種類型中排在最後的子元素，提醒類型就是元素的標籤名稱，所以 <tag>p</tag> 和 <tag>span</tag> 是不同類型",
    examples : [
      '<strong>div:last-of-type</strong> 選取所有類型為 <tag>div</tag> 且排序在最後的元素',
      '<strong>p span:last-of-type</strong> 在所有的 <tag>p</tag> 元素中，選取所有排序在最後的 <tag>span</tag> 元素'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "空選擇器",
    helpTitle: "選取不包含其他子元素的元素",
    doThis : "選取空的便當盒",
    selector : "bento:empty",
    syntax: ":empty",
    help : "選取不包含其他子元素的元素",
    examples : [
      '<strong>div:empty</strong> 選取所有空的 <tag>div</tag> 元素'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "不包含選擇器",
    helpTitle: "排除符合特定條件的元素",
    doThis : "選取大蘋果",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : '在選取元素中排除符合 <strong>"X"</strong> 條件的元素',
    examples : [
      '<strong>:not(#fancy)</strong> 選取所有的元素但排除符合 <strong>id="fancy"</strong> 的元素',
      '<strong>div:not(:first-child)</strong> 選取所有的 <tag>div</tag> 元素但排除排在第 1 個的元素',
      '<strong>:not(.big, .medium)</strong> 選取所有元素但排除擁有類別為 <strong>class="big"</strong> 何 <strong>class="medium"</strong> 的元素'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "屬性選擇器",
    helpTitle: "選取擁有特定屬性的元素",
    doThis : "選取有標記名字的元素",
    selector : "[for]",
    syntax: "[attribute]",
    help : '屬性被標記在開始的標籤 ，例如：<tag>span attribute="value"</tag>. 屬性的值可以是空的不一定要有值',
    examples : [
      '<strong>a[href]</strong> 選取所有擁有 <strong>href="anything"</strong> 屬性的 <tag>a</tag> 元素',
      '<strong>[type]</strong> 選取所有擁有 <strong>type="anything"</strong> 屬性的元素'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "屬性選擇器",
    helpTitle: "選取擁有特定屬性的元素",
    doThis : "Select the plates for someone",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "結合其他選擇器（例如：類型選擇器）接在後面使用",
    examples : [
      '<strong>[value]</strong> 選取所有擁有 <strong>value="anything"</strong> 屬性的元素',
      '<strong>a[href]</strong> 選取所有擁有 <strong>href="anything"</strong> 屬性的 <tag>a</tag> 元素',
      '<strong>input[disabled]</strong> 選取所有擁有 <strong>disabled</strong> 屬性的 <tag>input</tag> 元素'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "屬性值選擇器",
    helpTitle: "選取符合屬性的值的元素",
    doThis : "選取 Vitaly 的餐點",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "屬性選擇器要求符合條件的字串一模一樣",
    examples : [
      '<strong>input[type="checkbox"]</strong> 選取所有 checkbox 的輸入框'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "屬性值符合開頭的選擇器",
    helpTitle: "選取屬性值開頭符合條件字串的元素",
    doThis : "選取名字開頭為 'Sa' 的餐點",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> 選取所有類別為 <strong>toy</strong> 且元素屬性 category 的值開頭符合 Swin 的文字，例如：<strong>category="Swimwear"</strong> 或 <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "屬性值符合結尾的選擇器",
    helpTitle: "選取屬性值結尾符合條件字串的元素",
    doThis : "選取名字結尾為 'ato' 的餐點",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> 選取所有圖片元素且為 <strong>.jpg</strong> 的圖片',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "屬性匹配選擇器",
    helpTitle: "選取屬性值中有包含到條件字串的元素",
    syntax: '[attribute*="value"]',
    doThis : "選取名稱中包含 'obb' 的餐點",
    selector : '[for*="obb"]',
    help : '非常好用方便的選擇器， 可以針對元素中 <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes 去設計樣式',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> 選取網址路徑中包含 "thumbnails" 的圖片',
      '<strong>[class*="heading"]</strong> 選取類別中包含 heading 字串的元素，例如：<strong>class="main-heading"</strong> 或 <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
