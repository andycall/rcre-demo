export default {
    body: [{
        type: 'container',
        model: 'demo',
        data: {
            username: 'init data',
            password: '1234'
        },
        children: [{
            type: 'input',
            name: 'username'
        }, {
            type: 'input',
            name: 'password'
        },{
            type: 'text',
            text: '#ES{$data.username + "_" + $data.password}'
        }]
    }]
}