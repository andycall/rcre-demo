export default {
    body: [{
        type: 'container',
        model: 'demo',
        data: {
            username: 'init data'
        },
        children: [{
            type: 'input',
            name: 'username'
        }, {
            type: 'text',
            text: '#ES{$data.username}'
        }]
    }]
}