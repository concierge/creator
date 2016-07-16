exports.run = function(api, event) {
    var creators = [
        $$`Thank you to`,
        $$`Matthew Knox`,
        $$`Dion Woolley`,
        $$`Jay Harris`,
        $$`James Fairbairn`,
        $$`other weird people`
    ];
    api.sendMessage(creators.join('\n'), event.thread_id);
    return true;
};
