var Matrix = (function() {

    'use strict';

    var matrix = {
        run: run,
        name: 'Neo',
        createTag: createTag,
        showTag: showTag,
        hideTag: hideTag,
        getTarget: getTarget,
        getMessages: getMessages,
        writeText: writeText
    };

    function run() {
        matrix.createTag();
        var konami = new Konami(function() {
            matrix.showTag();
            matrix.writeText(0, 0);
        });
    }

    function getMessages() {
        return [
            ' ',
            '█████████████████████',
            ' ',
            '█',
            ' ',
            '█',
            ' ',
            '█',
            ' ',
            'Wake up, ' + matrix.name + '...',
            'The Matrix has you...',
            'Follow the white rabbit.',
            'Knock, knock, ' + matrix.name + '.'
        ];
    }

    function createTag() {
        var tag = document.createElement('div');
        tag.setAttribute('id', 'matrix');
        tag.style.display = 'none';
        tag.style.position = 'absolute';
        tag.style.backgroundColor = '#000';
        tag.style.width = '100%';
        tag.style.height = '100%';
        tag.style.color = '#009900';
        tag.style.padding = '20px';
        tag.style.fontSize = '20px';
        tag.style.fontFamily = 'monospace';
        tag.style.textShadow = '0px 0px 5px #008f00';
        tag.style.boxSizing = 'border-box';
        tag.style.top = 0;
        tag.style.zIndex = 999999;
        document.body.appendChild(tag);
    }

    function showTag() {
        var target = matrix.getTarget();
        target.style.display = 'block';
    }

    function hideTag() {
        var target = matrix.getTarget();
        target.style.display = 'none';
    }

    function getTarget() {
        return document.getElementById('matrix');
    }

    function writeText(arrayIndex, wordPosition) {
        var target = matrix.getTarget();
        var messages = matrix.getMessages();
        var message = messages[arrayIndex];

        if(wordPosition < message.length) {
            target.innerHTML = target.innerHTML + message[wordPosition];
            wordPosition++;
            setTimeout(function() {
                matrix.writeText(arrayIndex, wordPosition);
            }, 400);
        } else {
            arrayIndex++;
            setTimeout(function() {
                target.innerHTML = '';
                if(arrayIndex < messages.length) {
                    matrix.writeText(arrayIndex, 0);
                } else {
                    matrix.hideTag();
                }
            }, 800);
        }
    }

    function extend(source, properties) {
        var property;
        for(property in properties) {
            if(properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    if(arguments[0] && typeof arguments[0] === 'object') {
        var args = extend(matrix, arguments[0]);
        matrix.name = (args.name) ? args.name : matrix.name;
    }

    return matrix.run();
});