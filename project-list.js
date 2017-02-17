var projectListComponent = Vue.extend({
    template: '#project-list',
    data() {
        return {
            projects: [
                {
                    name: 'hello world',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com'
                },
                {
                    name: 'star track',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com'
                },
                {
                    name: 'magical todo list',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com'
                },
                {
                    name: 'phonegap',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com'
                }
            ]
        };
    }
});

var projectListItemComponent = Vue.extend({
    template: '#project-list-item',
    props: ['item'],
    data() {
        return {
            item: {}
        }
    }
});

Vue.component('project-list', projectListComponent);
Vue.component('project-list-item', projectListItemComponent);

new Vue({
    el: '#root',
});
