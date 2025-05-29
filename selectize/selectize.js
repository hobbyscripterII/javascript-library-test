$(document).ready(function() {
    const $tag       = $('#tag');
    const $tagBtn    = $('.tag-btn');
    const $tagResult = $('.tag-result');

    $tag.selectize({
        plugins   : ['remove_button'],
        delimiter : ',',
        persist   : false,
        create    : function(input) {
            return { value : input, text : input };
        },
        options   : [
            { value : 'java'  , text : 'java'   },
            { value : 'spring', text : 'spring' },
            { value : 'docker', text : 'docker' },
            { value : 'linux' , text : 'linux'  }
        ]
    });

    $tagBtn.click(function() {
        const tagStr = $tag.val();
        
        $tagResult.empty();
        $tagResult.html(tagStr);
    });
});