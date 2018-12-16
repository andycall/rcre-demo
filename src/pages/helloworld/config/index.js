export default {
    body: [{
        type: 'container',
        model: 'demo',
        data: {
            text: 'helloworld'
        },
        children: [{
            type: 'button',
            text: '#ES{$data.text}'
        }]
    }]
}