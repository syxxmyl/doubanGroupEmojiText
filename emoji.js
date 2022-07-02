<<<<<<< HEAD
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
=======
var isShow = false;
var comment = document.getElementsByClassName("comment-wrapper");
var textArea = document.getElementById("last");

var currentEmojiListID = 0;
var emojiDataColNum = 2; // 每行多少个表情包 //

var emojiData = {}
emojiData[0] = ['[叁叁_叫我美女宝]',
    '[叁叁_吃瓜]',
    '[叁叁_理发店]'
];
emojiData[1] = ['[嘉然_mua]',
    '[嘉然_安详]',
    '[嘉然_暗中观察]'
];

var emojiImgSelector = ['"https://i0.hdslb.com/bfs/new_dyn/e7fb58dae8651b78666a97a964e394245858138.png"',
    '"https://i0.hdslb.com/bfs/emote/74ea9b89f8923df6a123cabe6053762b9e776387.png"'
];
var emojiImgs = {}
emojiImgs[0] = ['"https://i0.hdslb.com/bfs/new_dyn/e25201330974e4227009a588b4861cdd5858138.png"',
    '"https://i0.hdslb.com/bfs/album/42fff4f4aa4ba7ad5a7ee448f1a952a1a6753741.png"',
    '"https://i0.hdslb.com/bfs/album/101dbcd54aa6a6a5fc253ea9095748a65da7ce4a.png"'
];
emojiImgs[1] = ['"https://i0.hdslb.com/bfs/emote/74ea9b89f8923df6a123cabe6053762b9e776387.png"',
    '"https://i0.hdslb.com/bfs/emote/312359401cc72c34fcea3654cdba42db0f9f3dd0.png"',
    '"https://i0.hdslb.com/bfs/emote/3acf0b43facfd0601f5ab88cca6e401aa4f5a02e.png"'
];

var emojiEmDiv = document.createElement("div");
var emojiEm = document.createElement("em");
var emojiList = document.createElement("em");

emojiEm.append('表情包')
emojiEm.addEventListener('click', () => {
    isShow = !isShow;
    if (isShow) {
        var arr = [];
        arr.push('<div class="emojiDataDiv">');
        arr.push('<em>');
        arr.push('<div class="emojiDataHeadDiv"');
        arr.push('<em>');
        for (let idx = 0; idx < emojiImgSelector.length; idx++) {
            arr.push('<img id="emojilist' + String(idx) + '" src=' + emojiImgSelector[idx] + ' height="33" weight="33" alt="' + String(idx) + '">');
        }
        arr.push('</em>');
        arr.push('</div>'); //emojiDataHeadDiv
        arr.push('<div class="emojiDataPicdiv">');
        arr.push('<em>');
        for (let i = 0; i < emojiData[0].length; i++) {
            if (i != 0 && i % emojiDataColNum == 0) { arr.push('<br/>'); }
            let html = '<img id="emojidata' + String(i) + '" src=' + emojiImgs[0][i] + ' height="60" weight="60" alt="' + emojiData[0][i] + '">';
            console.log(html);
            arr.push(html);
        }
        arr.push('</em>');
        arr.push('</div>'); //emojiDataPicdiv
        arr.push('</em>');
        arr.push('</div>'); //emojiDataDiv
        emojiList.innerHTML = arr.join('');

        for (let k = 0; k < emojiImgs[currentEmojiListID].length; k++) {
            let emojili = document.getElementById("emojidata" + String(k));
            let emojival = emojili.alt;
            emojili.addEventListener('click', () => {
                textArea.value += emojival;

            }, false)
        }

        // 表情包列表头 //
        for (let j = 0; j < emojiImgSelector.length; j++) {
            let emojili = document.getElementById("emojilist" + String(j));
            emojili.addEventListener('click', () => {
                var emojiArr = [];
                currentEmojiListID = j;
                console.log("表情包列表头" + currentEmojiListID);
                let emojiDataPicdiv = document.getElementsByClassName("emojiDataPicdiv");
                for (let idx = 0; idx < emojiImgs[j].length; idx++) {
                    if (idx != 0 && idx % emojiDataColNum == 0) { emojiArr.push('<br/>'); }
                    let html = '<img id="emojidata' + String(idx) + '" src=' + emojiImgs[j][idx] + ' height="60" weight="60" alt="' + emojiData[j][idx] + '">';
                    console.log(html);
                    emojiArr.push(html);
                }
                emojiDataPicdiv[0].innerHTML = emojiArr.join('');

                for (let k = 0; k < emojiImgs[currentEmojiListID].length; k++) {

                    let emojili = document.getElementById("emojidata" + String(k));
                    let emojival = emojili.alt;
                    emojili.addEventListener('click', () => {
                        console.log("emojidata.alt=" + emojival)
                        textArea.value += emojival;
                    }, false)
                }
            }, false)
        }

    } else {
        emojiList.innerHTML = '';
    }
}, false)

emojiEmDiv.appendChild(emojiEm)
emojiEmDiv.appendChild(emojiList)
comment[0].appendChild(emojiEmDiv)
>>>>>>> 5d989593773f630db0042f687c5ac867f19e221f
