const htmlRegex = /\.css|\.js/g;
module.export = function () {
    return {
        name: "vite-plugin-add-timestamp",
        apply: "build",
        transformIndexHtml(html) {
            return html.replace(htmlRegex, ($0) => `${$0}?time=${Date.now()}`)
        },
    }
};
