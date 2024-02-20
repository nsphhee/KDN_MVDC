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
            thead02: '가나다라마바사아자차카타파하가나다라 아자차카 타파하아아아 가나다라마바사아자차카타파하가나다라 아자차카 타파하아아아 가나다라마바사아자차카타파하가나다라 아자차카 타파하아아아'
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

        ];
        const grid = new tui.Grid({
            el: document.getElementById('grid'),
            data: gridData,
            scrollX: false,
            scrollY: false,
            rowHeaders: ['checkbox'],
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
            rowHeaders: ['checkbox'],
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



