export default {
    body: [{
        type: 'container',
        model: 'demo',
        data: {
            username: 'init data'
        },
        children: [
            {
                type: 'input',
                value: '#ES{$data.username}',
                trigger: [{
                    event: 'onChange',
                    targetCustomer: '$this',
                    params: {
                        username: '#ES{$args.value}',
                        isRight: '#ES{$args.value === "andycall"}'
                    }
                }]
            },
            {
                type: 'div',
                show: '#ES{!!$data.isRight}',
                children: [{
                    type: 'text',
                    style: {
                        color: 'red'
                    },
                    text: 'I AM RIGHT'
                }]
            },
            {
                type: 'text',
                text: '#ES{$data.username}'
            }
        ]
    }]
}