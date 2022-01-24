/* https://stackoverflow.com/a/4673436/12367873 */
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#browser_compatibility */
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace */
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
            ? args[number]
            : match;
        });
    };
}

function styleString(unstyledString, extraStyleAttrs) {
    return '<span style="color:greenyellow;font-family:Inconsolata;font-size:90%;{1}">{0}</span>'.format(unstyledString, extraStyleAttrs)
}

let typewriter = new Typewriter("#typewriter", {
    cursor: styleString('█', ''),
    delay: 25
});

typewriter
    .typeString(styleString('$ ./run_main.sh liweiyap', ''))
    .typeString('<br/>')
    .pauseFor(2000)
    .typeString(styleString('Name................. | Commits', ''))
    .typeString('<br/>')
    .typeString(styleString('text-popover-macOS .. | 125', ''))
    .typeString('<br/>')
    .typeString(styleString('LeetCode_Solutions .. | 109', ''))
    .typeString('<br/>')
    .typeString(styleString('narradir-android .... | 100', ''))
    .typeString('<br/>')
    .typeString(styleString('liweiyap.github.io .. | 91', ''))
    .typeString('<br/>')
    .typeString(styleString('Conway_GameOfLife ... | 59', ''))
    .typeString('<br/>')
    .typeString(styleString('ProteinFolding ...... | 45', ''))
    .typeString('<br/>')
    .typeString(styleString('HackerRank-Solutions. | 43', ''))
    .typeString('<br/>')
    .typeString(styleString('MyCPU ............... | 40', ''))
    .typeString('<br/>')
    .typeString(styleString('liweiyap ............ | 34', ''))
    .typeString('<br/>')
    .typeString(styleString('SortingReposByCommits | 28', ''))
    .typeString('<br/>')
    .typeString(styleString('DataStructs_Algos ... | 26', ''))
    .typeString('<br/>')
    .typeString(styleString('metawear-impl ....... | 26', ''))
    .typeString('<br/>')
    .typeString(styleString('xkcdbrowser-android . | 23', ''))
    .typeString('<br/>')
    .typeString(styleString('PvZ ................. | 22', ''))
    .typeString('<br/>')
    .typeString(styleString('foxtrot-android ..... | 16', ''))
    .typeString('<br/>')
    .typeString(styleString('VecMatElemOps ....... | 6', ''))
    .typeString('<br/>')
    .typeString(styleString('pomodoro-android .... | 5', ''))
    .typeString('<br/>')
    .typeString(styleString('linkedin-janitor .... | 2', ''))
    .typeString('<br/><br/>')
    .typeString(styleString('Total repositories: 18', ''))
    .typeString('<br/>')
    .typeString(styleString('Total commits: 800', ''))
    .typeString(styleString('<br/><br/>$', 'margin-right:10px;'))
    .start();