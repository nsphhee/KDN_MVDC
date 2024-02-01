$(document).ready(function() {  
    const Tree = tui.Tree;
    var data = [
        {text: '계통도', children: [
            {text: 'VT1'},
            {text: 'VT2', state: 'closed', children: [
                {text:'BUS', children:[
                    {text:'BUS1', state: 'closed', children: [                        
                        {text:'TMI'},                        
                        {text:'MMXU1'}
                    ]},
                    {text:'BUS2', state: 'closed', children: [                        
                        {text:'TMI'},                        
                        {text:'MMXU1'}
                    ]},
                    {text:'BUS3', state: 'closed', children: [                        
                        {text:'TMI'},                        
                        {text:'MMXU1'}
                    ]},

                ]},
                {text:'MWS', children:[
                    {text:'MWS11', state: 'closed', children: [                        
                        {text:'TMI'},                        
                        {text:'MMXU1'}
                    ]},
                    {text:'MWS22', state: 'closed', children: [                        
                        {text:'TMI'},                        
                        {text:'MMXU1'}
                    ]},
                    {text:'MWS33', state: 'closed', children: [                        
                        {text:'MWS33-11', state: 'closed', children: [                        
                            {text:'TMI'},                        
                            {text:'TMI'}
                        ]},                        
                        {text:'MWS33-22'}
                    ]},

                ]},
                {text:'BUS', children:[
                    {text:'BUS1', state: 'closed', children: [                        
                        {text:'TMI'},                        
                        {text:'MMXU1'}
                    ]},

                ]},
                {text:'BUS2'}
            ]},
            {text: 'ST1234'}
        ]},
        {text : '테스트1 '},
        {text : '테스트2'},
        {text : '테스트3'},
        {text : '테스트4'},
        {text : '테스트5'},
        {text : '테스트6'},
        {text : '테스트7'},
    ];

    var tree = new tui.Tree('#tree', {
        data: data,
        nodeDefaultState: 'opened'
    }).enableFeature('ContextMenu', {
        menuData: [
            {title: 'menu1'},
            {title: 'menu2', disable: true}
        ]
    });

    tree.on('beforeOpenContextMenu', function(nodeId) {
        var menuData = [];

        if (nodeId === 'tui-tree-node-2') { // sub-A1 node
            menuData = [
                {title: 'menu'}
            ];
        } else {
            menuData = [
                {title: 'menu1'},
                {title: 'menu2', disable: true},
                {title: 'menu3', menu: [
                    {title: 'submenu1', disable: true},
                    {title: 'submenu2'}
                ]},
                {separator: true},
                {title: 'menu4'},
                {title: 'menu5'}
            ];
        }

        tree.changeContextMenu(menuData); // change menu api
    });

    tree.on('selectContextMenu', function(eventData) {
        var treeNodeData = tree.getNodeData(eventData.nodeId);
        var message = '"' + eventData.command + '" is selected on "' + treeNodeData.text + '" node';

        selectedMenuValue.value = message;
    });

  
});



