export default {
    body: [{
        type: 'container',
        model: 'demo',
        data: {
            text: 'helloworld'
        },
        children: [
            {
                type: 'text',
                text: '#ES{$data.text}'
            },
            {
                type: 'text',
                text: '#ES{function() {return $data.text}}'
            }
        ]
    }]
}