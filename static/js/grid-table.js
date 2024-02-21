$(document).ready(function() {  

    const gridData = [
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        },
        {
            thead00: 'text01',
            thead01: 'text02',
            thead02: 'text03'
        }
       

        ];
        const grid = new tui.Grid({
            el: document.getElementById('grid'),
            data: gridData,
            scrollX: false,
            scrollY: false,
            rowHeaders: ['checkbox'],
            virtualScrolling: true,
            rowHeight: 'auto',
            display: { noData: 'No Data' },
            columnOptions:{ resizable: true }, 
            header: {
                height: 34
            },
            columns: [
                {
                    header: 'THEAD00',
                    name: 'thead00', 
                    whiteSpace: 'normal',
                  },
                  {
                    header: 'THEAD01',
                    name: 'thead01',
                    editor: 'text', 
                    whiteSpace: 'normal',
                  },
                  {
                    header: 'THEAD02',
                    name: 'thead02', 
                    whiteSpace: 'normal',
                  }
            ],
            //rowHeaders: ['rowNum'],
            //pageOptions: {
            //    useClient: true,
            //    perPage: 10
            //  }
        });

        const grid02 = new tui.Grid({
            el: document.getElementById('grid02'),
            data: gridData,
            scrollX: false,
            scrollY: false,
            rowHeight: 'auto',
            display: { noData: 'No Data'}, 
            header: {
                height: 34
            },
            columns: [
                {
                    header: 'THEAD00',
                    name: 'thead00', 
                    whiteSpace: 'normal'
                  },
                  {
                    header: 'THEAD01',
                    name: 'thead01',
                    editor: 'text', 
                    whiteSpace: 'normal'
                  },
                  {
                    header: 'THEAD02',
                    name: 'thead02', 
                    whiteSpace: 'normal'
                  }
            ]
        });


});



