Vue.component('project-list', {
    template: '<div><project v-for="project in projects">{{ project.name }}</project></div>',
    data() {
        return {
            projects: [
                {
                    name: 'hello world',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com',
                },
                {
                    name: 'star track',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com',
                },
                {
                    name: 'magical todo list',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com',
                },
                {
                    name: 'phonegap',
                    version: 'v1.0',
                    icon: 'icon.png',
                    localPath: 'http://www.google.com',
                }
            ]
        };
    }
});

Vue.component('project', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});
