$(document).ready(function() {  
    const Tree = tui.Tree;

    // 계통설비 목록 
    var data = [
        {text: '루트', children: [
            {text: '메뉴2'},
            {text: '메뉴2', state: 'closed', children: [
                {text:'메뉴3', children:[
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5'},                        
                        {text:'메뉴5'}
                    ]},
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5'},                        
                        {text:'메뉴5'}
                    ]},
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5'},                        
                        {text:'메뉴5'}
                    ]},

                ]},
                {text:'메뉴3', children:[
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5'},                        
                        {text:'메뉴5'}
                    ]},
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5'},                        
                        {text:'메뉴5'}
                    ]},
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5', state: 'closed', children: [                        
                            {text:'메뉴6'},                        
                            {text:'메뉴6'}
                        ]},                        
                        {text:'메뉴5'}
                    ]},

                ]},
                {text:'메뉴3', children:[
                    {text:'메뉴4', state: 'closed', children: [                        
                        {text:'메뉴5'},                        
                        {text:'메뉴5'}
                    ]},

                ]},
                {text:'메뉴3'}
            ]},
            {text: '메뉴2'}
        ]},
        {text : '테스트1'},
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



    //통신설정 목록
    var commiData = [
        {text: '통신설정', children: [
            {text: 'Comm1', state: 'closed', children: [
                {text:'W01', children:[
                    {text:'IED1_AP', state: 'closed', children: [                       
                        {text:'PhysConn1'},             
                        {text:'ADDR1'},             
                        {text:'C1'},             
                        {text:'C1'},
                    ]},

                ]},
                {text:'IDE4_AP', state: 'closed', children:[
                    {text:'ADDR2'},

                ]},
                {text:'IDE5_AP', state: 'closed', children:[
                    {text:'ADDR4'},

                ]},
            ]},
        ]}
    ];


    var commTree = new tui.Tree('#comm-tree', {
        data: commiData,
        nodeDefaultState: 'opened'
    }).enableFeature('ContextMenu', {
        menuData: [
            {title: 'menu1'},
            {title: 'menu2', disable: true}
        ]
    });

    commTree.on('beforeOpenContextMenu', function(nodeId) {
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

        commTree.changeContextMenu(menuData); // change menu api
    });

    commTree.on('selectContextMenu', function(eventData) {
        var treeNodeData = commTree.getNodeData(eventData.nodeId);
        var message = '"' + eventData.command + '" is selected on "' + treeNodeData.text + '" node';

        selectedMenuValue.value = message;
    });


    //지능형 통신장치 목록
    var aiCommiData = [
        {text: '지능형 통신장치', children: [
            {text: 'menu01', state: 'closed', children: [
                {text:'menu01-01', children:[
                    {text:'menu01-01-01', state: 'closed', children: [                       
                        {text:'menu01-01-01-01'},             
                        {text:'menu01-01-01-02'},             
                        {text:'menu01-01-01-03'},             
                        {text:'menu01-01-01-04'},
                    ]},

                ]},
                {text:'menu01-02', state: 'closed', children:[
                    {text:'menu01-02-01'},

                ]},
                {text:'menu01-03', state: 'closed', children:[
                    {text:'menu01-03-01'},

                ]},
            ]},
            {text: 'menu02', state: 'closed', children: [
                {text:'menu02-01', children:[
                    {text:'menu02-01-01', state: 'closed', children: [                       
                        {text:'menu02-01-01-01'},             
                        {text:'menu02-01-01-02'},             
                        {text:'menu02-01-01-03'},             
                        {text:'menu02-01-01-04'},
                    ]},

                ]},
                {text:'menu02-02', state: 'closed', children:[
                    {text:'menu02-02-01'},

                ]},
                {text:'menu02-03', state: 'closed', children:[
                    {text:'menu02-03-01'},

                ]},
            ]}
        ]}
    ];


    var aiCommTree = new tui.Tree('#ai-comm-tree', {
        data: aiCommiData,
        nodeDefaultState: 'opened'
    }).enableFeature('ContextMenu', {
        menuData: [
            {title: 'menu1'},
            {title: 'menu2', disable: true}
        ]
    });

    aiCommTree.on('beforeOpenContextMenu', function(nodeId) {
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

        aiCommTree.changeContextMenu(menuData); // change menu api
    });

    aiCommTree.on('selectContextMenu', function(eventData) {
        var treeNodeData = aiCommTree.getNodeData(eventData.nodeId);
        var message = '"' + eventData.command + '" is selected on "' + treeNodeData.text + '" node';

        selectedMenuValue.value = message;
    });


    //데이터 타입 템플릿 목록
    var  dataTypeData = [
        {text: '데이터 타입 템플릿', children: [
            {text: 'menu01', state: 'closed', children: [
                {text:'menu01-01', children:[
                    {text:'menu01-01-01', state: 'closed', children: [                       
                        {text:'menu01-01-01-01'},             
                        {text:'menu01-01-01-02'},             
                        {text:'menu01-01-01-03'},             
                        {text:'menu01-01-01-04'},
                    ]},

                ]},
                {text:'menu01-02', state: 'closed', children:[
                    {text:'menu01-02-01'},

                ]},
                {text:'menu01-03', state: 'closed', children:[
                    {text:'menu01-03-01'},

                ]},
            ]},
            {text: 'menu02', state: 'closed', children: [
                {text:'menu02-01', children:[
                    {text:'menu02-01-01', state: 'closed', children: [                       
                        {text:'menu02-01-01-01'},             
                        {text:'menu02-01-01-02'},             
                        {text:'menu02-01-01-03'},             
                        {text:'menu02-01-01-04'},
                    ]},

                ]},
                {text:'menu02-02', state: 'closed', children:[
                    {text:'menu02-02-01'},

                ]},
                {text:'menu02-03', state: 'closed', children:[
                    {text:'menu02-03-01'},

                ]},
            ]}
        ]}
    ];


    var dataTypeDataTree = new tui.Tree('#data-type-tree', {
        data: dataTypeData,
        nodeDefaultState: 'opened'
    }).enableFeature('ContextMenu', {
        menuData: [
            {title: 'menu1'},
            {title: 'menu2', disable: true}
        ]
    });

    dataTypeDataTree.on('beforeOpenContextMenu', function(nodeId) {
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

        dataTypeDataTree.changeContextMenu(menuData); // change menu api
    });

    dataTypeDataTree.on('selectContextMenu', function(eventData) {
        var treeNodeData = dataTypeDataTree.getNodeData(eventData.nodeId);
        var message = '"' + eventData.command + '" is selected on "' + treeNodeData.text + '" node';

        selectedMenuValue.value = message;
    });

  
});



