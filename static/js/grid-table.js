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
                    name: 'thead00'
                  },
                  {
                    header: 'THEAD01',
                    name: 'thead01',
                    editor: 'text'
                  },
                  {
                    header: 'THEAD02',
                    name: 'thead02'
                  }
            ],
            //rowHeaders: ['rowNum'],
            //pageOptions: {
            //    useClient: true,
            //    perPage: 10
            //  }
        });

});



