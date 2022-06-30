var isShow = false;
var comment = document.getElementsByClassName("comment-wrapper");
var textArea = document.getElementById("last");
var datas = ['[叁叁_叫我美女宝]',
    '[叁叁_吃瓜]',
    '[叁叁_理发店]'
];
var imgs = ['"https://i0.hdslb.com/bfs/new_dyn/e25201330974e4227009a588b4861cdd5858138.png"',
    '"https://i0.hdslb.com/bfs/album/42fff4f4aa4ba7ad5a7ee448f1a952a1a6753741.png"',
    '"https://i0.hdslb.com/bfs/album/101dbcd54aa6a6a5fc253ea9095748a65da7ce4a.png"'
]
var emojiEm = document.createElement("em");
var emojiList = document.createElement("em");
emojiEm.append('表情包')
emojiEm.addEventListener('click', () => {
    isShow = !isShow;
    if (isShow) {
        var arr = [];
        arr.push('<table>');
        for (var i = 0; i < datas.length; i++) {
            if (i != 0 && i % 2 == 0) { arr.push('<tr>'); }
            var html = '<td><img id="emojidatas' + String(i) + '" src=' + imgs[i] + ' height="33" weight="33" alt="' + datas[i] + '"></td>';
            console.log(html);
            arr.push(html);
            if (i != 0 && i % 2 == 0) { arr.push('</tr>'); }
        }
        arr.push('</table>');
        emojiList.innerHTML = arr.join('');

        for (var j = 0; j < datas.length; j++) {
            let emojili = document.getElementById("emojidatas" + String(j));
            let emojival = emojili.alt;
            emojili.addEventListener('click', () => {
                var textArea = document.getElementById("last");
                textArea.value += emojival;

            }, false)
        }

    } else {
        emojiList.innerHTML = '';
    }
}, false)

comment[0].appendChild(emojiEm)
comment[0].appendChild(emojiList)