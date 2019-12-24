function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

$(document).ready(function () {
    $('.collapsible').collapsible();

    for (let i = 0; i < skillsprofessionali.length; ++i) {
        let id = "#" + slugify(skillsprofessionali[i]["name"]);
        // console.log(id);
        var tmpBar = new ldBar(id);
        $(id).waypoint(function () {
            // console.log(id);
            let bar = document.getElementById(slugify(skillsprofessionali[i]["name"])).ldBar;
            bar.set(skillsprofessionali[i]["value"]);
        }, {offset: '100%'});
    }
    
    for (let i = 0; i < skillspersonali.length; ++i) {
        let id = "#" + slugify(skillspersonali[i]["name"]);
        // console.log(id);
        var tmpBar = new ldBar(id);
        $(id).waypoint(function () {
            // console.log(id);
            let bar = document.getElementById(slugify(skillspersonali[i]["name"])).ldBar;
            bar.set(skillspersonali[i]["value"]);
        }, {offset: '100%'});
    }
});


M.AutoInit();