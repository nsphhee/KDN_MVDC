$(document).ready(function() {  
    const Tree = tui.Tree;
    var data = [
        {text: 'rootA', children: [
            {text: 'sub-A1'},
            {text: 'sub-A2'},
            {text: 'sub-A3'},
            {text: 'sub-A4'},
            {text: 'sub-A5', state: 'closed', children: [
                {text:'sub-A5A', children:[
                    {text:'sub-A5A1'}
                ]},
                {text:'sub_A5B'}
            ]},
            {text: 'sub-A6'},
            {text: 'sub-A7'},
            {text: 'sub-A8'},
            {text: 'sub-A9', state: 'closed', children: [
                {text:'sub-A9A'},
                {text:'sub-A9B'}
            ]},
            {text: 'sub-A10'},
            {text: 'sub-A11'},
            {text: 'sub-A12'}
        ]},
        {text: 'rootB', state:'closed', children: [
            {text:'sub-B1'},
            {text:'sub-B2'},
            {text:'sub-B3'}
        ]}
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



