Ext.define('grapefruit.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Audio'
    ],
    config: {
        layout: {
            type: 'vbox',
            align: 'middle',
            pack: 'center'
        },
        style: 'background-color:white;',
        items: [
            {
                xtype: 'container',
                html: '<img style="max-width:100%; max-height:100%" src="bullshit.jpg">',
                listeners: {
                    touchstart: {
                        fn: function() {
                            var audio = Ext.ComponentQuery.query('audio[name=horrible]')[0];
                            var url = 'horrible' + (Math.floor(Math.random() * 5) + 1) + '.mp3';

                            this.addCls('tinted');

                            if (audio.isPlaying()) {
                                audio.stop();
                            }

                            if (Ext.os.is.Android) {
                                var src = '/android_asset/www/' + url;
                                var media = new Media(src);
                                media.play();
                            } else {
                                audio.setUrl(url);
                                audio.play();
                            }
                        },
                        element: 'element'
                    },
                    touchend: {
                        fn: function() {
                            this.removeCls('tinted');
                        },
                        element: 'element'
                    }
                }
            },
            {
                xtype: 'audio',
                name: 'horrible',
                hidden: false,
                url: 'horrible1.mp3'
            }
        ]
    }
});
